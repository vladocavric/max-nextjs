import MainNavigation from './MainNavigation'
const Layout = ({ children }) => {
	return (
		<>
			<MainNavigation />
			{children}
		</>
	);
};

export default Layout