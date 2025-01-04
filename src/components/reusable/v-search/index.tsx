import { Input } from '@/components/ui/input';
import { LoaderIcon } from 'lucide-react';

const VSearch = ({ handleSearch, loading }: { handleSearch: (text: string) => void; loading: boolean }) => {
	return (
		<div className='relative md:w-1/3 w-full'>
			<Input type='text' placeholder='Search bike descriptions' className='w-full' onChange={(event) => handleSearch(event.target.value)} />

			{loading && (
				<div className='absolute top-3 right-2'>
					<LoaderIcon className='animate-spin' size={'20px'} />
				</div>
			)}
		</div>
	);
};

export default VSearch;
