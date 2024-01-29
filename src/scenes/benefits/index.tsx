import {
  AcademicCapIcon,
  UserGroupIcon,
  HomeModernIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { BenefitType, SelectedPage } from "@/shared/types";
import HeaderText from "@/shared/HeaderText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";

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

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const motionDivParams = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.5 },
    transition: { delay: 0.2, duration: 0.5 },
    variants: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 md:mt-5">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div {...motionDivParams} className="md:mt-24 md:w-3/5 ">
          <HeaderText>MORE THAN JUST A GYM</HeaderText>
          <div className=" md:mt-4 ">
            <p className=" my-5 text-sm">
              Transform your body, elevate your spirit, and unleash your inner
              strength at our gym – where every drop of sweat is a step closer
              to the best version of you
            </p>
          </div>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className=" mt-5 items-center justify-between gap-8 md:flex "
        >
          {benefitsData.map((e: BenefitType) => (
            <Benefit
              icon={e.icon}
              title={e.title}
              description={e.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* Img and Description */}

        <div className=" mt-20 items-center justify-between gap-20 md:mt-28 md:flex ">
          {/* Img*/}
          <motion.div className=" shrink-0" {...motionDivParams}>
            <img
              className="mx-auto"
              alt="benefits-page-graphic"
              src={BenefitsPageGraphic}
            />
          </motion.div>

          <div>
            {/* Title */}
            <motion.div className=" relative" {...motionDivParams}>
              <div className=" before:absolute before:-left-20 before:-top-20 before:content-abstractwaves">
                <HeaderText>
                  MILLIONS OF HAPPY MEMBERS GETTING
                  <span className=" text-primary-500"> FIT.</span>
                </HeaderText>
              </div>
            </motion.div>
            {/* Description */}
            <motion.div {...motionDivParams}>
              <p className=" mt-5 text-sm">
                Discover a community where millions of happy members are not
                just achieving fitness goals, but transforming their lives. Our
                state-of-the-art facilities and expert guidance create an
                environment where wellness is a way of life. Join us in the
                journey towards vitality, joy, and a healthier you – because
                here, fitness is just the beginning of countless happy moments.
              </p>
              <p className=" mt-5 text-sm">
                "At our fitness sanctuary, the joy of millions of members
                radiates through every workout, every milestone, and every
                shared success story. We go beyond traditional fitness – we're a
                vibrant community where members forge lasting connections,
                finding support, inspiration, and happiness in their wellness
                journey. With cutting-edge facilities and personalized guidance,
                we're not just about getting fit; we're about fostering a
                culture of health, happiness, and countless moments of triumph.
                Join us, and become a part of the millions who've embraced not
                just fitness, but a lifestyle that sparks joy and transforms
                lives."
              </p>
            </motion.div>

            {/* Action Button */}
            <motion.div className=" relative mt-16 w-3/5" {...motionDivParams}>
              <div className=" before:-botom-20 before:absolute before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  selectedPage={SelectedPage.Benefits}
                >
                  Join Now
                </ActionButton>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;
