import { NavbarMenu } from "../mockData/Data";
import { motion, AnimatePresence } from "framer-motion";
import PropsTypes from "prop-types";

const ResponsiveMenu = ({ open }) => {
  return (
    <div className="md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute top-20 left-0 w-full h-sceen  z-20"
          >
            <div className="text-md uppercase font-semibold  bg-yellow-700 text-white py-5 m-6 rounded-3xl">
              <ul className="flex flex-col items-center justify-center gap-2">
                {NavbarMenu.map((item) => {
                  const { id, title, href } = item;
                  return (
                    <>
                      <li key={id}>
                        <a href={href}>{title}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

ResponsiveMenu.propTypes = {
  open: PropsTypes.bool.isRequired,
};

export default ResponsiveMenu;
