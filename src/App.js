
import { Component } from 'react';
import { MovieList } from './components/movieList/MovieList.component';
import { SearchBox } from './components/search/search.component';
 
import { Card } from './components/card/card.component';
import './App.css';
import Slider from "react-slick";
import Banner from './components/banner/banner.component';
import Header from './components/header/header.component';


class App extends Component{
  constructor(){
    super();
    this.state = {
      movies : [],
      serachField : '',
    };
  }
  componentDidMount(){
    const url = `https://www.omdbapi.com/?s=adventures&apikey=ef773fae`;
    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        this.setState({
            movies : data.Search
        })
        
    })
    
}

   
  render(){
    const settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      
      ]
    };
    const { movies, serachField } = this.state;
    const searchFilter = movies.filter(movie => movie.Title.toLowerCase().includes(serachField.toLowerCase())
    );
    const sortedsearchFilter = searchFilter.sort((a, b) => a.Title.localeCompare(b.Title));
     
    return(
      <div className="App">
       
        <Header />
        <Banner />
        <SearchBox
              placeholder="Search Movie" 
              handleChange={e => {
                this.setState({serachField: e.target.value});
              }} 
        />
        <MovieList movies={sortedsearchFilter} />
        <Slider {...settings}>
            {movies.map(movie => (
              <Card key={movie.imdbID} movie={movie} />
            ))}
        </Slider>
        
         
      </div>

    );
  }
}


export default App;
