import timeline from "../data/timeline.json";

const Timeline = () => {
  return (
    <>
      <div className="py-[2rem]">
        <div className="align-center flex flex-wrap justify-center gap-4">
          {timeline.map((item) => {
            return (
              <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <h2 className="card-title">{item.date}</h2>
                  <p>{item.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn-primary btn">Read More</button>
                  </div>
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
