const Hero = () => {
  return (
    <>
      <div className="min-h-screen bg-[#477167]">
        <div className="hero absolute inset-0 z-10 min-h-screen w-full bg-[url('/images/bg.png')]">
          <div className="hero-content text-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-6xl font-bold">PEMILRA FTI UAJY 2023</h1>
              <p className="py-6 tracking-[0.25rem]">
                "Find the Kapitan, and you will find the answer."
              </p>
              <button className="btn-primary btn">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
