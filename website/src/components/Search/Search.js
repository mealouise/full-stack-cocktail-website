import React from 'react';
import './style.css';
import axios from 'axios';


class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [] 
    }
  }

  getCocktails (searchTerm) {
    axios.get(`http://localhost:5000/get-cocktails?searchTerm=${searchTerm}`)
      .then((response) => {
        // handle success
        console.log(response);
        // Update the search results with data from the API
        this.setState({
          searchResults: response.data
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render () {
    return (
      <div className="Search">
        <input 
          className="Search__input" 
          type="text" 
          placeholder="Search for cocktails.." 
          onChange={(e) => {
            const value =  e.target.value; // Always the same to get a value from an input
            this.setState({
              searchTerm: value
            });
            if (value) {
              this.getCocktails(value);
            } else {
              this.setState({
                searchTerm : []
              })
            }
          }}
        />
        <div className="Search__results">
          {
            this.state.searchResults.map((result) => {

              return (<div className="Search__result-item">
                <img className="Search__result-image" src={result.image} />
                <h2 className="Search__result-name">{result.name}</h2>
                <p className="Search__result-description">{result.description}</p>
              </div>)
            })
          }
        </div>
      </div>
    );
  }
}

export default Search;
