import { useQuery, QueryFunction } from '@tanstack/react-query';
import { ApiResponse } from '@/utils';
import { useToast } from './use-toast';
import React from 'react';

interface UseFetchDataRQProps {
	queryKey: unknown[];
	queryFn: QueryFunction<any>;
	enableCondition?: boolean;
	dontFetchOnMount?: boolean;
	onSuccessFn?: (data: any) => void;
	selectFn?: (data: any) => any;
	refetchInterval?: number;
}

export const useFetchDataRQ = ({
	queryKey,
	queryFn,
	enableCondition = true,
	dontFetchOnMount,
	onSuccessFn,
	refetchInterval,
}: UseFetchDataRQProps) => {
	const { toast } = useToast();

	const data = useQuery({
		queryKey,
		queryFn,
		refetchOnWindowFocus: false,
		refetchOnMount: dontFetchOnMount ? false : true,
		retry: 1,
		enabled: enableCondition,
		refetchInterval: refetchInterval,
		select: ({ data }: ApiResponse) => {
			return { data: data };
		},
	});

	React.useEffect(() => {
		if (data.error) {
			toast({
				variant: 'destructive',
				title: 'Something went wrong, please try again later',
			});
		}
	}, [data.error]);

	React.useEffect(() => {
		if (data.data && onSuccessFn) {
			onSuccessFn(data?.data);
		}
	}, [data.data]);

	return data;
};
