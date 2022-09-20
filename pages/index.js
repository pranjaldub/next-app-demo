import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/Products">
        <a>Go to products</a>
      </Link>
    </div>
  );
}
