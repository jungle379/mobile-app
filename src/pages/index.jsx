// Tailwind Mobile components
import Head from "next/head";
import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  Link,
  BlockTitle,
} from 'tailwind-mobile/react';

export default function Home() {
  return (
    <>
    <Head>
      <title>
        トップページ
      </title>
    </Head>
    <Page>
      <Navbar title="My App" />

      <Block strong>
        <p>
          Here is your Next.js & Tailwind Mobile app. Let's see what we have
          here.
        </p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem href="/about/" title="About" />
        <ListItem href="/form/" title="Form" />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Page>
    </>
  );
}