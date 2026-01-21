import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useFeedSchema = (existingUrls: string[]) => {
    const { t } = useTranslation();

    return yup.object({
        url: yup
            .string()
            .url(t('errors.invalidUrl'))
            .required(t('errors.emptyUrl'))
            .notOneOf(existingUrls, t('errors.rssExists')),
    });
};
