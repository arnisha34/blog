import { Search } from "./search"
import logo from '../images/logo.svg'

export const Navbar = () => {
  
  return (
    <nav id="navbar" className="bg-white flex justify-between items-center py-2 px-6 sticky top-0 shadow-md">
      <div id="navbar-link">
        <div className="nav-links">
          <ul className="flex gap-4">
            <li><a href="!">Link</a></li>
            <li><a href="!">Link</a></li>
            <li><a href="!">Link</a></li>
            <li><a href="!">Link</a></li>
            <li><a href="!">Link</a></li>
          </ul>
        </div>
      </div>
      <div id="navbar-logo" className="max-w-[70px]">
        <img src={logo} alt="logo" id="navbar-logo"/>
      </div>
      <Search />
    </nav>
  )
}