import './listskills.css'

export default function listskills(props) {
  return (
    <>
        <div className='skill-list-container'>
            {props.listskills.forEach(element => {
                <p>{element}</p>
            })}
        </div>
    </>
  )
}
