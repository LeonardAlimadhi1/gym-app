//import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ActionButton from "@/shared/actionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between ";
  const screenSizeMin = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      {/* Outer NavBar */}
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        {/* Inner NavBar */}
        <div className={`${flexBetween} mx-auto w-5/6 `}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img alt="logo" src={Logo} />

            {/* Right Side */}
            {screenSizeMin ? (
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
                  <ActionButton
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  >
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <div
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Menu Modal */}
      {!screenSizeMin && isMenuToggled && (
        <div
          className={` fixed right-0 bottom-0 z-40 h-full bg-primary-100 w-[300px] `}
        >
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(false)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
