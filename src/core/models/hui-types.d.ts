export {};

declare global {
	/**
	 * Now declare things that go in the global namespace,
	 * or augment existing declarations in the global namespace.
	 */
	interface RoutesType {
		// required props
		name: string;
		path: string;
		// optional props
		icon?: JSX.Element;
		secondary?: boolean;
		layout?: string;
		component?: JSX.Element;
		collapse?: boolean;
		invisible?: boolran;
		symbol?: string;
		items?: {
			// required props
			name: string;
			path: string;
			// optional props
			secondary?: boolean;
			layout?: string;
			component?: JSX.Element;
			collapse?: boolean;
			items?: {
				// required props
				name: string;
				layout: string;
				path: string;
				component: JSX.Element;
				// optional props
				secondary?: boolean;
			}[];
		}[];
	}
 
 
}

export interface Params {
	page?: number;
	per_page?: number;
	search?: string;
	stolenness?: string;
	query?:string;
}
