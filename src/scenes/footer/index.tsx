import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className=" w-full bg-primary-100 py-10 ">
      <div className=" justify-content mx-auto w-5/6 gap-16 md:flex ">
        <div className=" mt-16 basis-1/2 md:mt-10">
          <img src={Logo} alt="logo" />
          <p className=" py-5  text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget
            ultricies ipsum, nec tincidunt ante. Sed at ipsum feugiat dui tempus
            iaculis. Sed tristique finibus libero, ullamcorper scelerisque erat
            euismod sit amet. Integer laoreet semper neque ut dictum. Phasellus
            aliquam elementum ante, vitae blandit elit lacinia in.
          </p>
        </div>
        <div className=" mt-16 basis-1/2 md:mt-10">
          <h3 className=" font-black ">Links</h3>
          <ul>
            <li className=" my-5">Lorem ipsum dolor sit amet.</li>
            <li className=" my-5">Praesent sagittis tellus ut ex egestas.</li>
            <li className=" my-5">Donec vulputate ex in elit hendrerit.</li>
          </ul>
        </div>
        <div className=" mt-16 basis-1/2 md:mt-10">
          <h3 className=" font-black  ">Contact Us</h3>
          <ul>
            <li className=" my-5">Lorem ipsum dolor sit amet.</li>
            <li className=" my-5">Praesent sagittis tellus ut ex egestas.</li>
            <li className=" my-5">Donec vulputate ex in elit hendrerit.</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
