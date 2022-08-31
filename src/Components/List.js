import {useContext} from "react";
import Note from './Note';
import ListContext from './Context/ListContext';

const List = () => {
  const {context} = useContext(ListContext);
  return (
      <div className="list"> {/* Generating list via state list from context */}
        {context.state.list.map( (item) => <Note task={item} key={item.id}/>)}
      </div>
  );
}
export default List;