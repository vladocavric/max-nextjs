import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetupsPage';
import NewMeetupPage from './pages/NewMeetupPage';
import FavoritesPage from './pages/FavoritesPage';
import Navbar from './components/layout/Navbar/Navbar';
import Layout from './components/layout/Layout';


function App() {
	return (
		<>
			<Layout>
			<Routes>
				<Route path='/' element={<AllMeetupsPage />} exact={true}/>
				<Route path='/meetups' element={<AllMeetupsPage />} />
				<Route path='/meetups/new' element={<NewMeetupPage />} />
				<Route path='/meetups/favorites' element={<FavoritesPage />} />
			</Routes>
			</Layout>
		</>
	);
}

export default App;
