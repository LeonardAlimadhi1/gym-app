/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className=" gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
     
    {/* Image and Header */}
    <div className="mx-auto w-5/6 h-full items-center justify-center align-middle md:flex " >
      {/* Header */}
      <div className=" shrink mt-32 z-10 md:basis-3/5">
        <div className="md: -mt-20">
          <div className="relative" >
              
            <div className=" before:absolute before:-top-20 md:before:content-evolvetext before:-left-20 before:z-[-1]">
               <img alt="home-page-text" src={HomePageText} />
            </div> 
      </div>
      <p className=" mt-4">Transform your body, elevate your spirit, and unleash your inner strength at our gym – where every drop of sweat is a step closer to the best version of you</p>
      {/* Actions */}
      <div className=" gap-8 mt-8 flex items-center " >
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
        <AnchorLink className="text-sm font-bold text-primary-500 underline " onClick={ () => setSelectedPage(SelectedPage.ContactUs)} > <p>Learn More</p></AnchorLink>
      </div>
      </div>
      </div>
      
      {/* Image  */}
      <div className=" md:mt-32">
        <div>
          <img  src={HomePageGraphic} />
        </div>
      
      </div>
      
     
    </div>
    {/* Sponsors*/}
      {isAboveMediumScreens && (
      <div className=" bg-primary-100 h-[150px] w-full py-10 flex items-center justify-center ">
      <div className=" flex w-3/5 gap-8 items-center justify-between ">
        <img alt="redbull-sponsor" src={SponsorRedBull} />
        <img alt="forbes-sponsor" src={SponsorForbes} />
        <img alt="fortune-sponsor" src={SponsorFortune} />
      </div>
     </div>)}
    </section>
  );
};

export default Home;
