import React from "react";
import Navigation from "../../shared-components/Navigation/Navigation";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeProfession from "./HomeProfession/HomeProfession";
import HomeProjects from "./HomeProjects/HomeProjects";
import HomeResume from "./HomeResume/HomeResume";
export default function Home() {
  return (
    <>
      <Navigation />
      <HomeHeader />
      <HomeAbout />
      <HomeProfession />
      <HomeResume />
      <HomeProjects />
    </>
  );
}
