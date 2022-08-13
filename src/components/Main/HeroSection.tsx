import Illustration from "../../assets/illustration-working.svg"
const HeroSection = () => {
  return (
    <section className="relative ">
      <div className="container flex items-center justify-between flex-col md:flex-row-reverse">
        {/* image */}
        {/* <div className="image w-[30.1875rem] translate-x-24   relative"> */}
        <div className="h-[21.375rem] lg:h-[30.1875rem] ">
          <img
            src={Illustration}
            alt="illustration"
            className=" w-full  lg:hidden"
          />
        </div>
        {/* text */}
        <div className="lg:w-[560px] px-7 pt-12 md:pt-0 md:px-2 lg:px-0 text-center md:text-left md:mr-[100px]">
          <h1 className="font-bold text-3xl md:text-6xl lg:text mb-7">
            More than just shorter links
          </h1>
          <p className="text-lg md:text-2xl font-medium">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
        </div>
        <img
          src={Illustration}
          alt="illustration"
          className="hidden lg:flex lg:absolute lg:top-0 lg:right-0 lg:w-[48rem] lg:h-[30.1875rem] lg:translate-x-52"
        />
      </div>
    </section>
  )
}

export default HeroSection
