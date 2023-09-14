import './App.css';
import {useState} from 'react';
import{BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { MovieList } from './MovieList.1';

import { MovieDetails } from './MovieDetails';
import { AddMovie } from './AddMovie';
import { EditMovie } from './EditMovie';

function App() {
    const [movielist,setMovieList]=useState([]);
   const name1 = "movie app";
        
    return (
      <div className="App">
                <h1>Hello {name1}</h1>
                <Router>
                 <Routes>
         <Route path='/movie/:id' element={<MovieDetails/>}/>
         <Route path='/movie/add' element={<AddMovie/>}/>
         <Route path='/movie/edit/:id' element={<EditMovie />}/>
          <Route path='/movie' element={<MovieList/> }/>
           </Routes></Router>
              </div>
    );
     }
    export default App;