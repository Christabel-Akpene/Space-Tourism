
const Home = () => {
    return (
      <div className="text-white px-10 lg:grid lg:grid-rows-[100px_auto] lg:min-h-[calc(100dvh-173px)]">
          <div className="hidden lg:block"></div>
        <div className="flex flex-col text-center items-center space-y-10 pt-5 sm:pt-16 lg:flex-row lg:text-left">
            <div className="flex flex-col items-center lg:justify-between lg:items-start lg:w-1/2 lg:pl-20">
                <p><span className="text-md inline-block pb-3 sm:text-3xl lg:text-lg">SO, YOU WANT TO TRAVEL TO</span> <br /> <span className="text-9xl lg:text-8xl font-bold inline-block pb-7">SPACE</span></p>
                <p className="sm:w-3/4 lg:w-4/6">Let's face it; if you want to go to space, you might as well genuinely go  to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!.</p>
            </div>
          <div className="w-28 h-28 sm:h-36 sm:w-36 bg-white rounded-full text-black flex items-center justify-center m-auto cursor-pointer hover:shadow-lg shadow-[0_0_100px_rgba(255,255,255,0.7)]">
            EXPLORE
         </div>
        </div>
      </div>
    )

}

export default Home