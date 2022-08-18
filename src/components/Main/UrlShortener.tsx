import { useState } from "react"
import { CopyCard } from "./ShortenedLinkCard"

export interface Props {
  oldLink: string
  newLink?: string
}
export const UrlShortener = () => {
  const [urlValue, setUrlValue] = useState("")
  const [error, setError] = useState(false)

  const handleUrlInput = (e: any) => {
    e.preventDefault()
  }
  const validateInput = () => {
    urlValue === "" ? setError(true) : setError(false)
  }
  return (
    <div className="url-container md:w-full absolute -top-[6.6875rem] md:-top-[5.3125rem] left-1/2 -translate-x-1/2  overflow-x-hidden">
      <div
        className="rounded-lg h-[13.375rem] md:h-[10.625rem] bg-Dark_Violet bg-[url('./assets/bg-shorten-mobile.svg')] md:bg-[url('./assets/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-center mb-5  flex items-center justify-between px-6 md:px-16"
        onSubmit={handleUrlInput}
      >
        <form className="flex items-center justify-between flex-col md:flex-row relative w-full">
          <div className="w-full block mb-5 md:mb-0 relative">
            <input
              type="url"
              name="url"
              value={urlValue}
              className={`w-full md:w-[78%] lg:w-[48.125rem] h-16 rounded-lg px-8 mb-4 md:mb-0 outline-none ${
                error == true ? "border-4 border-Red" : "border-none"
              }`}
              placeholder="Shorten a link here..."
              onChange={(e) => setUrlValue(e.target.value)}
            />
            {error && (
              <p className="text-base text-Red italic absolute top-full mt-1">
                Please add a link
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full md:w-[11.875rem] h-12 md:h-16 cta-secondary rounded-md"
            onClick={validateInput}
          >
            Shorten It!
          </button>
        </form>
      </div>
      {/* links preview */}

      <div className="w-full space-y-4">
        <CopyCard
          oldLink="https://frontendmentor.io"
          newLink="https://frontendmentor.io"
        />
      </div>
    </div>
  )
}
