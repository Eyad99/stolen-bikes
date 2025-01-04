import React from 'react';

function useOutsideAlerter(ref: any, setX: any): void {
	React.useEffect(() => {
		/**
		 * Alert if clicked on outside of element
		 */
		// function handleClickOutside(event: React.MouseEvent<HTMLElement>) {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setX(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, setX]);
}

const Dropdown = (props: {
	button: JSX.Element;
	children: (closeDropdown: () => void) => JSX.Element;
	classNames: string;
	animation?: string;
}) => {
	const { button, children, classNames, animation } = props;
	const wrapperRef = React.useRef(null);
	const [openWrapper, setOpenWrapper] = React.useState(false);
	useOutsideAlerter(wrapperRef, setOpenWrapper);

	return (
		<div ref={wrapperRef} className='relative flex'>
			<div className='flex' onMouseDown={() => setOpenWrapper(!openWrapper)}>
				{button}
			</div>
			<div
				className={`${classNames} absolute z-10 ${animation ? animation : 'origin-top-right transition-all duration-300 ease-in-out'} ${
					openWrapper ? 'scale-100' : 'scale-0'
				}`}
			>
				{children(() => setOpenWrapper(false))}
			</div>
		</div>
	);
};

export default Dropdown;
