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
          Alex<span className="FontAccent">Chen</span>
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
          Hi, I'm <span className="FontAccent">Alex Chen</span>
        </p>
        <p className="Font24 FontGrey FontCenter">
          Full-Stack Developer &amp; UI/UX Designer passionate about creating
          innovative digital experiences that blend cutting-edge technology with
          beautiful design.
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
              fill="white"
            />
            <path
              d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
              fill="#0A66C2"
            />
            <path
              d="M34.6341 40.8159H40.1222C40.3211 40.8159 40.5118 40.7369 40.6525 40.5963C40.7931 40.4557 40.8721 40.265 40.8722 40.0661L40.875 28.4707C40.875 22.4102 39.5691 17.7518 32.4866 17.7518C29.7943 17.6516 27.2554 19.0395 25.8853 21.357C25.8786 21.3683 25.8684 21.377 25.8563 21.3819C25.8441 21.3869 25.8307 21.3877 25.8181 21.3842C25.8054 21.3808 25.7943 21.3734 25.7863 21.363C25.7782 21.3526 25.7739 21.3399 25.7738 21.3268V19.0613C25.7738 18.8623 25.6947 18.6716 25.5541 18.5309C25.4134 18.3903 25.2227 18.3113 25.0238 18.3113H19.8156C19.6167 18.3113 19.4259 18.3903 19.2852 18.5309C19.1446 18.6716 19.0656 18.8623 19.0656 19.0613V40.065C19.0656 40.2639 19.1446 40.4547 19.2852 40.5953C19.4259 40.736 19.6167 40.815 19.8156 40.815H25.3033C25.5022 40.815 25.693 40.736 25.8336 40.5953C25.9743 40.4547 26.0533 40.2639 26.0533 40.065V29.6826C26.0533 26.7469 26.6102 23.9038 30.2498 23.9038C33.8376 23.9038 33.8841 27.2631 33.8841 29.8727V40.0659C33.8841 40.2649 33.9631 40.4556 34.1037 40.5963C34.2444 40.7369 34.4352 40.8159 34.6341 40.8159ZM7.125 11.1803C7.125 13.4048 8.95631 15.2351 11.181 15.2351C13.4051 15.2349 15.2353 13.4034 15.2353 11.1793C15.2349 8.95519 13.4046 7.125 11.1803 7.125C8.95538 7.125 7.125 8.95575 7.125 11.1803ZM8.42981 40.8159H13.9249C14.1238 40.8159 14.3146 40.7369 14.4552 40.5963C14.5959 40.4556 14.6749 40.2649 14.6749 40.0659V19.0613C14.6749 18.8623 14.5959 18.6716 14.4552 18.5309C14.3146 18.3903 14.1238 18.3113 13.9249 18.3113H8.42981C8.2309 18.3113 8.04014 18.3903 7.89948 18.5309C7.75883 18.6716 7.67981 18.8623 7.67981 19.0613V40.0659C7.67981 40.2649 7.75883 40.4556 7.89948 40.5963C8.04014 40.7369 8.2309 40.8159 8.42981 40.8159Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M45.3596 2.64037C43.5978 0.878525 41.478 -0.0015995 39.0001 2.18213e-06H8.99985C6.52045 2.18213e-06 4.40062 0.880126 2.64037 2.64037C0.878525 4.40222 -0.0015995 6.52205 2.18213e-06 8.99985V39.0001C2.18213e-06 41.4796 0.880126 43.5994 2.64037 45.3596C4.40222 47.1215 6.52205 48.0016 8.99985 48H16.0008C16.4573 48 16.8008 47.984 17.0315 47.9519C17.3001 47.8989 17.5425 47.7556 17.7186 47.5459C17.9476 47.3057 18.0622 46.9573 18.0622 46.5008L18.0453 44.3746C18.0357 43.0196 18.0309 41.9464 18.0309 41.1552L17.3102 41.2801C16.8537 41.3634 16.2763 41.4003 15.578 41.3907C14.8493 41.3767 14.1229 41.3036 13.4061 41.172C12.6423 41.0335 11.9235 40.712 11.3111 40.235C10.6683 39.749 10.1889 39.0785 9.93684 38.313L9.62451 37.5923C9.36025 37.0243 9.0296 36.4896 8.63947 35.9994C8.191 35.4164 7.73773 35.0208 7.27965 34.8126L7.06342 34.6564C6.91327 34.5476 6.77622 34.4219 6.65499 34.2816C6.5392 34.1513 6.44437 34.0038 6.3739 33.8443C6.31143 33.697 6.36348 33.5769 6.53006 33.484C6.69663 33.3879 6.99935 33.3406 7.43821 33.3422L8.06287 33.4383C8.47931 33.52 8.99425 33.7691 9.60769 34.1855C10.2277 34.6082 10.7456 35.1638 11.1237 35.812C11.6042 36.6641 12.1824 37.3152 12.8583 37.7653C13.5358 38.2137 14.2181 38.438 14.9053 38.438C15.5924 38.438 16.1866 38.3859 16.6879 38.2818C17.1734 38.1812 17.6453 38.0231 18.0934 37.8109C18.2808 36.4158 18.7909 35.3427 19.6238 34.5915C18.5437 34.4848 17.4731 34.2968 16.4212 34.0293C15.3948 33.7477 14.4076 33.3385 13.483 32.8113C12.5153 32.2845 11.6607 31.5726 10.9675 30.7163C10.3012 29.8834 9.75424 28.7902 9.32659 27.4368C8.90055 26.0818 8.68752 24.5185 8.68752 22.7471C8.68752 20.2276 9.50999 18.0814 11.1549 16.3083C10.3861 14.4135 10.459 12.2897 11.3735 9.93684C11.979 9.74784 12.8751 9.88798 14.062 10.3573C15.2488 10.8266 16.1185 11.227 16.6711 11.5585C17.2237 11.8949 17.6666 12.1768 17.9997 12.4042C19.9527 11.8597 21.9713 11.5864 23.9988 11.5922C26.0618 11.5922 28.0623 11.8629 30.0003 12.4042L31.1871 11.6546C32.1001 11.1065 33.063 10.6464 34.063 10.2804C35.1665 9.86396 36.0106 9.74944 36.5952 9.93684C37.5322 12.2913 37.6147 14.4159 36.8427 16.3107C38.4892 18.0806 39.3125 20.2268 39.3125 22.7495C39.3125 24.5209 39.0987 26.0882 38.671 27.4512C38.245 28.8159 37.6932 29.9098 37.0157 30.7331C36.3083 31.5765 35.4505 32.2811 34.4858 32.8113C33.4768 33.3734 32.4973 33.7795 31.5475 34.0293C30.4957 34.2976 29.4251 34.4864 28.345 34.5939C29.4261 35.5309 29.9675 37.0093 29.9691 39.029V46.5008C29.9691 46.8532 30.0211 47.1391 30.1252 47.3585C30.1738 47.4639 30.2431 47.5583 30.329 47.6363C30.4148 47.7144 30.5155 47.7743 30.625 47.8126C30.854 47.8959 31.0574 47.9471 31.2352 47.9664C31.413 47.9888 31.6677 47.9992 31.9992 47.9976H39.0001C41.4796 47.9976 43.5994 47.1175 45.3596 45.3572C47.1199 43.597 48 41.4771 48 38.9977V8.99985C48 6.52045 47.1215 4.40062 45.3596 2.64037Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M36.75 0H11.25C5.0368 0 0 5.0368 0 11.25V36.75C0 42.9632 5.0368 48 11.25 48H36.75C42.9632 48 48 42.9632 48 36.75V11.25C48 5.0368 42.9632 0 36.75 0Z"
              fill="#F4F2ED"
            />
            <path
              d="M7.80675 38.0698H13.7726V23.5811L5.25 17.1893V35.5131C5.25 36.9277 6.39638 38.0698 7.80675 38.0698Z"
              fill="#4285F4"
            />
            <path
              d="M34.2272 38.0698H40.1932C41.6079 38.0698 42.75 36.9234 42.75 35.5131V17.1891L34.2272 23.5811"
              fill="#34A853"
            />
            <path
              d="M34.2272 12.5016V23.5811L42.75 17.1891V13.7797C42.75 10.6179 39.1406 8.81531 36.6137 10.7117"
              fill="#FBBC04"
            />
            <path
              d="M13.7726 23.5811L13.7728 12.5018L24 20.1718L34.2272 12.5016V23.5811L24 31.2516"
              fill="#EA4335"
            />
            <path
              d="M5.25 13.7799V17.1893L13.7726 23.5811L13.7728 12.5018L11.3863 10.7119C8.85506 8.8155 5.25 10.6181 5.25 13.7799Z"
              fill="#C5221F"
            />
          </svg>
        </div>
      </div>
      <div ref={aboutRef} className="AboutSection">
        <p className="Font36 FontBold">
          About <span className="FontAccent">Me</span>
        </p>
        <p className="Font18 FontGrey">
          I'm a passionate full-stack developer with over 5 years of experience
          creating digital solutions that make a difference. My journey began with a
          Computer Science degree from Stanford University, and I've since worked
          with startups and Fortune 500 companies.
        </p>
        <p className="Font18 FontGrey">
          I specialize in React, Node.js, and modern web technologies, with a keen
          eye for design and user experience. When I'm not coding, you'll find me
          exploring new technologies, contributing to open source projects, or
          hiking in the mountains.
        </p>
        <p className="Font18 FontGrey">
          I believe in writing clean, maintainable code and creating interfaces that
          users love. My goal is to bridge the gap between technical complexity and
          intuitive design.
        </p>
        <div className="Buttons">
          <div className="Tag Font14 FontSemiBold FontBlack">React Expert</div>
          <div className="Tag Font14 FontSemiBold FontBlack">UI/UX Designer</div>
          <div className="Tag Font14 FontSemiBold FontBlack">Full-Stack</div>
        </div>
      </div>
      <div ref={projectsRef} className="ProjectsSection">
        <div className="ProjectsSectionHeader">
          <p className="Font36 FontBold FontCenter">
            Featured <span className="FontAccent">Projects</span>
          </p>
          <p className="Font18 FontGrey FontCenter">
            Explore some of my recent work that showcases my skills in full-stack
            development, UI/UX design, and problem-solving.
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
            Technologies and tools I use to bring ideas to life and create
            exceptional digital experiences.
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
          © 2024 Alex Chen. All rights reserved. Built with passion and modern web
          technologies.
        </p>
      </div>
    </>
  )
}