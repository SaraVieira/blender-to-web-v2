import React, { Suspense } from "react";
import Cupcake from "./Cupcake";
import Layout from "./Components/Layout";

export default function Home() {
  return (
    <Layout>
      <Suspense fallback="">
        <Cupcake />
      </Suspense>
    </Layout>
  );
}
