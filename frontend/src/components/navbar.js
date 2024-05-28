

export const Navbar = () => {
  return (
    <nav id="navbar" className="bg-white flex justify-between items-center py-4 px-6 sticky top-0 shadow-md">
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
      <div id="navbar-logo" className="">
        <img src='/images/logo.svg' alt="logo" id="navbar-logo"/>
      </div>

        <div id="navbar-search">
          <div id="search" className="max-w-[230px] justify-end">
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-black rounded-sm py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search articles..." type="text" name="search"/>
          </label>
        </div>
        </div>
    </nav>
  )
}