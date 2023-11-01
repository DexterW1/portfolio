import './projects.css'
import ProjectLoad from '../components/projectcard';
import stockImage from '../images/stock-exchange-app.png'
import weatherImage from '../images/logo.png';
import puzzleImage from '../images/sliding-puzzle.png';
import carImage from '../images/car-crash-128.png';
import ProjectData from '../assets/data.json';
export default function projects() {
  return (
    <>
        <div id="project" className="projects-container">
            <div className="project-space">
                <h1 id='h1header'>Projects</h1>
                <div className="project-row-1">
                    <ProjectLoad git='t' gitlink={ProjectData.project1.gitlink} link={ProjectData.project1.link} title={ProjectData.project1.title} summary={ProjectData.project1.summary} image={stockImage} listskills={ProjectData.project1.skills}/>
                    <ProjectLoad git='t' gitlink={ProjectData.project2.gitlink} link ={ProjectData.project2.link} title={ProjectData.project2.title} summary={ProjectData.project2.summary} image={weatherImage} listskills={ProjectData.project2.skills}/>
                 </div>
                 <div className="hidden project-row-1">
                    <ProjectLoad link={ProjectData.project3.link} title={ProjectData.project3.title} summary={ProjectData.project3.summary} image={carImage} listskills={ProjectData.project3.skills}/>
                    <ProjectLoad link={ProjectData.project4.link} title={ProjectData.project4.title} summary={ProjectData.project4.summary} image={puzzleImage} listskills={ProjectData.project4.skills}/>
                 </div>
            </div>
        </div>
    </>
  )
}
