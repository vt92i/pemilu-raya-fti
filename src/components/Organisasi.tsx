import kandidat from "../data/kandidat.json";
import organisasi from "../data/organisasi.json";

const Organisasi = () => {
  return (
    <>
      <div className="py-[2rem]">
        <h1 className="pl-12 text-4xl font-bold ">ORGANISASI</h1>
        <div className="align-center flex flex-wrap justify-center gap-4">
          {organisasi.map((item) => {
            return (
              <>
                <label htmlFor={`my-modal-${item.name}`}>
                  <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
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
            <input type="checkbox" id={`my-modal-${item.name}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${item.name}`} className="modal cursor-pointer">
              <label className="modal-box relative max-w-full" htmlFor="">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <div className="align-center flex w-full flex-col justify-center gap-4 overflow-auto lg:flex-row">
                  {item.kandidat.map((k) => {
                    return (
                      <div className="card w-full bg-base-100 shadow-xl">
                        <figure>
                          <div className="avatar">
                            <div className="w-2/4 rounded-full">
                              <img src={k.foto} />
                            </div>
                          </div>
                        </figure>
                        <div className="card-body">
                          <p>Kandidat No. {k.id}</p>
                          <h2 className="card-title">{k.name}</h2>
                          <label htmlFor={`a-${k.name}-${k.id}`}>
                            <div className="card-actions justify-start">Lebih lanjut</div>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </label>
            </label>
          </>
        );
      })}
      {kandidat.map((item) =>
        item.kandidat.map((k) => (
          <>
            <input type="checkbox" id={`a-${k.name}-${k.id}`} className="modal-toggle" />
            <label htmlFor={`a-${k.name}-${k.id}`} className="modal cursor-pointer">
              <label className="z-60 modal-box relative max-h-full max-w-full" htmlFor="">
                <div className="card card-side max-h-full max-w-full bg-base-100 shadow-xl">
                  <figure>
                    <img src={k.foto} alt="Movie" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{k.name}</h2>
                    <div className="card-actions justify-end">
                      <button className="btn-primary btn">Watch</button>
                    </div>
                  </div>
                </div>
              </label>
            </label>
          </>
        ))
      )}
    </>
  );
};

export default Organisasi;
