import './topbarnav.css';
export default function topbarnav({scrollToSection}) {
  return (
    <>
      <div className="topbar-container">
        <header>
              <h1>YW.</h1>
              <nav>
                  <a onClick={()=>scrollToSection('aboutme')} href="#aboutme">About Me</a>
                  <a onClick={()=>scrollToSection('skills',200)} href="#skills">Skills</a>
                  <a onClick={()=>scrollToSection('project',100)} href="#project">Projects</a>
                  <a onClick={()=>scrollToSection('experience',100)} href="#experience">Experience</a>
                  <a onClick={()=>scrollToSection('contact')} href="#contact">Contact</a>
              </nav>
          </header>
      </div>
    </>
  )
}
