import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import React from "react";
import { motion } from "framer-motion";
import Classes from "./classes";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  const classesData = [
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image1,
    },
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image2,
    },
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image3,
    },
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image4,
    },
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image5,
    },
    {
      name: " Bodybuilding",
      description:
        "Bodybuilding is the practice of progressive resistance exercise to build, control, and develop one's muscles via hypertrophy. An individual who engages in this activity is referred to as a bodybuilder.",
      image: image6,
    },
  ];

  return (
    <section
      id="ourclasses"
      className=" mt-10 min-h-full w-full bg-primary-100 py-12"
    >
      <motion.div
        className="mx-auto w-5/6 items-center "
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* Header with description */}
        <div className=" w-4/5 py-20">
          <HeaderText> Our Classes</HeaderText>{" "}
          <p className=" mt-5 text-sm  ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className=" mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className=" w-[2800px] whitespace-nowrap">
            {classesData.map((e, index) => (
              <Classes
                key={index}
                name={e.name}
                description={e.description}
                image={e.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
