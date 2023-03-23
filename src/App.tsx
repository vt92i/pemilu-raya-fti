import { initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  OAuthProvider,
  signInWithPopup,
  signOut,
  User,
  updateProfile,
} from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
  getBlob,
} from "firebase/storage";

import {
  getFirestore,
  getDoc,
  getDocs,
  collection,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCG8uKpFRKVCNAbaMQvUD7LugC12wKcSes",
  authDomain: "pemilra-fti-uajy.firebaseapp.com",
  projectId: "pemilra-fti-uajy",
  storageBucket: "pemilra-fti-uajy.appspot.com",
  messagingSenderId: "957092970786",
  appId: "1:957092970786:web:8f4e8eacdbba5393e1e57b",
  measurementId: "G-5C2LK92QB5",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new OAuthProvider("microsoft.com");
provider.setCustomParameters({
  prompt: "select_account",
  tenant: "89870a59-1408-40ee-a72a-22c7020ac747",
});
provider.addScope("User.ReadBasic.All");

const firestore = getFirestore(app);
const storage = getStorage(app);

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const avatar = await fetch(
        "https://graph.microsoft.com/v1.0/me/photo/$value",
        {
          headers: {
            Authorization: `Bearer ${
              OAuthProvider.credentialFromResult(result)?.accessToken
            }`,
          },
        }
      );
      const avatarBlob = await avatar.blob();
      const avatarRef = ref(storage, `avatars/${user?.uid}.jpg`);

      await uploadBytes(avatarRef, avatarBlob);
      await updateProfile(user, {
        photoURL: await getDownloadURL(avatarRef),
      });

      console.log(OAuthProvider.credentialFromResult(result)?.accessToken);

      fetchVotedCandidates(user.email?.split("@")[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (user) => {
    setUser(user);
  });

  const getMajor = (email: string | null): string => {
    switch (email?.split("@")[0].substring(2, 5)) {
      case "061":
        return "Teknik Industri";
      case "071":
        return "Informatika";
      case "171":
        return "Sistem Informasi";
      default:
        return "Not Found";
    }
  };

  const convertUnixTime = (unixTime: string | undefined): string => {
    const date = new Date(unixTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const [candidates, setCandidates] = useState<any>([]);
  const [votedCandidates, setVotedCandidates] = useState<any>([]);

  const fetchCandidate = async () => {
    await getDocs(collection(firestore, "candidates")).then((querySnapshot) => {
      setCandidates(
        querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  };

  const fetchVotedCandidates = async (uid: string) => {
    await getDoc(doc(firestore, "users", uid)).then((doc) => {
      const data = doc.data();
      if (data) {
        data.votes.forEach(async (vote: any) => {
          await getDoc(vote).then((doc) => {
            setVotedCandidates((votedCandidates: any) => [
              ...votedCandidates,
              {
                ...doc.data(),
                id: doc.id,
              },
            ]);
          });
        });
      }
    });
  };

  useEffect(() => {
    fetchCandidate();
  }, []);

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login with Microsoft</button>
      )}
      {user && (
        <div>
          <p>{user.uid}</p>
          <p>{user.displayName}</p>
          <p>{user.email}</p>
          <p>{getMajor(user.email)}</p>
          <p>{convertUnixTime(user.metadata.creationTime)}</p>
          <p>
            <img src={user.photoURL || undefined} alt="avatar" />
          </p>
          {candidates.map((candidate: any) => {
            return (
              <div key={candidate.id}>
                <p>{candidate.id}</p>
                <p>{candidate.vision}</p>
                <p>{candidate.mission}</p>
              </div>
            );
          })}
          {votedCandidates.map((votedCandidate: any) => {
            return (
              <div key={votedCandidate.id}>
                <p>{votedCandidate.id}</p>
                <p>{votedCandidate.vision}</p>
                <p>{votedCandidate.mission}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
