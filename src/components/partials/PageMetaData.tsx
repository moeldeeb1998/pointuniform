import React, { FunctionComponent } from "react";
import Head from "next/head";

type Props = {
  title?: string;
};

const PageMetaData: FunctionComponent<Props> = ({ title = "Point" }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

export default PageMetaData;
