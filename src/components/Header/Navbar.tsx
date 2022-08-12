import { useState } from "react"
import CloseMenu from "../../assets/CloseMenu"
import Hamburger from "../../assets/Hamburger"
import Logo from "../../assets/Logo"
import Links from "./Links"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className="flex items-center justify-between">
      {/* logo and links */}
      <div className="flex items-center justify-start space-x-12">
        <div>
          <Logo />
        </div>
        {/* links */}
        <div className="hidden md:flex items-center space-x-8">
          <Links
            name="Features"
            color="text-Grayish_Violet"
            height="text-base"
          />
          <Links
            name="Pricing"
            color="text-Grayish_Violet"
            height="text-base"
          />
          <Links
            name="Resources"
            color="text-Grayish_Violet"
            height="text-base"
          />
        </div>
      </div>
      {/* cta and hamburger btn */}
      <div>
        {/* login and signup */}
        <div className="hidden md:flex items-center space-x-9 ">
          <Links name="login" color="text-Grayish_Violet" height="text-base" />
          <a href="/" className="h-11 w-[6.8125rem] cta-base">
            Sign Up
          </a>
        </div>
        {/* hamburger */}
        <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu == false ? <Hamburger /> : <CloseMenu />}
          {openMenu && (
            <>
              <MobileMenu />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
