import { Routes, Route } from 'react-router-dom';
import MainRoutes from '@/routes/main';
import Navbar from '@/components/widgets/navbar';
import Footer from '@/components/widgets/footer';

export default function Layout() {
	const getRoutes = (routes: RoutesType[]): any => {
		return routes.map((prop, key) => {
			return <Route path={`${prop.path}`} element={prop.component} key={key} />;
		});
	};

	return (
		<div className='flex h-full w-full'>
			<div className='h-full w-full'>
				{/* Main Content */}
				<main className={`m-2.5`}>
					<Navbar />
					<div className='mx-auto min-h-screen p-2'>
						<Routes>{getRoutes(MainRoutes)}</Routes>
					</div>
					<div className='p-3'>
						<Footer />
					</div>
				</main>
			</div>
		</div>
	);
}
