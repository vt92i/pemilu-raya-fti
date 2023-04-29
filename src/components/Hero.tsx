// import { teaserRef } from "../recoil/atoms";
// import { useRecoilValue } from "recoil";

const Hero = () => {
  // const ref = useRecoilValue(teaserRef);
  return (
    <>
      <div className="min-h-screen bg-[#477167]">
        <div className="hero absolute inset-0 z-10 min-h-screen w-full bg-[url('/images/bg.png')]">
          <div className="hero-content text-center z-50">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl lg:text-8xl font-bold tracking-[0.1em]">
                PEMILRA FTI UAJY 2023
              </h1>
              <p className="py-6 tracking-[0.2em] text-4xl">
              “Find The Captain”
              </p>
              <button
                className="btn-primary btn"
                onClick={() =>
                  document.getElementById("teaser")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Read More
              </button>
            </div>
          </div>
          <div className="absolute inset min-h-screen w-full bg-gradient-to-b from-[#477167]/0 to-[#477167]/90"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
