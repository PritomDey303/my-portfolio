import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Components/normal-components/Home/Home";
import education from "./fakeData/education";
import experience from "./fakeData/experience";
import PersonalInfo from "./fakeData/PersonalInfo";
import profession from "./fakeData/profession";
import reviews from "./fakeData/reviews";
import skills from "./fakeData/skills";
export const UserContext = createContext();
function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [professionInfo, setProfessionInfo] = useState([]);
  const [EducationInfo, setEducationInfo] = useState([]);
  const [ExperienceInfo, setExperienceInfo] = useState([]);
  const [Skills, setSkills] = useState([]);
  const [Reviews, setReviews] = useState([]);
  //fetching personal info
  useEffect(() => {
    setPersonalInfo(PersonalInfo);
  }, []);
  //featching profession info
  useEffect(() => {
    setProfessionInfo(profession);
  }, []);
  //featching education info
  useEffect(() => {
    setEducationInfo(education);
  }, []);
  //featching experience info
  useEffect(() => {
    setExperienceInfo(experience);
  }, []);
  //featching skills info
  useEffect(() => {
    setSkills(skills);
  }, []);
  //featching review info
  useEffect(() => {
    setReviews(reviews);
  }, []);
  return (
    <div className="App">
      <UserContext.Provider
        value={[
          personalInfo,
          setPersonalInfo,
          professionInfo,
          setProfessionInfo,
          EducationInfo,
          setEducationInfo,
          ExperienceInfo,
          setExperienceInfo,
          Skills,
          setSkills,
          Reviews,
          setReviews,
        ]}
      >
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
