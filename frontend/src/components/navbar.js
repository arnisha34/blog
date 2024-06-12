import logo from '../images/logo.svg'
import { Link } from "react-router-dom"
import { Search } from './search'
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid'

export const Navbar = () => {
  
  return (
    <nav id="navbar" className="bg-white flex justify-between items-center py-2 px-6 sticky top-0 shadow-md">
      <div id="navbar-link" className='basis-4/12'>
        <div className="nav-links">
          <ul className="flex gap-4">
            <Link to="!">Link</Link>
            <Link to="!">Link</Link>
            <Link to="!">Link</Link>
            <Link to="!">Link</Link>
          </ul>
        </div>
      </div>
      <div id="navbar-logo" className="flex basis-4/12 justify-center">
        <Link to="/"><img src={logo} alt="logo" id="navbar-logo" className='max-w-[70px]'/></Link>
      </div>
      <div id='user-info' className='flex basis-4/12 items-center justify-end gap-3'>
        <Search />
        <p className='flex'><ArrowRightEndOnRectangleIcon className='cursor-pointer size-7'/></p>
      </div>
    </nav>
  )
}