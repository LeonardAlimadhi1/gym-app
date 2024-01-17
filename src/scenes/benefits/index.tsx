import {
  AcademicCapIcon,
  UserGroupIcon,
  HomeModernIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HeaderText from "@/shared/HeaderText";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Benefit from "./Benefit";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const index = ({ setSelectedPage }: Props) => {
  const benefitsData: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className=" h-6 w-6" />,
      title: "State of Art Facilities",
      description:
        "Experience peak fitness with our state-of-the-art facilities, setting the standard for excellence in your wellness journey.",
    },
    {
      icon: <UserGroupIcon className=" h-6 w-6" />,
      title: "State of Art Facilities",
      description:
        "Experience peak fitness with our state-of-the-art facilities, setting the standard for excellence in your wellness journey.",
    },
    {
      icon: <AcademicCapIcon className=" h-6 w-6" />,
      title: "State of Art Facilities",
      description:
        "Experience peak fitness with our state-of-the-art facilities, setting the standard for excellence in your wellness journey.",
    },
  ];
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <div className="md:mt-24 md:w-3/5 ">
          <HeaderText>MORE THAN JUST A GYM</HeaderText>
          <div className=" md:mt-4 ">
            <p className=" my-5 text-sm">
              Transform your body, elevate your spirit, and unleash your inner
              strength at our gym – where every drop of sweat is a step closer
              to the best version of you
            </p>
          </div>
        </div>
        {/* BENEFITS */}
        <div className=" mt-5 items-center justify-between gap-8 md:flex ">
          {benefitsData.map((e) => (
            <Benefit
              icon={e.icon}
              title={e.title}
              description={e.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default index;
