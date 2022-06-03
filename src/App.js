import React, { useState, Suspense } from 'react'
import Side from "./Side";
import Layout from "./Components/Layout";

export const frostings = [
  { id: 1, name: 'Chocolate' },
  { id: 2, name: 'Vannila' },
  { id: 3, name: 'Mint' },
  { id: 4, name: 'None' },
]


export default function Home() {
  const [frosting, setFrosting] = useState(frostings[0])
  return (
    <Layout frosting={frosting} setFrosting={setFrosting}>
      <Suspense fallback="">
        <Side frosting={frosting} />
      </Suspense>
    </Layout>
  );
}
