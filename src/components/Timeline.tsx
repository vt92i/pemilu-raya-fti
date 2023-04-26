import { useState } from "react";

import timeline from "../data/timeline.json";

const Timeline = () => {
  const [detail, setDetail] = useState({});
  return (
    <>
      <div className="py-[2rem]">
        <h1 className="pl-12 text-4xl font-bold ">TIMELINE</h1>
        <div className="align-center flex flex-wrap justify-center gap-4">
          {timeline.map((item) => {
            return (
              <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
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
