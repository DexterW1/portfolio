import './projects.css'
import ProjectLoad from '../components/projectcard';
import stockImage from '../images/stockpageHome.png'
const projectTitle = "Stock Viewer";
const projectSummary = "sijefljesilfjesildilfjlesjfilesjfleisjfilesjfslei";
const projectSkills = ['a','b','c','d','e'];
export default function projects() {
  return (
    <>
        <div id="project" className="projects-container">
            <div className="project-space">
                <h1 id='h1header'>Projects</h1>
                <div className="project-row-1">
                    <ProjectLoad title={projectTitle} summary={projectSummary} image={stockImage} listskills={projectSkills}/>
                    <ProjectLoad title={projectTitle} summary={projectSummary} image={stockImage} listskills={projectSkills}/>
                 </div>
                <div className="project-row-2">

                </div>
            </div>
        </div>
    </>
  )
}
