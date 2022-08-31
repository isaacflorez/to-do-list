import RemoveButton from './RemoveButton'

const Note = (props) => {
    return(
        <div className="note">
            <p className="note-text">{props.task.value}</p>
            <RemoveButton id={props.task.id}/>
        </div>
    );
}
export default Note;