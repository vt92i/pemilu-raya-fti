const Teaser = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4">
        <h1 className="text-5xl font-bold tracking-[0.1em]">TEASER</h1>

        <div className="card w-fit bg-base-100 shadow-xl flex h-84">
          <div className="card-body">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/bwM66NpfikM?autoplay=1&mute=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              frameBorder={0}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teaser;
