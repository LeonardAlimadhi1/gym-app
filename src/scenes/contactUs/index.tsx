import HeaderText from "@/shared/HeaderText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsImage from "@/assets/ContactUsPageGraphic.png";

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = ` mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.prevetDefault();
    }
  };

  return (
    <section
      id="contactus"
      className=" mx-auto mt-10 min-h-full w-5/6 py-12 pb-32 pt-24  "
    >
      <motion.div
        className="md:w-3/5 "
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        {/* HEADEER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HeaderText>
            <span className=" text-primary-500">JOIN NOW </span> TO GET IN SHAPE
          </HeaderText>

          <p className=" my-5  text-sm  ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu mi
            tortor. Ut porta ornare nisi. Etiam volutpat purus ac lacus
            tincidunt, eu interdum dui venenatis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aenean turpis mi, hendrerit a mauris
            eu, faucibus gravida nunc.
          </p>
        </motion.div>

        {/* Form and Image   */}
        <div className=" mt-10 justify-between gap-8 md:flex">
          <motion.div>
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.io/send/"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 30,
                })}
              ></input>
              {errors.name && (
                <p className=" mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "Max length for name is 30 characters"}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  maxLength: 30,
                })}
              ></input>
              {errors.email && (
                <p className=" mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "maxLength" &&
                    "Max length for name is 30 characters"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Message"
                {...register("message", {
                  required: true,
                  maxLength: 300,
                  minLength: 10,
                })}
              ></textarea>
              {errors.message && (
                <p className=" mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required"}
                  {errors.message.type === "maxLength" &&
                    "Max length for message is 300 characters"}
                  {errors.message.type === "minLength" &&
                    "Min length for message is 10 characters"}
                </p>
              )}
              <button
                type="submit"
                className=" mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <div className=" right-10 ml-10  py-5 md:absolute">
            <img src={ContactUsImage} alt="contact-us-iamge" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
