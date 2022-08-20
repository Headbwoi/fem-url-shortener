import {
  Facebook,
  Instagram,
  LogoWhite,
  Pinterest,
  TwitterIcon,
} from "../../assets"

interface Link {
  linkName: string
}
const Footer = () => {
  return (
    <footer className="bg-Very_Dark_Violet h-[48.5rem] md:h-[19.375rem] flex items-center">
      <div className="container py-[3.25rem] md:py-0">
        <div className="flex items-center md:items-start justify-start flex-col md:flex-row">
          {/* logo */}
          <div className="mb-14 md:mr-[162px] lg:mr-[16.375rem]">
            <LogoWhite />
          </div>
          {/* links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mb-6 md:mb-0">
            <div className="text-center md:text-left md:mr-20">
              <p className="text-white font-bold mb-7">Features</p>
              <div className="space-y-3 block">
                <Link linkName="Link Shortening" />
                <Link linkName="Branded Links" />
                <Link linkName="Analytics" />
              </div>
            </div>
            <div className="text-center md:text-left md:mr-[105px]">
              <p className="text-white font-bold mb-7">Resources</p>
              <div className="space-y-3 block">
                <Link linkName="Blog" />
                <Link linkName="Developers" />
                <Link linkName="Support" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-white font-bold mb-7">Company</p>
              <div className="space-y-3 block">
                <Link linkName="About" />
                <Link linkName="Our Team" />
                <Link linkName="Careers" />
                <Link linkName="Contact" />
              </div>
            </div>
          </div>
          {/* icons */}
          <div className="flex items-center  gap-6 md:ml-auto">
            <Facebook />
            <TwitterIcon />
            <Pinterest />
            <Instagram />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

const Link = (props: Link) => {
  return (
    <a
      href="#"
      className="text-Grayish_Violet text-sm hover:text-Cyan font-medium block"
    >
      {props.linkName}
    </a>
  )
}
