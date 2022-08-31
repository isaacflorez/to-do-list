import { useContext } from "react";
import ListContext from './Context/ListContext';

const AddNote = () => {
    // Context is the list of item currently in the to do list
    const {context} = useContext(ListContext);
    return (
        <section className="create-note">
            <textarea
                name="new_note" 
                placeholder="New note..."
                value={context.state.newItem}
                onChange={e => context.state.setNewItem(e.target.value)}>
            </textarea> 
            <button id="create-btn" type="submit" onClick={() => context.actions.addItem()}>create note</button>
        </section>
    );
}
export default AddNote;