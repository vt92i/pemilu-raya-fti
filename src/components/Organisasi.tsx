import organisasi from "../data/organisasi.json";

const Organisasi = () => {
  return (
    <>
      <div className="py-[2rem]">
        <div className="align-center flex flex-wrap justify-center gap-4">
          {organisasi.map((item) => {
            return (
              <>
                <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                    <figure>
                      <img className="w-full" src={item.logo} alt={item.name} />
                    </figure>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Organisasi;
