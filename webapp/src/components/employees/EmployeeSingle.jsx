import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const EmployeeSingle = ({ id, fullName, title, email, dateOfBirth, image }) => {
  const singleURL = `/user/${id}`;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={singleURL} aria-label="Single Employee">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div className="flex items-center justify-center">
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Employee"
              loading="lazy"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {fullName}
            </p>
            <p className="text-lg text-ternary-dark dark:text-ternary-light">
              {title}
            </p>
            <p className="text-lg text-ternary-dark dark:text-ternary-light">
              {email}
            </p>
            <p className="text-lg text-ternary-dark dark:text-ternary-light">
              {dateOfBirth}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EmployeeSingle;
