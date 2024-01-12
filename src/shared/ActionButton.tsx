import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ selectedPage, setSelectedPage, children }: Props) => {
  return (
    <AnchorLink
      className="rounded-lg bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500"
      href={`#${selectedPage}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
