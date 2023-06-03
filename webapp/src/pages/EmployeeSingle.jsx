import { Link, useParams } from "react-router-dom";
import EmployeeGallery from "../components/employees/EmployeeGallery";
import EmployeeInfo from "../components/employees/EmployeeInfo";
import { SingleEmployeeProvider } from "../context/SingleEmployeeContext";
import { motion } from "framer-motion";
import Button from "../components/reusable/Button";
import { QueryKey } from "../configs/query-key.config";
import { useQuery } from "react-query";
import { getUserById } from "../apis/users.api";

const API_URL = process.env.REACT_APP_BACKEND_SERVER;

const EmployeeSingle = () => {
  let { id: employeeId } = useParams();

  const { data: employee, isLoading: isLoadingEmployee } = useQuery({
    queryKey: [QueryKey.GET_USERS, employeeId],
    queryFn: async () => getUserById(employeeId),
  });

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
      {isLoadingEmployee ? (
        <h2 className="w-full text-center">Loading...</h2>
      ) : employee ? (
        <SingleEmployeeProvider>
          <EmployeeGallery
            fullName={employee?.first_name + " " + employee?.last_name}
            image={API_URL + employee?.profile_picture_url}
          />
          <EmployeeInfo
            title={employee?.employment?.title}
            email={employee?.email}
            dateOfBirth={employee?.date_of_birth}
          />
          <div className="mt-8 sm:mt-10 flex justify-center">
            <Link
              to=".."
              className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
              aria-label="Go Back"
            >
              <Button title="Go Back" />
            </Link>
          </div>
        </SingleEmployeeProvider>
      ) : (
        <h2 className="w-full text-center">Employee Not Found</h2>
      )}
    </motion.div>
  );
};

export default EmployeeSingle;
