import { Movie } from './Movie';
import {useState,useEffect} from 'react';
import { mockapi } from './mockapi';

export function MovieList() {
  const [movielist,setMovieList]=useState([]);
  const getMovies=()=>{
    {fetch(`${mockapi}/movies`,{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((mvs)=>setMovieList(mvs))}
  }
  useEffect(()=>getMovies(),[]);
  const deleteMovie=(id)=>{fetch(`${mockapi}/movies/${id}`,{
    method:"DELETE",
  }).then(()=>getMovies());
  
};
  return (
    <div className="movie-list">
      {movielist.map(({ name, poster, starCast, rating, summary,id }, index) => (
        <Movie key={index} name={name} poster={poster} starCast={starCast}
          rating={rating} summary={summary}
          deleteButton={<button aria-label="delete" color="error" onClick={()=>deleteMovie(id)}>
   delete
    </button>} 
    id={id}
    />
          ))}
      
    </div>
  );
}

