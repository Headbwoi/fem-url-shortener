import { useEffect, useState } from "react"
import ShortenedLinkCard from "./ShortenedLinkCard"

const UrlShortener = () => {
  //@ts-ignore
  const getStoredLinks = JSON.parse(localStorage.getItem("links")) ?? []
  const [urlValue, setUrlValue] = useState("")
  const [error, setError] = useState(false)
  const [storedLinks, setStoredLinks] = useState(getStoredLinks)

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(storedLinks))
  })

  const shortenLink = async (e: any) => {
    e.preventDefault()
    urlValue === "" ? setError(true) : setError(false)
    let editedUrl = urlValue.replaceAll(" ", "")

    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${editedUrl}`)
    const responseData = await res.json()
    responseData.ok
      ? setStoredLinks([...storedLinks, responseData.result])
      : setError(true)
    setUrlValue("")
  }
  const deleteUrl = (tag: any) => {
    storedLinks.splice(tag, 1)
    localStorage.setItem("links", JSON.stringify(storedLinks))
    window.location.reload()
  }
  return (
    <>
      <div className="url-container md:w-full absolute -top-[6.6875rem] md:-top-[5.3125rem] left-1/2 -translate-x-1/2  overflow-x-hidden">
        <div
          className="rounded-lg h-[13.375rem] md:h-[10.625rem] bg-Dark_Violet bg-[url('./assets/bg-shorten-mobile.svg')] md:bg-[url('./assets/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-center mb-5  flex items-center justify-between px-6 md:px-16"
          onSubmit={shortenLink}
        >
          <form className="flex items-center justify-between flex-col md:flex-row relative w-full">
            <div className="w-full block mb-5 md:mb-0 relative">
              <input
                type="text"
                name="url"
                value={urlValue}
                onFocus={() => setError(false)}
                className={`w-full md:w-[78%] lg:w-[48.125rem] h-16 rounded-lg px-8 mb-4 md:mb-0 outline-none ${
                  error == true ? "border-4 border-Red" : "border-none"
                }`}
                placeholder="Shorten a link here..."
                onChange={(e) => setUrlValue(e.target.value)}
              />
              {error && (
                <p className="text-base text-Red italic absolute -bottom-4 md:-bottom-7">
                  Please add a link
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full md:w-[11.875rem] h-12 md:h-16 cta-secondary rounded-md"
            >
              Shorten It!
            </button>
          </form>
        </div>
        {/* links preview */}
      </div>
      <div className="w-full pt-[135px] md:pt-[120px] space-y-4">
        {storedLinks.length !== 0 &&
          storedLinks.map((link: any) => {
            return (
              <ShortenedLinkCard
                key={storedLinks.indexOf(link)}
                id={storedLinks.indexOf(link)}
                data={link}
                deleteUrl={deleteUrl}
              />
            )
          })}
      </div>
    </>
  )
}
export default UrlShortener
