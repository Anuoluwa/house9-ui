import api from '../utils/api';

export const createSubscriptions = async (id, payload) => {
    const response = await api.post(`users/${id}/subscriptions`, payload);
    return response.data;
};