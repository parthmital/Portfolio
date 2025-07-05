import './app.css'
import { useEffect, useRef, useState } from 'preact/hooks'
import { Project } from './Components/Project.jsx'
import { Skill } from './Components/Skill.jsx'
import skillsData from './Data/SkillsData.json'
import projectsData from './Data/ProjectsData.json'
export function App() {
  const [activeSection, setActiveSection] = useState('home')
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  const scrollToSection = (ref, name) => {
    setActiveSection(name)
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }
  useEffect(() => {
    const sectionRefs = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
    ]
    const handleScroll = () => {
      const buffer = 80
      let closest = { id: 'home', offset: Infinity }
      sectionRefs.forEach(({ id, ref }) => {
        if (ref.current) {
          const top = Math.abs(ref.current.getBoundingClientRect().top - buffer)
          if (top < closest.offset) {
            closest = { id, offset: top }
          }
        }
      })
      setActiveSection(closest.id)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <div className="HeaderSection">
        <p className="Font20 FontBold">
          Parth<span className="FontAccent">Mital</span>
        </p>
        <div className="FontGrey Font16 HeaderButtons">
          {[
            { id: 'home', label: 'Home', ref: homeRef },
            { id: 'about', label: 'About', ref: aboutRef },
            { id: 'projects', label: 'Projects', ref: projectsRef },
            { id: 'skills', label: 'Skills', ref: skillsRef },
          ].map(({ id, label, ref }) => (
            <p
              key={id}
              className={activeSection === id ? 'ActiveNav FontAccent' : ''}
              onClick={() => scrollToSection(ref, id)}
            >
              {label}
            </p>
          ))}
        </div>
      </div>
      <div id="home" ref={homeRef} className="HomeSection">
        <p className="Font72 FontBold FontCenter">
          Hi, I'm <span className="FontAccent">Parth Mital</span>
        </p>
        <p className="Font24 FontGrey FontCenter">
          Computer Science Student Interested in Development, UI/UX Design, 3D Animation, Video Editing, and Music Production.
        </p>
        <div className="Buttons">
          <button
            onClick={() => scrollToSection(projectsRef, 'projects')}
            className="Button1 Font14 FontSemiBold FontBlack"
          >
            View My Work
          </button>
          <button className="Button2 Font14 FontSemiBold FontAccent" onClick={() => window.open('Resume/Parth_Mital_Resume.pdf', '_blank')}>
            Download CV
          </button>
        </div>
        <div className="SocialIcons">
          <a href="https://linkedin.com/in/parthmital" target="_blank" rel="noopener noreferrer">
            <img src="Social Icons/LinkedIn.svg" />
          </a>
          <a href="https://github.com/parthmital" target="_blank" rel="noopener noreferrer">
            <img src="Social Icons/GitHub.svg" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=parth.mital.2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="Social Icons/Gmail.svg" />
          </a>
        </div>
      </div>
      <div id="about" ref={aboutRef} className="AboutSection">
        <p className="Font36 FontBold">
          About <span className="FontAccent">Me</span>
        </p>
        <p className="Font18 FontGrey">
          I’m a computer science student with a strong interest in frontend development, UI/UX design, and creative digital work. I build responsive user interfaces using tools like React and Next.js, and design visually clean layouts using Figma and the Adobe Creative Suite.
        </p>
        <p className="Font18 FontGrey">
          I also work in 3D modelling and texturing with Blender and Substance Painter, edit videos using After Effects and Premiere Pro, and produce music with Ableton Live and FL Studio.
        </p>
        <div className="Buttons">
          {['Development', '3D Animation', 'Video Editing', 'Music Production'].map(tag => (
            <div key={tag} className="Tag Font14 FontSemiBold FontBlack">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div id="projects" ref={projectsRef} className="ProjectsSection">
        <div className="ProjectsSectionHeader">
          <p className="Font36 FontBold FontCenter">
            Featured <span className="FontAccent">Projects</span>
          </p>
          <p className="Font18 FontGrey FontCenter">
            Explore a Curated Collection of My Work in Frontend Development, UI/UX Design, 3D Animation, Video Editing, and Music Production.
          </p>
        </div>
        <div className="Projects">
          {projectsData.map((project, i) => (
            <Project
              key={i}
              title={project.title}
              image={project.image}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
      <div id="skills" ref={skillsRef} className="SkillsSection" style={{ paddingBottom: "calc(60px + var(--spacing-32))" }}>
        <div className="SkillsSectionHeader">
          <p className="Font36 FontBold FontCenter">
            Technical <span className="FontAccent">Skills</span>
          </p>
          <p className="Font18 FontGrey FontCenter">
            The Tools I Use for Coding, Designing, Editing, and Creating Across Different Media
          </p>
        </div>
        <div className="Skills">
          {skillsData.map((skill, i) => (
            <Skill key={i} name={skill.name} icon={skill.icon} link={skill.link} />
          ))}
        </div>
      </div>
      <div className="FooterSection">
        <p className="Font16 FontGrey FontCenter">© 2025 Parth Mital. All Rights Reserved.</p>
      </div>
    </>
  )
}