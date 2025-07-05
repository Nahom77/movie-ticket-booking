import { Link } from "react-router";
import { assets } from "../assets/assets";
import { MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser(); // To get our current user from clerk
  // const { openSignIn } = useClerk(); // To open signIn/signUp window

  // console.log(user);

  // const navigate = useNavigate();

  // To close the menu options when each of the menu titles are clicked
  const handleMenuToggling = () => {
    scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 lg:px-36">
      <Link to={"/"} className="max-md:flex-1">
        <img src={assets.logo} alt="" className="h-auto w-36" />
      </Link>

      <div
        className={`${isMenuOpen ? "max-md:w-full" : "max-md:w-0"} z-50 flex flex-col items-center gap-8 overflow-hidden border-gray-300/20 bg-black/70 py-3 backdrop-blur transition-[width] duration-300 max-md:absolute max-md:top-0 max-md:left-0 max-md:h-screen max-md:justify-center max-md:text-lg max-md:font-medium md:flex-row min-md:rounded-full md:border md:bg-white/10 min-md:px-8`}
      >
        <XIcon
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 size-6 cursor-pointer md:hidden"
        />
        <Link onClick={handleMenuToggling} to="/">
          Home
        </Link>
        <Link onClick={handleMenuToggling} to="/movies">
          Movies
        </Link>
        <Link onClick={handleMenuToggling} to="/">
          Theaters
        </Link>

        <Link onClick={handleMenuToggling} to="/">
          Releases
        </Link>
        <Link onClick={handleMenuToggling} to="/favorite">
          Favorites
        </Link>
      </div>

      <div className="flex items-center gap-8">
        <SearchIcon className="hidden size-6 cursor-pointer md:block" />
        {/* If there is no signed user display Login button otherwise display the user profile*/}
        {!user ? (
          <button
            onClick={
              () => console.log("")
              // openSignIn()
            }
            className="bg-primary hover:bg-primary-dull cursor-pointer rounded-full px-4 py-1 font-medium transition sm:px-7 sm:py-2"
          >
            Login
          </button>
        ) : (
          // Adding our properties on user Button
          // <UserButton>
          //   <UserButton.MenuItems>
          //     <UserButton.Action
          //       label="My Bookings"
          //       labelIcon={<TicketPlus width={15} />}
          //       onClick={() => {
          //         navigate("/my-bookings");
          //       }}
          //     />
          //   </UserButton.MenuItems>
          // </UserButton>
          <div></div>
        )}
      </div>
      <MenuIcon
        onClick={() => setIsMenuOpen(true)}
        className="ml-4 size-8 cursor-pointer md:hidden"
      />
    </div>
  );
};

export default Navbar;
