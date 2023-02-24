import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";

function Home() {
  return (
    <Layout>
      <Intro />
      <MarketingStrategies />
    </Layout>
  );
}

export default Home;
