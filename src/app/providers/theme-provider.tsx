import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.config';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <I18nextProvider i18n={i18n}>
            <MantineProvider
                theme={{
                    fontFamily: 'Inter, sans-serif',
                    primaryColor: 'blue',
                }}
                defaultColorScheme="light"
            >
                <ModalsProvider>
                    <Notifications />
                    {children}
                </ModalsProvider>
            </MantineProvider>
        </I18nextProvider>
    );
}
