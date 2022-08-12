import { Link } from "react-router-dom"
import CloseMenu from "../assets/CloseMenu"
import Hamburger from "../assets/Hamburger"
import Logo from "../assets/Logo"
interface Props {
  name: string
}
const Header = () => {
  return (
    <header className="container pt-10 md:pt-14 px-6 md:px-0">
      <nav className="flex items-center justify-between">
        {/* logo and links */}
        <div className="flex items-center justify-start space-x-12">
          <div>
            <Logo />
          </div>
          {/* links */}
          <div className="hidden md:flex items-center space-x-8">
            <Links name="Features" />
            <Links name="Pricing" />
            <Links name="Resources" />
          </div>
        </div>
        {/* cta and hamburger btn */}
        <div>
          {/* login and signup */}
          <div className="hidden md:flex items-center space-x-9 ">
            <Links name="login" />
            <a href="/" className="h-11 w-[6.8125rem] cta-base">
              Sign Up
            </a>
          </div>
          {/* hamburger */}
          <div className="md:hidden">
            <Hamburger />
            {/* <CloseMenu /> */}
          </div>
        </div>
      </nav>
    </header>
  )

  function Links(props: Props) {
    return (
      <div className="flex items-center space-x-8">
        <a
          href="/"
          className="font-bold text-Grayish_Violet capitalize text-base hover:text-Very_Dark_Violet duration-150"
        >
          {props.name}
        </a>
      </div>
    )
  }
}

export default Header
