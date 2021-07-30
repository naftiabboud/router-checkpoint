
import './App.css';
import { useState } from 'react';
import MovieList from './components/MovieList';
import MovieAdd from './components/MovieAdd';
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom';
import Description from './components/Description';

function App() {
  const [films, setFilms] = useState([
    {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://i.pinimg.com/originals/11/1c/5c/111c5c9ad99661af2d80e38948cf29d8.jpg",

      rate: 3,
      src:"https://www.youtube.com/embed/zSWdZVtXT7E" ,
    },
    {
      title: "Gladiator",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",

      posterURL: "http://www.erreursdefilms.com/peplum/affiches/gladiato.jpg",
      rate: 4,
      src:"https://www.youtube.com/embed/owK1qxDselE"
    },
    {
      title: "Joker",
      description:
        "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
      posterURL:
        "https://images.squarespace-cdn.com/content/v1/56a027275a56686ee6b4b0e7/1571249608791-V15413UO6IQKXF5Z2EW8/joker-movie-review.jpg?format=300w",
      rate: 5,
      src:"https://www.youtube.com/embed/zAGVQLHvwOY"
    },
    {
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",

      posterURL:
        "https://images.moviesanywhere.com/76cd3a853ffede1f5983f090839cacc8/8ca75d25-0bc2-4584-9d4c-3a381232c870.jpg?h=375&resize=fit&w=250",
      rate: 5,
      src:"https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
      title: "Le Parrain",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",

      posterURL:
        "https://4.bp.blogspot.com/-s7zsMihk1t8/VuqyWR3Gj1I/AAAAAAAAAuo/-TNvam3nBQk63nnxIkzIKcQmUeziRu1jA/s320/Le%2BParrain.jpg",
      rate: 5,
      src:"https://www.youtube.com/embed/sY1S34973zA"
    },
  ])
  const add=(newMovie)=>{
setFilms([...films,newMovie])
  }
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/trailer" component={Description}/>
        </Switch>
       
        <MovieList films={films}/>
        <MovieAdd add={add}/>
      </header>
     
    </div>
  );
}

export default App;
