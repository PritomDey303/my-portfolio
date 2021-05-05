import React from "react";
import Footer from "../../shared-components/Footer/Footer";
import Navigation from "../../shared-components/Navigation/Navigation";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeContact from "./HomeContact/HomeContact";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeProfession from "./HomeProfession/HomeProfession";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeResume from "./HomeResume/HomeResume";
import HomeReview from "./HomeReview/HomeReview";
import SimpleBanner from "./SimpleBanner/SimpleBanner";
export default function Home() {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <HomeAbout />
      <HomeProfession />
      <HomeResume />
      <HomeProjects />
      <SimpleBanner title="Interested working with me?" />
      <HomeReview />
      <HomeContact />
      <Footer />
    </>
  );
}
