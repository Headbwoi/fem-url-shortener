import IconBrandRecognition from "../../assets/IconBrandRecognition"
import IconDetailedRecords from "../../assets/IconDetailedRecords"
import IconFullyCustomizable from "../../assets/IconFullyCustomizable"

const Statistics = () => {
  return (
    <div className="pt-[80px] md:pt-[120px]">
      <Heading />
      <Statfeatures />
    </div>
  )
}

export default Statistics
function Heading() {
  return (
    <div className="px-6 md:px-0 text-center md:w-[25.25rem] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-[2.125rem]">
        Advanced Statistics
      </h2>
      <p className="text-sm md:text-base font-normal">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
  )
}

const Statfeatures = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-24 md:mt-28">
      {/* card one */}
      <div className="h-[17.875rem] bg-white rounded-md w-full text-center md:text-left px-8 pb-11 relative z-20">
        <div className="grid place-items-center h-[5.625rem] w-[5.625rem] rounded-full bg-Dark_Violet -mt-[2.8175rem] mx-auto mb-7">
          <IconBrandRecognition />
        </div>
        <p
          aria-label="heading"
          className="text-2xl font-bold mb-6 text-Very_Dark_Violet"
        >
          Brand Recognition
        </p>
        <p className="text-lg font-normal text-Grayish_Violet">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
        <span className="block bg-Cyan w-[10px] h-[30.5rem] absolute lg:top-1/2 top-full left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-full lg:h-[10px] lg:w-[30.5rem] md:hidden lg:flex z-10"></span>
      </div>

      {/* card two */}
      <div className="h-[17.875rem] bg-white rounded-md w-full  text-center md:text-left px-8 pb-11 mt-11 relative z-20">
        <div className="grid place-items-center h-[5.625rem] w-[5.625rem] rounded-full bg-Dark_Violet -mt-[2.8175rem] mx-auto mb-7">
          <IconDetailedRecords />
        </div>
        <p
          aria-label="heading"
          className="text-2xl font-bold mb-3 text-Very_Dark_Violet"
        >
          Detailed Records
        </p>
        <p className="text-lg font-normal text-Grayish_Violet">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
      </div>
      {/* card three */}
      <div className="h-[17.875rem] bg-white rounded-md w-full text-center md:text-left px-8 pb-11 mt-[5.5rem] relative z-20">
        <div className="grid place-items-center h-[5.625rem] w-[5.625rem] rounded-full bg-Dark_Violet -mt-[2.8175rem] mx-auto mb-7">
          <IconFullyCustomizable />
        </div>
        <p
          aria-label="heading"
          className="text-2xl font-bold mb-3 text-Very_Dark_Violet"
        >
          Fully Customizable
        </p>
        <p className="text-lg font-normal text-Grayish_Violet">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  )
}
