import'./projectcard.css'
import ListSkill from '../components/listskills';
export default function projectcard(props) {
    
  return (
    <>
        <div className="project-card-container">
            <div className='image-container'>
                <img src={props.image} alt="" />
            </div>
            <div className='project-summary-container'>
                <div className="project-title">
                    <h1>{props.title}</h1>
                </div>
                <div className="project-description">
                    <p>{props.summary}</p>
                </div>
                <div className="project-skills">
                    <ListSkill listskills={props.listskills}/>
                </div>
            </div>
        </div>
    </>
  )
}
