import { DEFULT_ITEMS_PER_PAGE } from '@/variables/constants';
import { useCallback, useState } from 'react';
import { useFetchDataRQ } from '@/hooks/useFetchDataRQ';
import { mainApi } from '@/core';
import VPagination from '@/components/reusable/v-paination';
import VSearch from '@/components/reusable/v-search';
import VBikes from '@/components/reusable/v-bikes';

const Bikes = () => {
	const [page, setPage] = useState(1);
	const [startIndex, setStartIndex] = useState(0);
	const [numberOfPages, setNumberOfPages] = useState(0);
	const [isNumberOfPages, setIsNumberOfPages] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const [timeout, setT] = useState<any>(null);

	const { data: countData, isLoading: countsIsLoading } = useFetchDataRQ({
		queryKey: [`counts`, searchQuery],
		queryFn: () => mainApi.counts({ query: searchQuery }),
		onSuccessFn() {
			setNumberOfPages(countData?.data?.stolen);
			setIsNumberOfPages(true);
		},
	});

	const { data, isLoading, isError } = useFetchDataRQ({
		queryKey: [`plans_${page}`, searchQuery],
		queryFn: () => mainApi.bikes({ page: page, per_page: DEFULT_ITEMS_PER_PAGE, query: searchQuery }),
		enableCondition: isNumberOfPages,
		onSuccessFn() {
			setIsNumberOfPages(false);
		},
	});

	/* - - - - - - - - Handlers - - - - - - - - */
	const handleChangePage = (page: number) => {
		setPage(page);
	};

	const handleShowPages = (pageNumber: number) => {
		setIsNumberOfPages(true);

		handleChangePage(pageNumber);

		const visibleCount = 10;
		const step = 4;

		if (pageNumber >= startIndex + visibleCount - 3 && startIndex + visibleCount < numberOfPages!) {
			setStartIndex((prev) => Math.min(prev + step, numberOfPages! - visibleCount));
		}

		if (pageNumber <= startIndex + 2 && startIndex > 0) {
			setStartIndex((prev) => Math.max(prev - step, 0));
		}
	};

	const handleSearch = useCallback(
		(q: string) => {
			if (timeout) clearTimeout(timeout);
			setT(
				setTimeout(() => {
					setPage(1);
					setSearchQuery(q.trim() || ' ');
				}, 500)
			);
		},
		[timeout]
	);

	const formatDate = (timestamp: number | null) => {
		if (!timestamp) return 'Unknown';
		return new Date(timestamp * 1000).toLocaleDateString('de-DE', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	if (isError) {
		return (
			<div className='text-center'>
				<h4 className='text-xl'>Something went wrong, please try again later</h4>
			</div>
		);
	}

	return (
		<div className='container mx-auto flex flex-col gap-8 lg:px-8'>
			<h1 className='text-3xl font-bold text-center'>Reported Bike Thefts in Munich ({numberOfPages!} Case of theft)</h1>
			<VSearch handleSearch={handleSearch} loading={isLoading || countsIsLoading} />
			<VBikes bikes={data?.data?.bikes} formatDate={formatDate} loading={isLoading || countsIsLoading} />

			<div className='sm:overflow-hidden overflow-auto'>
				{data?.data?.bikes?.length > 0 && numberOfPages! >= 10 && (
					<VPagination
						handleShowPages={handleShowPages}
						startIndex={startIndex}
						page={page}
						count={numberOfPages!}
						loading={isLoading || countsIsLoading}
					/>
				)}
			</div>
		</div>
	);
};

export default Bikes;
