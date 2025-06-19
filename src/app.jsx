import './app.css'
import { useRef } from 'preact/hooks'
import { Project } from './components/project.jsx'
import { Skill } from './components/skill.jsx'
import skillsData from '../skills.json'
export function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const scrollToSection = (ref) => {
    setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };
  return (
    <>
      <div className="HeaderSection">
        <p className="Font20 FontBold">
          Parth<span className="FontAccent">Mital</span>
        </p>
        <div className="FontGrey Font16 HeaderButtons">
          <p onClick={() => scrollToSection(homeRef)}>Home</p>
          <p onClick={() => scrollToSection(aboutRef)}>About</p>
          <p onClick={() => scrollToSection(projectsRef)}>Projects</p>
          <p onClick={() => scrollToSection(skillsRef)}>Skills</p>
        </div>
      </div>
      <div ref={homeRef} className="HomeSection">
        <p className="Font72 FontBold FontCenter">
          Hi, I'm <span className="FontAccent">Parth Mital</span>
        </p>
        <p className="Font24 FontGrey FontCenter">
          Computer Science Student Interested in Development, UI/UX Design, 3D Animation, Video Editing, and Music Production.
        </p>
        <div className="Buttons">
          <button onClick={() => scrollToSection(projectsRef)} className="Button1 Font14 FontSemiBold FontBlack">
            View My Work
          </button>
          <button className="Button2 Font14 FontSemiBold FontAccent">
            Download CV
          </button>
        </div>
        <div className="SocialIcons">
          <a href="https://linkedin.com/in/parthmital" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/parthmital" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <img src="github.svg" alt="GitHub" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=parth.mital.2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <img src="gmail.svg" alt="Gmail" />
          </a>
        </div>
      </div>
      <div ref={aboutRef} className="AboutSection">
        <p className="Font36 FontBold">
          About <span className="FontAccent">Me</span>
        </p>
        <p className="Font18 FontGrey">
          I’m a computer science student with a strong interest in frontend development, UI/UX design, and creative digital work. I build responsive user interfaces using tools like React and Next.js, and design visually clean layouts using Figma and the Adobe Creative Suite.
        </p>
        <p className="Font18 FontGrey">
          I also work in 3D modelling and texturing with Blender and Substance Painter, edit videos using After Effects and Premiere Pro, and produce music with Ableton Live and FL Studio. My focus lies in combining technical skills with creativity across different mediums.
        </p>
        <div className="Buttons">
          <div className="Tag Font14 FontSemiBold FontBlack">Development</div>
          <div className="Tag Font14 FontSemiBold FontBlack">3D Animation</div>
          <div className="Tag Font14 FontSemiBold FontBlack">Video Editing</div>
          <div className="Tag Font14 FontSemiBold FontBlack">Music Production</div>
        </div>
      </div>
      <div ref={projectsRef} className="ProjectsSection">
        <div className="ProjectsSectionHeader">
          <p className="Font36 FontBold FontCenter">
            Featured <span className="FontAccent">Projects</span>
          </p>
          <p className="Font18 FontGrey FontCenter">
            Explore a Curated Collection of My Work in Frontend Development, UI/UX Design, 3D Animation, Video Editing, and Music Production.
          </p>
        </div>
        <div className="Projects">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <div ref={skillsRef} className="SkillsSection">
        <div className="SkillsSectionHeader">
          <p className="Font36 FontBold FontCenter">
            Technical <span className="FontAccent">Skills</span>
          </p>
          <p className="Font18 FontGrey FontCenter">
            The Tools I Use for Coding, Designing, Editing, and Creating Across Different Media
          </p>
        </div>
        <div className="Skills">
          {skillsData.map((skill, index) => (
            <Skill key={index} name={skill.name} icon={skill.icon} />
          ))}
        </div>
      </div>
      <div className="FooterSection">
        <p className="Font16 FontGrey FontCenter">
          © 2025 Parth Mital. All Rights Reserved.
        </p>
      </div>
    </>
  )
}