import React, { useState } from 'react';

const ListContext = React.createContext();
export function ListProvider({children}){ 
    // This component wrapps around <App /> to pass state data down using context
    // the useState Hook allows us to create variable that represent the "state" of the App
    // useState returns a pair of values, a data type and a function to update it
    const [newItem, setNewItem] = useState(""); //a string containing item for to do list
    const [list, setList] = useState([]);   // a list state of to do list items

    // Helper functions
    const addItem = () => {
        if(!newItem) { // checking if the newItem state value has been updated
            alert("Please enter a task"); // click the create without input to see the alert
            return;
        }
        const item = {  // creating new item object to add to the list state array
            id: Math.floor(Math.random() * 500), 
            value: newItem
        }
        setList(oldList => [...oldList, item]); // updates list to add new item
        setNewItem(""); // reset newitem to prevent entering blank task to list
    }

    const removeItem = (itemID) => { // use setList to filter deleted item via id parameter
        setList(list.filter(item => item.id !== itemID));
    }
    
    // App Context
    const context = {
        actions: {addItem, removeItem},
        state: {list, setList, newItem, setNewItem}
    };

    // this ListProvider function returns the context provider that holds the children 
    // of this function. the context created earlier is then passed into the children
    // from the value prop. VIEW APP.JS for a better view of how this looks
    return(
        <ListContext.Provider value={{context}}>
            {children}
        </ListContext.Provider>
    );
}
export default ListContext;