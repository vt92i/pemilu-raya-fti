import kandidat from "../data/kandidat.json";
import organisasi from "../data/organisasi.json";

const Organisasi = () => {
  return (
    <>
      <div id="kandidat" className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4 pt-24">
        <h1 className="text-5xl font-bold tracking-[0.1em]">ORGANISASI</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {organisasi.map((item) => {
            return (
              <>
                <label key={item.id} htmlFor={`modal-${item.name}`}>
                  <div className="btn h-64 btn-ghost card bg-base-100 shadow-xl w-64 transition duration-200 cursor-pointer">
                    <div className="justify-center card-body">
                      <figure>
                        <img className="w-full" src={item.logo} alt={item.name} />
                      </figure>
                    </div>
                  </div>
                </label>
              </>
            );
          })}
        </div>
      </div>

      {kandidat.map((item) => {
        return (
          <>
            <input key={`${item.id}_k`} type="checkbox" id={`modal-${item.name}`} className="modal-toggle" />
            <label htmlFor={`modal-${item.name}`} className="modal cursor-pointer">
              <div className="modal-box max-w-full">
                <h3 className="pb-4 text-center font-bold tracking-[0.1em] text-4xl">
                  {item.name}
                </h3>
                <div className="flex flex-col justify-center gap-4 overflow-auto lg:flex-row">
                  {item.kandidat.map((k) => {
                    return (
                      <div key={`${k.id}_kandidatkuh`} className="card gap-8 flex w-full flex-col items-center justify-center bg-base-300 py-8 shadow-xl px-4">
                        <img
                          className="aspect-square bg-primary p-2 rounded-full w-64 h-64 bg-center bg-cover"
                          src={k.foto}
                          alt={k.name}
                        />
                        <div className="text-center flex flex-col gap-2 items-center">
                          <h2 className="text-center">Kandidat Nomer Urut {k.id}</h2>
                          <h2 className="text-center font-bold text-4xl pb-4">{k.name}</h2>
                          <label
                            htmlFor={`kandidat-${k.name}-${k.id}`}
                            className="btn btn-ghost bg-primary w-fit"
                          >
                            <div className="card-actions justify-start">Lebih lanjut</div>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </label>
          </>
        );
      })}

      {kandidat.map((K) =>
        K.kandidat.map((k) => (
          <>
            <input key={k.id} type="checkbox" id={`kandidat-${k.name}-${k.id}`} className="modal-toggle" />
            <label key={`container_${k.id}`} htmlFor={`kandidat-${k.name}-${k.id}`} className="modal cursor-pointer">
              <div className="z-60 modal-box max-w-full">
                <div className="card card-side flex flex-col items-center justify-center gap-4 bg-base-200 p-8 shadow-xl">
                  <h2 className="card-title text-4xl text-center">{k.name}</h2>
                  <img
                    className="aspect-square bg-primary p-2 rounded-full w-64 h-64 bg-center bg-cover"
                    src={k.foto}
                    alt={k.name}
                  />
                  <h1 className="text-xl font-bold pt-4">PROFILE</h1>
                  <iframe
                    className="w-full lg:w-1/2 aspect-video"
                    src={`${k.video}?autoplay=0&mute=1`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen={true}
                    frameBorder={0}
                  ></iframe>
                  <div className="card-body justify-center items-center">
                    <h1 className="text-xl font-bold">VISI</h1>
                    <div className="w-full max-w-2xl">
                      <ul>
                        {k.visi.map((v, index) => {
                          return (
                            <li key={`${v}-${index}`} className="list-inside list-disc">
                              {v}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                    <h1 className="text-xl font-bold pt-12">MISI</h1>
                    <div className="w-full max-w-2xl">
                      <ul>
                        {k.misi.map((v, index) => {
                          return <li key={`${v}-${index}`} className="list-inside list-disc">{v}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </>
        ))
      )}
    </>
  );
};

export default Organisasi;
