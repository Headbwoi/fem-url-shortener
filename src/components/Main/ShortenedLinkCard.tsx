import { useState } from "react"
import { Props } from "./UrlShortener"

const ShortenedLinkCard = (props: Props) => {
  const [copied, setCopied] = useState(false)
  const flipBtn = () => {
    setCopied(true)
  }
  return (
    <div className="h-40 md:h-[4.625rem] flex items-center justify-center md:justify-between flex-col md:flex-row py-2 md:py-0 bg-white px-[1.125rem] md:px-8">
      {/* old link */}
      <div className=" border-b border-Gray md:border-none w-full">
        <p className="text-Very_Dark_Violet pb-2 md:pb-0">{props.oldLink}</p>
      </div>
      {/* new link and btn */}
      <div className="pt-2 md:pt-0 flex md:items-center flex-col md:flex-row w-full md:w-auto md:space-x-6">
        <p className="text-Cyan text-left mb-2 md:mb-0">{props.newLink}</p>

        <button
          className={`${
            copied ? "cta-tertiary" : "cta-secondary"
          } h-10 md:h-11 w-full md:w-[6.625rem] font-normal`}
          onClick={flipBtn}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </div>
  )
}
export default ShortenedLinkCard
