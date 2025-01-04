import Bikes from '@/views/bikes';
import NotFound from '@/views/not-found';
import { LayoutDashboard } from 'lucide-react';

const MainRoutes = [
	{
		name: 'Bikes',
		icon: <LayoutDashboard />,
		path: '/',
		component: <Bikes />,
	},

	{
		name: 'NotFound',
		layout: '/branch-admin',
		path: '*',
		invisible: true,
		component: <NotFound />,
	},
];
export default MainRoutes;
