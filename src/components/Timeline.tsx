import timeline from "../data/timeline.json";

const Timeline = () => {
  return (
    <>
      <div
        id="timeline"
        className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4 pb-24 pt-24"
      >
        <h1 className="text-5xl font-bold tracking-[0.1em]">TIMELINE</h1>
        <div className="align-center flex flex-wrap justify-center gap-4">
          {timeline.map((item) => {
            return (
              <div
                key={item.id}
                className={`card w-full bg-base-100 shadow-xl lg:w-96 ${
                  item.id % 2 == 0 ? "bg-accent" : "bg-base-100"
                }`}
              >
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <h2 className="card-title">{item.date}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
