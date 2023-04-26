const Teaser = () => {
  return (
    <>
      <div className="flex h-screen w-screen justify-center p-10 ">
        <iframe
          className="h-3/5 w-4/5 md:h-4/5 md:w-4/5"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&autoplay=1"
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
};
export default Teaser;
