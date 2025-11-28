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
import { fetchPageBySlug } from "../utils/api";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const init = async () => {
      const pageData = await fetchPageBySlug("home");
      if (pageData) setData(pageData.acf);
    };
    init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Mohib Ali | Creative Developer</title>
        <meta name="description" content="Portfolio of Mohib Ali, a creative developer specializing in modern web experiences." />
      </Helmet>
      <Hero
        line1={data?.hero_title_line_1}
        line2={data?.hero_title_line_2}
        line3={data?.hero_title_line_3}
        sub={data?.hero_subtitle}
      />

      <Marquee text={data?.marquee_text} />

      <HomeAbout />

      <HomeWork />

      <BigText />

      <Services items={data?.home_services} />

      <StackCards items={data?.why_choose_us} />

      <Testimonials />

      <Faq items={data?.home_faq} />
    </>
  );
};

export default Home;
