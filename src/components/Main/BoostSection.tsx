const BoostSection = () => {
  return (
    <section className="h-[14.375rem] md:h-[15.625rem] bg-Dark_Violet flex items-center justify-center flex-col bg-[url('./assets/bg-boost-mobile.svg')] md:bg-[url('./assets/bg-boost-desktop.svg')] bg-no-repeat md:bg-center bg-right-top">
      <h3 className="text-2xl md:text-3xl text-white font-bold mb-[1.125rem] md:mb-7">
        Boost your links today
      </h3>
      <button className="cta-base w-[12.5rem] h-14">Get Started</button>
    </section>
  )
}

export default BoostSection
