import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { 
      isLoading: true, //take this syntax for granted. Default value for fetch in React for state
      beers: [] //default value showing blank array since we are assuming we haven't written 
      //any code below
    }
  }

  componentDidMount() { //take this synxtax for granted
    this.fetchData(); //take this synxtax for granted
  }

  fetchData() {
    fetch ('https://api.punkapi.com/v2/beers') //take this synxtax for granted
    .then(response => response.json()) //take this synxtax for granted
    .then(parsedJSON => parsedJSON.map(beer => ({ //take this synxtax for granted. Map runs through all options
      //IMPORTANT**: All "beer" does is establish the baseline for dot notation. I changed the word to bee and it does the same thing.
      //It is not specific term needing to be used, you can use anything. Beer, essentially, is your starter
      //word to accessing specific terms you do need, like name, iby, abv, etc.
      name: `${beer.name}`,
      tagline: `${beer.tagline}`,
      description: `${beer.description}`,
      abv: `${beer.abv}`,
      ibu: `${beer.ibu}`
    })))
    .then(beers => this.setState({
      beers,
      isLoading: false //take this syntax for granted. Default value for fetch in React for setState
    }))
    .catch(error => console.log("parsing failed", error)) //take this syntax for granted. It catches errors
    //if the code doesn't load right.
    }
   

  render() {
    const {isLoading, beers} = this.state;
    return (
      <div className="whole-page">
        <header>Beer List</header>
      
       <div className={`content ${isLoading ? 'is-loading' : ''}`}> {/*comment take this line for grantedhere*/}
          <div className="beer-info">
            {
             
              !isLoading && beers.length > 0 ? beers.map(beer => { //take this line for granted
                const {name, tagline, description, abv, ibu} = beer; //take this line for granted
                return <div key={beer} title={name}> {/*take this line for granted */}
                  <p className="name-line">{name} <button className="like-button">Like</button></p>
                  <p className="tagline-line">{tagline}</p>
                  <p className="description-line">{description}</p>
                  <p className="abv-line">ABV: {abv}</p>
                  <p className="ibu-line">IBU: {ibu}</p>
                  <br></br>
                  </div>
              }) : null //take this line for granted
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App;