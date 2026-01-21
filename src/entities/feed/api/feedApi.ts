import axios from 'axios';

export const fetchRssContent = async (url: string): Promise<string> => {
    const proxyUrl = `https://allorigins.hexlet.app/get?disableCache=true&url=${encodeURIComponent(url)}`;

    try {
        const response = await axios.get(proxyUrl, { timeout: 10000 });
        if (!response.data || !response.data.contents) {
            throw new Error('empty_response');
        }
        return response.data.contents;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.code === 'ECONNABORTED') throw new Error('timeout_error');
            if (!error.response) throw new Error('network_error');
        }
        throw error;
    }
};
