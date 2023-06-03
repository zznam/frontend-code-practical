import { createContext } from 'react';

const SingleEmployeeContext = createContext();

export const SingleEmployeeProvider = ({ children }) => {

	return (
		<SingleEmployeeContext.Provider
		>
			{children}
		</SingleEmployeeContext.Provider>
	);
};

export default SingleEmployeeContext;
