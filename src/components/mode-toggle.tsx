import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provide';

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div className='cursor-pointer text-gray-600'>
			{theme === 'light' ? (
				<Sun onClick={() => setTheme('dark')} className=' h-[18px] w-[18px] ' />
			) : (
				<Moon onClick={() => setTheme('light')} className=' h-[18px] w-[18px] ' />
			)}
		</div>
	);
}
