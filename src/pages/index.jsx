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
        <Button href="/test1/">Button 1</Button>
        <Button href="/test2/">Button 2</Button>
        <Button href="/test3/">Button 3</Button>
      </Block>
      <Block strong className="flex space-x-4">
        <Button href="/test4/">Button 4</Button>
        <Button href="/test5/">Button 5</Button>
        <Button href="/test6/">Button 6</Button>
      </Block>
    </Page>
    </>
  );
}