import React from 'react';
import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import AddNote from './Components/AddNote';
import { ListProvider } from './Components/Context/ListContext';


class App extends React.Component {
  // return the div containing the 3 main parts of the app seperated into components
  // the header, the list itself and the create note section
  render() {
    return (
      <div className="App">
        <ListProvider>
          <Header />
          <List />
          <AddNote />
        </ListProvider>
      </div>
    );
  }
  
}
export default App;
