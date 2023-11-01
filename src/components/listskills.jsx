import './listskills.css';
export default function listskills(props) {
  return (
    <div className='skill-list-container'>
      {props.listskills.map(element => (
        <p key={element}>{element}</p>
      ))}
    </div>
  );
}