import { FC } from 'react';
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { Skeleton } from '@/components/ui/skeleton';

interface VPaginationProps {
	handleShowPages: (page: number) => void;
	startIndex: number;
	page: number;
	count: number;
	loading: boolean;
}

const VPagination: FC<VPaginationProps> = ({ handleShowPages, startIndex, page, count, loading }) => {
	if (loading) {
		return (
			<div className='mt-8'>
				<Skeleton className='h-6 w-3/4 m-auto' />;
			</div>
		);
	}
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() => handleShowPages(page - 1)}
						className={page === 1 ? 'pointer-events-none opacity-50 cursor-pointer' : 'cursor-pointer'}
					/>
				</PaginationItem>

				{Array.from({ length: count <= 100 ? count / 10 : 10 }, (_, index) => startIndex + index + 1).map((pageNumber) => (
					<PaginationItem key={pageNumber} className='cursor-pointer'>
						<PaginationLink onClick={() => handleShowPages(pageNumber)} isActive={pageNumber === page}>
							{pageNumber}
						</PaginationLink>
					</PaginationItem>
				))}

				{startIndex + 10 < count && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}

				<PaginationItem>
					<PaginationNext
						onClick={() => handleShowPages(page + 1)}
						className={page === count ? 'pointer-events-none opacity-50 cursor-pointer' : 'cursor-pointer'}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default VPagination;
