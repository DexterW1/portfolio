import'./projectcard.css'
import ListSkill from '../components/listskills';
import tabImg from '../images/open.png'
import githubImage from '../images/github-mark-white.png'
export default function projectcard(props) {
  return (
    <>
        <div className="project-card-container">
            <div className='image-container'>
                <img src={props.image} alt="" />
            </div>
            <div className='project-summary-container'>
                <div className="project-title">
                    <a target='_blank' rel='noopener noreferrer' href={props.link}>{props.title}<img src={tabImg} alt="" /></a>
                    {props.git==='t'?<a target='_blank' href={props.gitlink} rel='noopener noreferrer'><img src={githubImage} alt="" />Github</a>:null}
                </div>
                <div className="project-description">
                    <p>{props.summary}</p>
                </div>
                <div className="project-skills">
                    <ListSkill git = {props.git} listskills={props.listskills}/>
                </div>
            </div>
        </div>
    </>
  )
}
