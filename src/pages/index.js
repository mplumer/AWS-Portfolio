import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BannerParticles from "../components/homedefault/bannerParticles";
import About from "../components/homedefault/about";
import Project from "../components/homedefault/project";
import Service from "../components/homedefault/service";
import Brand from "../components/homedefault/brand";




const IndexPage = () => (
  <Layout>
    <SEO title="Maxwell Plumer Portfolio" />
    <BannerParticles />
    <About />
    <Service />
    <div className="portfolio-id" id="portfolio">
      <Project />
      <Brand />
    </div>
  </Layout>
)
export default IndexPage;