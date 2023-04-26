const Teaser = () => {
  return (
    <>
      <h1 className="py-[2rem] pl-12 text-4xl font-bold">TEASER</h1>
      <div className="lg: relative flex h-full w-screen justify-center p-12">
        <iframe
          className="h-3/4 lg:h-full"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
};
export default Teaser;
