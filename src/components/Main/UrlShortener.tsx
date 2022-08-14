import { useState } from "react"

interface Props {
  oldLink: string
  newLink?: string
}
const UrlShortener = () => {
  const [urlValue, setUrlValue] = useState("")

  const handleUrlInput = (e: any) => {
    e.preventDefault()
  }
  const validateInput = () => {
    let checkState = false
    urlValue === "" ? checkState : !checkState
    return checkState
  }
  return (
    <div className="url-container md:w-full absolute -top-[6.6875rem] md:-top-[5.3125rem] left-1/2 -translate-x-1/2  overflow-x-hidden">
      <div
        className="rounded-lg h-[13.375rem] md:h-[10.625rem] bg-Dark_Violet bg-[url('./assets/bg-shorten-mobile.svg')] md:bg-[url('./assets/bg-shorten-desktop.svg')] bg-no-repeat bg-right-top md:bg-center mb-5  flex items-center justify-between px-6 md:px-16"
        onSubmit={handleUrlInput}
      >
        <form className="flex items-center justify-between flex-col md:flex-row relative w-full">
          <div className="w-full block mb-5 md:mb-0">
            <input
              type="url"
              name="url"
              value={urlValue}
              className="w-full md:w-[78%] lg:w-[48.125rem] h-16 rounded-lg px-8 mb-4 md:mb-0 outline-none"
              placeholder="Shorten a link here..."
              onChange={(e) => setUrlValue(e.target.value)}
            />

            {/*  <p className="text-base text-Red italic">Please add a link</p>*/}
          </div>
          <button
            type="submit"
            className="w-full md:w-[11.875rem] h-12 md:h-16 cta-secondary rounded-md"
            onClick={validateInput}
          >
            Shorten It!
          </button>
        </form>
        {/*  */}
      </div>
      {/* links preview */}

      <div className="w-full space-y-4">
        {/* <CopyCard
          oldLink="https://frontendmentor.io"
          newLink="https://frontendmentor.io"
        /> */}
      </div>
    </div>
  )
}
function CopyCard(props: Props) {
  return (
    <div className="h-40 md:h-[4.625rem] flex items-center justify-center md:justify-between flex-col md:flex-row py-2 md:py-0 bg-white px-[1.125rem] md:px-8">
      {/* old link */}
      <div className=" border-b border-Gray md:border-none w-full">
        <p className="text-Very_Dark_Violet pb-2 md:pb-0">{props.oldLink}</p>
      </div>
      {/* new link and btn */}
      <div className="pt-2 md:pt-0 flex md:items-center flex-col md:flex-row w-full md:w-auto md:space-x-6">
        <p className="text-Cyan text-left mb-2 md:mb-0">{props.newLink}</p>
        <button className="cta-secondary h-10 md:h-11 w-full md:w-[6.625rem]">
          Copy
        </button>
      </div>
    </div>
  )
}

export default UrlShortener
