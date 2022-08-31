import { useContext } from "react";
import ListContext from "./Context/ListContext";

const RemoveButton = (props) => {
    const {context} = useContext(ListContext);
    return(
        <button className="remove-btn" onClick={() => context.actions.removeItem(props.id)}>remove</button>
    );
}
export default RemoveButton;