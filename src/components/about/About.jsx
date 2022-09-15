import React from 'react'
import './about.css'
import ME from '../../assets/images/liyakat2.jpeg'
import { FiAward } from 'react-icons/fi'
import { FiUsers } from 'react-icons/fi'
import { FaFolderOpen } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <img src={ME} alt="About Image" />
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FiAward className='about__icon' />
                <h5>Experience</h5>
                <small>3+ Years Working</small>
              </article>
              
              <article className="about__card">
                <FiUsers className='about__icon' />
                <h5>Clients</h5>
                <small>300+ Worldwide</small>
              </article>

              <article className="about__card">
                <FaFolderOpen className='about__icon' />
                <h5>Projects</h5>
                <small>50+ Completed</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, vero neque velit facilis optio sapiente harum suscipit, inventore deserunt ipsum sequi nobis quibusdam, ducimus aspernatur cumque est unde at quisquam?
      
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
  )
}

export default About