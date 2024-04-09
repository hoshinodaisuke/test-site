import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../style/bulma-style.sass";
import "../style/custom-style.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import Ad from "./Ad";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
      <div>
          <Helmet>
              <html lang="en"/>
              <title>{title}</title>
              <meta name="description" content={description}/>

              <link
                  rel="apple-touch-icon"
                  sizes="180x180"
                  href={`${withPrefix("/")}img/apple-touch-icon.png`}
              />
              <link
                  rel="icon"
                  type="image/png"
                  href={`${withPrefix("/")}img/favicon-32x32.png`}
                  sizes="32x32"
              />
              <link
                  rel="icon"
                  type="image/png"
                  href={`${withPrefix("/")}img/favicon-16x16.png`}
                  sizes="16x16"
              />

              <link
                  rel="mask-icon"
                  href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
                  color="#ff4400"
              />
              <meta name="theme-color" content="#fff"/>

              <meta property="og:type" content="business.business"/>
              <meta property="og:title" content={title}/>
              <meta property="og:url" content="/"/>
              <meta
                  property="og:image"
                  content={`${withPrefix("/")}img/og-image.jpg`}
              />
          </Helmet>
          <Navbar/>
          <Ad src="//ad.daoad.com/fr.js?unid=a7799aeb-9d11-4a05-9764-dd6d3efb336b" />
          <div>{children}</div>
          <Ad src="//ad.daoad.com/fr.js?unid=a9610ffd-e43d-4818-9037-97acaf4110f9" />
          <Footer/>
      </div>
  );
};

export default TemplateWrapper;
