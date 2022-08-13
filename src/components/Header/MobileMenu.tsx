import Links from "./Links"

const MobileMenu = () => {
  return (
    <div className="absolute top-[6.0625rem] left-1/2 -translate-x-1/2 h-[24rem] w-[20.625rem] rounded-lg bg-Dark_Violet px-6 py-10 fade-in z-50">
      <div className="flex items-center justify-center flex-col space-y-7 pb-9 mb-7 border-b border-Grayish_Violet">
        <Links name="features" color="text-white" height="text-lg" />
        <Links name="pricing" color="text-white" height="text-lg" />
        <Links name="resources" color="text-white" height="text-lg" />
      </div>
      <div className="flex items-center justify-center flex-col space-y-7">
        <Links name="login" color="text-white" height="text-base" />
        <a href="/" className="cta-base w-full rounded-lg h-[3.125rem]">
          sign up
        </a>
      </div>
    </div>
  )
}

export default MobileMenu
