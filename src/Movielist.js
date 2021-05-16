import React, { useState, useRef } from 'react';
import Movie from './Movie';
import { v4 as uuidv4 } from 'uuid';

export default function Movielist() {
    const [movies, setMovies] = useState([]);
    const TitleRef = useRef();
    const RatingRef = useRef();

    function addItem(e) {
        const name = TitleRef.current.value
        const rating = RatingRef.current.value
        if (!name) {
          alert("Skriv in titel!"); 
          return false;
        }
        console.log(rating)
        if (rating == 0 || rating == '' ) {
            alert("Skriv in ett betyg!"); 
            return false;
        }
        
        setMovies(movies => {
          return [...movies, { id: uuidv4(), title: name, rating: rating }]
        })
        TitleRef.current.value = null
        RatingRef.current.value = null
      }
    function deleteItem(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    function alpabeticsort() {
        movies.sort((a, b) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
          if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
          return 0;
        });
    
        setMovies([...movies]);    
      } 

      function ratingsort() {
        movies.sort((a, b) => {
          if (a.rating > b.rating) return -1;
          if (a.rating < b.rating) return 1;
          return 0;
        });
    
        setMovies([...movies]);    
      }


    return (
        <div >
          <input className="form-control" ref={TitleRef} type="text" placeholder="Titel här" />
          <label htmlFor="rating">Betyg:</label>
          <select ref={RatingRef} type="text" id="rating" className="form-control">
            <option value="0">Välj betyg här..</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
    
          <button className="btn btn-success mt-3" onClick={addItem}>Spara film</button>
          <h3 style={{paddingTop: "20px"}}>Filmer:</h3>
          <ul className="list-group">
              {movies.map(movie => <Movie key={movie.id} item={movie}
              rating={movie.rating}
              deleteItem={deleteItem} />)}
              
          </ul>
          
          <section id="buttons">
            <button type="button" className="btn btn-primary" id="firstbutton" onClick={alpabeticsort}>Alfabetisk ordning</button>
            <button type="button" className="btn btn-primary" onClick={ratingsort}>Betygsordning</button>
          </section>
        </div>
      )
}
