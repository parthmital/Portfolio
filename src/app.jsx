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
          <button className="Button2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.49999 10.6281C7.38333 10.6281 7.27395 10.61 7.17187 10.5739C7.06979 10.5377 6.97499 10.4756 6.88749 10.3875L3.7375 7.2375C3.5625 7.0625 3.4785 6.85833 3.4855 6.625C3.4925 6.39167 3.5765 6.1875 3.7375 6.0125C3.9125 5.8375 4.12046 5.7465 4.36137 5.7395C4.60229 5.7325 4.80995 5.81621 4.98437 5.99063L6.62499 7.63125V1.375C6.62499 1.12709 6.709 0.91942 6.87699 0.752003C7.04499 0.584586 7.25266 0.500586 7.49999 0.500003C7.74733 0.49942 7.95529 0.58342 8.12387 0.752003C8.29245 0.920586 8.37616 1.12825 8.37499 1.375V7.63125L10.0156 5.99063C10.1906 5.81563 10.3986 5.73163 10.6395 5.73863C10.8804 5.74563 11.0881 5.83692 11.2625 6.0125C11.4229 6.1875 11.5069 6.39167 11.5145 6.625C11.5221 6.85833 11.4381 7.0625 11.2625 7.2375L8.11249 10.3875C8.02499 10.475 7.9302 10.5371 7.82812 10.5739C7.72604 10.6106 7.61666 10.6287 7.49999 10.6281ZM2.25 14.5C1.76875 14.5 1.35692 14.3288 1.0145 13.9864C0.672083 13.644 0.500583 13.2318 0.5 12.75V11C0.5 10.7521 0.584 10.5444 0.752 10.377C0.92 10.2096 1.12767 10.1256 1.375 10.125C1.62233 10.1244 1.83029 10.2084 1.99887 10.377C2.16746 10.5456 2.25117 10.7533 2.25 11V12.75H12.75V11C12.75 10.7521 12.834 10.5444 13.002 10.377C13.17 10.2096 13.3777 10.1256 13.625 10.125C13.8723 10.1244 14.0803 10.2084 14.2489 10.377C14.4174 10.5456 14.5012 10.7533 14.5 11V12.75C14.5 13.2313 14.3288 13.6434 13.9864 13.9864C13.6439 14.3294 13.2318 14.5006 12.75 14.5H2.25Z"
                fill="#BFFF00"
              />
            </svg>
            <p className="Font14 FontSemiBold FontAccent">Download CV</p>
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