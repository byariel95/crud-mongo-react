import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from '../components/Main';
import Navigation from '../components/Navigation';
import  NotesList  from '../components/NotesList';
import  CreateNote  from '../components/CreateNote';
import  CreateUser  from '../components/CreateUser';


const App = () => {
   
    return(
        <Main>
            <Router>
                <Navigation/>
                <Route path="/" exact component={NotesList}/>
                <Route path="/norte/edit/:id" component={CreateNote}/>
                <Route path="/note/create" component={CreateNote}/>
                <Route path="/user/add" component={CreateUser}/>
            </Router>
        </Main>
    )
    
};

export default App;
