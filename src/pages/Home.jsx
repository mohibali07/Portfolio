import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import HomeAbout from "../components/HomeAbout";
import HomeWork from "../components/HomeWork";
import StackCards from "../components/StackCards";
import Services from "../components/Services";
import Faq from "../components/Faq";
import Testimonials from "../components/Testimonials";
import BigText from "../components/BigText";
import Preloader from "../components/Preloader"; // Import Preloader
import { fetchPageBySlug, fetchPortfolio } from "../utils/api";

const Home = () => {
  const [data, setData] = useState(null);
  const [portfolio, setPortfolio] = useState([]); // Lifted state for portfolio
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const init = async () => {
      // Fetch both Page Data and Portfolio Data in parallel
      const [pageData, portfolioData] = await Promise.all([
        fetchPageBySlug("home"),
        fetchPortfolio(5),
      ]);

      if (pageData) setData(pageData.acf);
      if (portfolioData) setPortfolio(portfolioData);

      // Add a small delay to ensure the preloader animation feels complete
      setTimeout(() => setLoading(false), 2000);
    };
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Mohib Ali | Creative Developer</title>
        <meta name="description" content="Portfolio of Mohib Ali, a creative developer specializing in modern web experiences." />
      </Helmet>

      <Preloader loading={loading} />

      <Hero
        line1={data?.hero_title_line_1}
        line2={data?.hero_title_line_2}
        line3={data?.hero_title_line_3}
        sub={data?.hero_subtitle}
      />

      <Marquee text={data?.marquee_text} />

      <HomeAbout />

      {/* Pass lifted portfolio data to HomeWork */}
      <HomeWork projects={portfolio} />

      <BigText />

      <Services items={data?.home_services} />

      <StackCards items={data?.why_choose_us} />

      <Testimonials />

      <Faq items={data?.home_faq} />
    </>
  );
};

export default Home;
