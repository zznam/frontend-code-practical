import EmployeesGrid from '../components/employees/EmployeesGrid';
import { EmployeesProvider } from '../context/EmployeesContext';

const Home = () => {
	return (
		<div className="container mx-auto">

			<EmployeesProvider>
				<EmployeesGrid></EmployeesGrid>
			</EmployeesProvider>
		</div>
	);
};

export default Home;
