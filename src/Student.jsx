import './Student.css';
const Student = (props) => {
    return (
        <div className='box'>
            <h2>{props.roll}</h2>
            <p>{props.name}</p>
            <button onClick={props.del}>X</button>
        </div>
    );
}
export default Student;