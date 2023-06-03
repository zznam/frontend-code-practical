import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/reusable/Button";

const PageNotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light">404 Page not found</h1>
        <Link
          to=".."
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="Go Back"
        >
          <Button title="Go Back" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PageNotFound;
