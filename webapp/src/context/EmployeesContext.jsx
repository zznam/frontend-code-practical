import { useState, createContext, useEffect } from "react";
import { useQuery } from "react-query";
import { QueryKey } from "../configs/query-key.config";
import { getUsers } from "../apis/users.api";

// Create context
export const EmployeesContext = createContext();

// Create the context provider
export const EmployeesProvider = (props) => {
  const [employees, setEmployees] = useState([]);
  const [searchEmployee, setSearchEmployee] = useState("");

  // Search by name
  const searchEmployeesByKeywords = employees.filter((item) => {
    const name = item.first_name + ' ' + item.last_name
    const result = name
      .toLowerCase()
      .includes(searchEmployee.toLowerCase())
      ? item
      : searchEmployee === ""
        ? item
        : "";
    return result;
  });

  const { data, isLoading: isLoadingEmployee } = useQuery({
    queryKey: [QueryKey.GET_USERS],
    queryFn: async () => getUsers(),
  });

  useEffect(() => {
    setEmployees(data || [])

  }, [data]);

  return (
    <EmployeesContext.Provider
      value={{
        employees,
        setEmployees,
        isLoadingEmployee,
        searchEmployee,
        setSearchEmployee,
        searchEmployeesByKeywords,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};
