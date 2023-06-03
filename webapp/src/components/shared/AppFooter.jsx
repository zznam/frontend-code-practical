import AppFooterCopyright from './AppFooterCopyright';



const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
