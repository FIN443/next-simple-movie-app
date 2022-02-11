import Head from "next/head";
import React from "react";

interface ITitleProps {
  title: string;
}

export default function Seo({ title }: ITitleProps) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
