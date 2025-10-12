'use client';

import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { ThemeProvider } from '@/components';
import { store } from '@/backend/reducers';
import { NextIntlClientProvider } from 'next-intl';

interface RootProviderProps {
  children: React.ReactNode;
  messages: Record<string, any>;
  locale?: string;
}

export function RootProvider({ children, messages, locale }: RootProviderProps) {
  const currentLocale = locale || 'en';

  return (
    <ReduxProvider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange={false}
      >
        <NextIntlClientProvider
          messages={messages}
          locale={currentLocale}
          timeZone="Asia/Ho_Chi_Minh"
        >
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
