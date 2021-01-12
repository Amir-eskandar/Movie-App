import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import MoviesList from './components/MoviesList'
import SectionHeader from './components/SectionHeader'
import SearchBox from './components/SearchBox'
import MyFavourites from './components/MyFavourites'
import RemoveFavourites from './components/RemoveFavourites'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState('star wars');

  const url = `http://www.omdbapi.com/?s=${search}&apikey=88da9bb1`;


  useEffect(() => {
    const fetchedData = async () => {
      const {data} = await axios.get(url)
      console.log(data)
      if(data.Search) {
        setMovies(data.Search)
      }
    }
    fetchedData()
  },[url]);

  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, [])

  const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  };
  
  const addToMyFavouritesList = (movie) => {
    const newFavouriteList = [...favourites, movie];

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFromFavouritesList = (movie) => {
    const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);

  }

  return (
    <>
     <Header heading='Movie-App' />
    <Container className="movie-app" style={{marginTop:'60px'}}>
      <Row className='d-flex align-items-center' >
      <SectionHeader heading='Movies' />
      <SearchBox search={search} setSearch={setSearch} />
      </Row>
      <Row>
      <MoviesList 
        movies={movies} 
        AddToMyFavourites={MyFavourites} 
        handleFavourites={addToMyFavouritesList}/>
      </Row>
      
      <Row className='d-flex align-items-center' >
      <SectionHeader heading='My List' />
      </Row>
      <Row>
      <MoviesList 
        movies={favourites} 
        AddToMyFavourites={RemoveFavourites} 
        handleFavourites={removeFromFavouritesList}/>
      </Row>

    </Container>
    </>
  );
}

export default App;
