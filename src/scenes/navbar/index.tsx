//import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between ";
  return (
    <nav>
      {/* Outer NavBar */}
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        {/* Inner NavBar */}
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />

            {/* Right Side */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm`}>
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Home"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Benefits"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Our Classes"
                />
                <Link
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  page="Contact Us"
                />
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <p>Become a Member</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
