import React from 'react'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Work from '../components/Work';


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="PROJECTS"  text="Username: user1@gmail.com  and   Password: User1$" 
       text1="Admin: admin123@gmail.com  and   Password:Admin123"/>
      <Work/>
      <Footer/>
      
      
    </div>
  )
}

export default Project
