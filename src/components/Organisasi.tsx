import kandidat from "../data/kandidat.json";
import organisasi from "../data/organisasi.json";

const Organisasi = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4 pt-24">
        <h1 className="text-4xl font-bold tracking-[0.1em]">ORGANISASI</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {organisasi.map((item) => {
            return (
              <>
                <label key={item.id} htmlFor={`modal-${item.name}`}>
                  <div className="card w-full bg-base-100 shadow-xl lg:w-96">
                    <div className="card-body">
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
            <input type="checkbox" id={`modal-${item.name}`} className="modal-toggle" />
            <label htmlFor={`modal-${item.name}`} className="modal cursor-pointer">
              <div className="modal-box max-w-full">
                <h3 className="pb-4 text-center text-lg font-bold tracking-[0.1em]">{item.name}</h3>
                <div className="flex flex-col justify-center gap-4 overflow-auto lg:flex-row">
                  {item.kandidat.map((k) => {
                    return (
                      <div className="card flex w-full flex-col items-center justify-center bg-base-300 py-8 shadow-xl">
                        <div className="flex h-64 w-64 items-center justify-center rounded-full bg-fuchsia-400">
                          <img src={k.foto} alt={k.name} />
                        </div>
                        <div className="card-body">
                          <p>Kandidat {k.id}</p>
                          <h2 className="card-title">{k.name}</h2>
                          <label htmlFor={`kandidat-${k.name}-${k.id}`}>
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
            <input type="checkbox" id={`kandidat-${k.name}-${k.id}`} className="modal-toggle" />
            <label htmlFor={`kandidat-${k.name}-${k.id}`} className="modal cursor-pointer">
              <div className="z-60 modal-box max-w-full">
                <div className="card card-side flex flex-col items-center justify-center gap-4 bg-base-200 p-8 shadow-xl">
                  <h2 className="card-title">{k.name}</h2>
                  <div className="flex h-64 w-64 items-center justify-center rounded-full bg-fuchsia-400">
                    <img src={k.foto} alt={k.name} />
                  </div>
                  <div className="card-body">
                    <h1 className="text-xl font-bold">VISI</h1>
                    <ul>
                      {k.visi.map((v) => {
                        return <li>{v}</li>;
                      })}
                    </ul>
                    <h1 className="text-xl font-bold">MISI</h1>
                    <ul>
                      {k.misi.map((v) => {
                        return <li>{v}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="card-actions justify-end">
                      <button className="btn-primary btn">KILL</button>
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
