import Head from "next/head";
import PageContent from "@/components/PageContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard | Patryk Kobylarczyk</title>
        <meta name="description" content="Dashboard by Patryk Kobylarczyk" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageContent>
       content dashboard
      </PageContent>
    </>
  );
}
