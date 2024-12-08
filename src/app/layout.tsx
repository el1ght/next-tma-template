import type { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { Root } from '@/components/Root/Root';
import { I18nProvider } from '@/core/i18n/provider';

import '@telegram-apps/telegram-ui/dist/styles.css';
import 'normalize.css/normalize.css';
import './_assets/globals.css';
import NavigationBar from "@/components/NavigationBar";
import ToasterProvider from "@/providers/ToasterProvider";
import Content from "@/components/Content";
import Player from "@/components/Player/Player";
import {useLaunchParams} from "@telegram-apps/sdk-react";

export const metadata: Metadata = {
  title: 'Your Application Title Goes Here',
  description: 'Your application description goes here',
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
    <body>
      <I18nProvider>
        <ToasterProvider />
        <Root>
          <div className={'relative h-[100vh] flex flex-col'}>
            <Content>
              {children}
            </Content>
            {/*<div className={'h-[100vh] overflow-y-auto text-color'}>*/}

            {/*</div>*/}
            <NavigationBar />
          </div>
          <Player />

        </Root>

      </I18nProvider>

    </body>
    </html>
  );
}
