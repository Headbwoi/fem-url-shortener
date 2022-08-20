import { useEffect, useState } from "react"
import { CloseMenu } from "../../assets"

const ShortenedLinkCard = (props: any) => {
  const data = props.data
  const deleteUrl = props.deleteUrl
  const id = props.id
  let oldLink = data.original_link
  let newLink = data.full_short_link2
  const [copied, setCopied] = useState(false)
  const [screensize, setScreensize] = useState(window.innerWidth)

  const copyLink = async () => {
    await navigator.clipboard.writeText(newLink)
    setCopied(true)
  }
  useEffect(() => {
    if (!copied) return
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [copied])

  const handleResize = () => {
    setScreensize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="min-h-40 md:h-[4.625rem] flex items-center justify-center md:justify-between flex-col md:flex-row py-2 md:py-0 bg-white px-[1.125rem] md:px-8 rounded-md">
      {/* old link */}
      <div className=" border-b border-Gray md:border-none w-full">
        <a
          href={oldLink}
          className="text-Very_Dark_Violet py-2.5 md:py-0 block"
        >
          {oldLink}
        </a>
      </div>
      {/* new link and btn */}
      <div className="pt-2 md:pt-0 flex md:items-center flex-col md:flex-row w-full md:w-auto md:space-x-6">
        <a href={newLink} className="text-Cyan text-left mb-2 md:mb-0 block">
          {newLink}
        </a>

        <button
          className={`${
            copied ? "cta-tertiary" : "cta-secondary"
          } h-10 md:h-11 w-full md:w-[6.625rem] font-normal mb-3 md:mb-0`}
          onClick={copyLink}
        >
          {copied ? "Copied" : "Copy"}
        </button>

        <div id={id} onClick={() => deleteUrl(id)} className="mb-3 md:mb-0">
          {screensize < 768 ? (
            <button className="flex w-full md:hidden bg-Dark_Violet h-10 md:h-11 cta-tertiary">
              Delete
            </button>
          ) : (
            <button>
              <CloseMenu />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default ShortenedLinkCard
