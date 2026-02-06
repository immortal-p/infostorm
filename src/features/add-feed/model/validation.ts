import * as yup from 'yup';

export const useFeedSchema = (existingUrls: string[]) => {
    return yup.object({
        url: yup
            .string()
            .url('errors.invalidUrl')
            .required('errors.emptyUrl')
            .notOneOf(existingUrls, 'errors.rssExists'),
    });
};
