import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  return (
    <nav className="bg-green-800 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white">
            <img
              src={assets.logo}
              alt="MGNREGA logo"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-2xl font-bold tracking-wide">
            MGNREGA - TamilNadu
          </p>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/districts" className="hover:text-yellow-300 transition">Districts</Link>
          <Link to="/works" className="hover:text-yellow-300 transition">Works</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>

          {/* Login / Profile */}
          {isSignedIn ? (
            <div className="flex items-center space-x-3">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10 border-2 border-white rounded-full",
                  },
                }}
              />
            </div>
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-yellow-300 hover:bg-yellow-400 text-green-900 font-semibold px-5 py-2 rounded-full transition duration-200"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;