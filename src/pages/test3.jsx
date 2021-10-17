import React from 'react';
import Head from "next/head";
import {
  Page,
  Navbar,
  NavbarBackLink,
  Block,
  BlockTitle,
  Preloader,
} from 'tailwind-mobile/react';

export default function PreloaderPage() {
  return (
    <>
    <Head>
    <title>ローディングテストページ</title>
    </Head>
    <Page>
      <Navbar
        title="Preloader"
        />

      <BlockTitle>Default</BlockTitle>
      <Block strong className="text-center">
        <Preloader />
      </Block>

      <BlockTitle>Colors</BlockTitle>
      <Block strong className="grid grid-cols-4">
        <div className="text-center">
          <Preloader colors={{ icon: 'text-red-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-green-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-pink-500' }} />
        </div>
        <div className="text-center">
          <Preloader colors={{ icon: 'text-yellow-500' }} />
        </div>
      </Block>

      <BlockTitle>Sizes</BlockTitle>
      <Block strong className="grid grid-cols-4 items-center">
        <div className="text-center">
          <Preloader size="w-4 h-4" />
        </div>
        <div className="text-center">
          <Preloader size="w-8 h-8" />
        </div>
        <div className="text-center">
          <Preloader size="w-12 h-12" />
        </div>
        <div className="text-center">
          <Preloader size="w-16 h-16" />
        </div>
      </Block>
    </Page>
    </>
  );
}