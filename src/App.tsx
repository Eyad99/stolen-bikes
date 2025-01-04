import { Routes, Route } from 'react-router-dom';
import Layout from '@/layouts';
import NotFound from './views/not-found';

const App = () => {
	return (
		<Routes>
			<Route path='/*' element={<Layout />} />
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default App;
