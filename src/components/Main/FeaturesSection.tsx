import Statistics from "./Statistics"
import UrlShortener from "./UrlShortener"

const FeaturesSection = () => {
  return (
    <section className="features bg-Gray">
      <div className="container px-6 md:px-0 pb-32 pt-[178px] md:pt-[220px] md:pb-[7.5rem] relative ">
        <UrlShortener />
        <Statistics />
      </div>
    </section>
  )
}

export default FeaturesSection
