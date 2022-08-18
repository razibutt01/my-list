import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Homepage</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amer consectetur adipisicing elit. Ea, porro
          temporibus, magni praesentium eligendi architecto repudiandae nulla
          dolorum optio quam soluta, officiis perspiciatis quidem odit quibusdam
          molestias aliquid nobis cum ratione! Veniam, veritatis impedit?
          Repellendus a ipsam qui quasi itaque?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, porro
          temporibus, magni praesentium eligendi architecto repudiandae nulla
          dolorum optio quam soluta, officiis perspiciatis quidem odit quibusdam
          molestias aliquid nobis cum ratione! Veniam, veritatis impedit?
          Repellendus a ipsam qui quasi itaque?
        </p>
        <Link href="/ninja">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
