import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import { Bike_Res } from '@/core';
import { Badge } from '@/components/ui/badge';
import BikesSkeleton from '@/utils/skeletons/bikes-skeleton';

const VBikes = ({
	bikes,
	formatDate,
	loading,
}: {
	bikes: Bike_Res[];
	formatDate: (timestamp: number | null) => string;
	loading: boolean;
}) => {
	if (loading) return <BikesSkeleton />;

	return bikes?.length > 0 ? (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
			{bikes?.map((bike: Bike_Res) => (
				<Card key={bike.id} className='overflow-hidden hover:shadow-lg transition-shadow duration-300'>
					<CardHeader className='p-0'>
						<img
							src={
								bike.large_img
									? bike.large_img
									: 'https://bikeindex.org/assets/revised/bike_photo_placeholder-ff15adbd9bf89e10bf3cd2cd6c4e85e5d1056e50463ae722822493624db72e56.svg'
							}
							alt={bike.title}
							className={`w-full h-48 dark:bg-white/10 bg-gray-200`}
							style={{ objectFit: !bike.large_img ? 'contain' : 'cover' }}
						/>
					</CardHeader>
					<CardContent className='p-4'>
						<CardTitle className='text-lg font-semibold mb-2'>{bike.title}</CardTitle>
						<p className='text-sm text-gray-600 mb-4'>{bike.description ?? 'There is no description'}</p>
						<div className='flex items-center mb-2'>
							<Calendar className='w-4 h-4 mr-2 text-blue-500' />
							<span className='text-sm'>Stolen: {bike.date_stolen ? formatDate(bike.date_stolen) : 'There is no history of theft'}</span>
						</div>
						<div className='flex items-center'>
							<MapPin className='w-4 h-4 mr-2 text-red-500' />
							<span className='text-sm'>{bike.stolen_location ?? 'There is no address'}</span>
						</div>
						<div className='mt-4'>
							<Badge variant='secondary'>Case #{bike.id}</Badge>
						</div>
					</CardContent>
				</Card>
			))}
		</div>
	) : (
		<div className='text-center'>
			<h4 className='text-xl'>There are no stolen bikes</h4>
		</div>
	);
};

export default VBikes;
