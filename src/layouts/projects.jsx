import { useState } from "react";
import "./projects.css";
import marsImg from "../images/redplanet.png";
import ProjectLoad from "../components/projectcard";
import stockImage from "../images/stock-exchange-app.png";
import weatherImage from "../images/logo.png";
import puzzleImage from "../images/sliding-puzzle.png";
import carImage from "../images/car-crash-128.png";
import ProjectData from "../assets/data.json";
import leftArrow from "../images/left-arrows.png";
import rightArrow from "../images/right-arrows.png";
export default function Projects() {
  const [indexStart, setIndexStart] = useState(0);
  const [indexEnd, setIndexEnd] = useState(2);
  const handleRight = () => {
    if (indexEnd < 4) {
      setIndexStart(indexStart + 1);
      setIndexEnd(indexEnd + 1);
    }
  };
  const handleLeft = () => {
    if (indexEnd > 2) {
      setIndexStart(indexStart - 1);
      setIndexEnd(indexEnd - 1);
    }
  };
  const ProjectArr = [
    {
      link: ProjectData.project1.gitlink,
      gitlink: ProjectData.project1.gitlink,
      git: "t",
      title: ProjectData.project1.title,
      summary: ProjectData.project1.summary,
      image: stockImage,
      listskills: ProjectData.project1.skills,
    },
    {
      link: ProjectData.project2.gitlink,
      gitlink: ProjectData.project2.gitlink,
      git: "t",
      title: ProjectData.project2.title,
      summary: ProjectData.project2.summary,
      image: weatherImage,
      listskills: ProjectData.project2.skills,
    },
    {
      git: "t",
      link: ProjectData.project3.link,
      title: ProjectData.project3.title,
      summary: ProjectData.project3.summary,
      image: carImage,
      listskills: ProjectData.project3.skills,
    },
    {
      git: "t",
      link: ProjectData.project4.link,
      title: ProjectData.project4.title,
      summary: ProjectData.project4.summary,
      image: puzzleImage,
      listskills: ProjectData.project3.skills,
    },
  ];
  return (
    <>
      <div id="project" className="projects-container">
        <div className="mars-container">
          <img src={marsImg} alt="" />
        </div>
        <div className="project-space">
          <h1 id="h1header">Projects</h1>
          <div className="show project-row-1">
            <ProjectLoad
              git="t"
              gitlink={ProjectData.project1.gitlink}
              link={ProjectData.project1.link}
              title={ProjectData.project1.title}
              summary={ProjectData.project1.summary}
              image={stockImage}
              listskills={ProjectData.project1.skills}
            />
            <ProjectLoad
              git="t"
              gitlink={ProjectData.project2.gitlink}
              link={ProjectData.project2.link}
              title={ProjectData.project2.title}
              summary={ProjectData.project2.summary}
              image={weatherImage}
              listskills={ProjectData.project2.skills}
            />
          </div>
          <div className="show project-row-1">
            <ProjectLoad
              link={ProjectData.project3.link}
              title={ProjectData.project3.title}
              summary={ProjectData.project3.summary}
              image={carImage}
              listskills={ProjectData.project3.skills}
            />
            <ProjectLoad
              link={ProjectData.project4.link}
              title={ProjectData.project4.title}
              summary={ProjectData.project4.summary}
              image={puzzleImage}
              listskills={ProjectData.project4.skills}
            />
          </div>
          <div className="hidden project-row-1">
            <div className="switch-button btnleft">
              <button onClick={handleLeft}>
                {indexStart >= 1 && <img src={leftArrow} alt="" />}
              </button>
            </div>
            {ProjectArr.slice(indexStart, indexEnd).map((item, index) => (
              <ProjectLoad
                key={index}
                git={item.git}
                gitlink={item.gitlink}
                link={item.link}
                title={item.title}
                summary={item.summary}
                image={item.image}
                listskills={item.listskills}
              />
            ))}
            <div className="switch-button btnright">
              <button onClick={handleRight}>
                {indexEnd <= 3 && <img src={rightArrow} alt="" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
