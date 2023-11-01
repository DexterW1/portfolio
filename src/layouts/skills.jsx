import './skills.css'
export default function skills() {
  return (
    <>
        <div id="skills" className='skills-container'>
            <div className='skills-space'>
                <h1>Skills & Frameworks</h1>
                <div className="skills-space-summary">
                    <p>A few months ago, I delved into the world of front-end development, starting from ground zero. As I rapidly absorb new knowledge, my focus has shifted towards the art of web design. Today, my main drive is crafting user-friendly website experiences, dedicated to building engaging and accessible interfaces for all users.</p>
                </div>
                <div className="skills-icon-container">
                    <div className='skills-icons'>
                        <div className="icon icon-javascript">
                            <i className="devicon-javascript-plain colored"></i>
                            <p>JavaScript</p>
                        </div>
                        <div className="icon icon-html">
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <p>HTML5</p>
                        </div>
                        <div className="icon icon-css">
                            <i className="devicon-css3-plain-wordmark colored"></i>
                            <p>CSS3</p>
                        </div>
                        <div className="icon icon-react">
                            <i className="devicon-react-original-wordmark colored"></i>
                            <p>React</p>
                        </div>
                        <div className="icon icon-node">
                            <i className="devicon-nodejs-plain-wordmark colored"></i>
                            <p>NodeJS</p>
                        </div>
                    </div>
                    <div className='skills-icons'>
                        <div className="icon icon-cplus">
                            <i className="devicon-cplusplus-plain colored"></i>
                            <p>C++</p>
                        </div>
                        <div className="icon icon-python">
                            <i className="devicon-python-plain-wordmark colored"></i>
                            <p>Python</p>
                        </div>
                        <div className="icon icon-sql">
                            <i className="devicon-mysql-plain-wordmark colored"></i>
                            <p>SQL</p>
                        </div>
                        <div className="icon icon-git">
                            <i className="devicon-git-plain-wordmark colored"></i>
                            <p>Git</p>
                        </div>
                        <div className="icon icon-visualstudio">
                            <i className='devicon-visualstudio-plain colored'></i>
                            <p>Visual Studio Code</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
