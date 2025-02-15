import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { GoArrowUp } from "react-icons/go";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20" id="contact">
      <div className="flex items-center justify-center mt-4 pb-2">
        <a href="#" className="text-xl text-emerald-600">
          <GoArrowUp />
        </a>
        <p>back to top</p>
      </div>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className=" text-center text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center -tracking-tight">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
