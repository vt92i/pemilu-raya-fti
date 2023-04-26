const Teaser = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 bg-[#477167] p-4">
        <h1 className="text-4xl font-bold tracking-[0.1em]">TEASER</h1>
        <iframe
          className="h-64 w-full lg:h-96 lg:w-6/12"
          src="https://www.youtube.com/embed/_FzmYV4Ywkk/?autoplay=1&mute=1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
          frameBorder={0}
        ></iframe>
      </div>
    </>
  );
};
export default Teaser;
