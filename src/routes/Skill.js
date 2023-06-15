import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import SkillContent from '../components/SkillContent';


const Skill = () => {
  return (
    <div>
      <Navbar/>
       <HeroImg2 heading="SKILLS" />
       <SkillContent/>
      <Footer/>
      
    </div>
  )
}

export default Skill
