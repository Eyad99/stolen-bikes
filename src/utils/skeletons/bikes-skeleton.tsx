import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const BikesSkeleton = () => {
	return (
		<div className='container mx-auto flex flex-col gap-8 '>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{[...Array(10)].map((_, index) => (
					<Card key={index} className='overflow-hidden'>
						<CardHeader className='p-0'>
							<Skeleton className='w-full h-48' />
						</CardHeader>
						<CardContent className='p-4 space-y-4'>
							<Skeleton className='h-6 w-3/4' />
							<Skeleton className='h-4 w-full' />
							<Skeleton className='h-4 w-5/6' />
							<div className='flex items-center space-x-2'>
								<Skeleton className='h-4 w-4' />
								<Skeleton className='h-4 w-1/2' />
							</div>
							<div className='flex items-center space-x-2'>
								<Skeleton className='h-4 w-4' />
								<Skeleton className='h-4 w-2/3' />
							</div>
							<Skeleton className='h-6 w-24' />
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};

export default BikesSkeleton;
