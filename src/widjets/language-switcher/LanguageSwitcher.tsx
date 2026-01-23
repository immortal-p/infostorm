import { Switch } from '@mantine/core';
import { useTranslation } from 'react-i18next';

export default () => {
    const { i18n } = useTranslation();
    const isRu = i18n.language === 'ru'

    return (
        <Switch
            size="xl"
            styles={{
                label: { cursor: 'pointer' },
                track: { cursor: 'pointer' },
                thumb: { cursor: 'pointer' },
            }}
            onLabel="Ru"
            offLabel="En"
            onChange={() => i18n.changeLanguage(isRu ? 'en' : 'ru')}
        />
    );
};
