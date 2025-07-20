import React from 'react';

;
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import SkillMain from './components/mySkillSection/SkillMain';
import SubSkill from './components/mySkillSection/SubSkill';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectMain from './components/projectSection/ProjectMain';
import ContactMEMain from './components/contactMeSection/ContactMEMain';
import FooterMain from './components/footerSection/FooterMain';

function App() {
  return (
    <main className="font-body  ">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection/>
      <AboutMeMain/>
      <SkillMain/>
      <SubSkill/>
      <ExperienceMain/>
      <ProjectMain/>
      <ContactMEMain/>
      <FooterMain/>
      <HelperSection/>
    </main>
  );
}

export default App;
