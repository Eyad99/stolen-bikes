import { Params } from '@/core/models/hui-types';
import { get } from '@/utils/api';

export const mainApi = {
	bikes: (params: Params) => get(`search`, { params }),
	counts: (params: Params) => get(`search/count`, { params }),
};
