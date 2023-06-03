const EmployeeInfo = ({ email, title, dateOfBirth }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single employeee client details */}
        <div className="text-center px-4 py-6">
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
    </div>
  );
};

export default EmployeeInfo;
