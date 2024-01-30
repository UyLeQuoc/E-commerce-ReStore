import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0">
      <nav className="flex items-center py-8 px-10 justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-700 ">RealEstify</h1>
        <div className="ml-10">
          <ul className="md:flex space-x-8 hidden ">
            <li><Link to={"/"} className="text-gray-800 font-semibold">Listings</Link></li>
            <li><Link to={"/about"} className="text-gray-800 font-semibold">About</Link></li>
            <li><Link to={"/contact"} className="text-gray-800 font-semibold">Contact</Link></li>
            {/* <li><a href="#" className="text-gray-800 font-semibold">World</a></li>
            <li><a href="#" className="text-gray-800 font-semibold">Tech</a></li>
            <li><a href="#" className="text-gray-800 font-semibold">Health</a></li>
            <li><a href="#" className="text-gray-800 font-semibold">Sport</a></li> */}
          </ul>
        </div>
      </div>
      <div className="lg:flex hidden items-center space-x-3 py-3 px-6 bg-indigo-600 text-white rounded-lg  transition-all duration-400 transform hover:scale-105 cursor-pointer hover:shadow-lg">
        <button>Login</button>
      </div>
      </nav>
    </header>
  )
}
