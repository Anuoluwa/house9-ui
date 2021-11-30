import api from '../utils/api';

export const listVouchers = async () => {
    const response = await api.get('vouchers');
    return response.data;
};