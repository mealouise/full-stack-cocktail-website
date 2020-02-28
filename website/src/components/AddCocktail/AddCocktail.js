import React from 'react';
import './style.css';
import axios from 'axios';

class AddCocktail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cocktailName: '',
            cocktailDescription: '',
            cocktailImage:''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'image' ? target.image : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

render() {
    return (
        <form className="addCocktail">
            <label className="addCocktail__name">
                Cocktail Name:
                <input
                name="cocktailName"
                type="text"
                value={this.state.cocktailName}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Cocktail Description:
                <input
                name="cocktailDescription"
                type="text"
                value={this.state.cocktailDescription}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Cocktail Image:
                <input
                name="cocktailName"
                type="image"
                alt=""
                value={this.state.cocktailImage}
                onChange={this.handleInputChange} />
            </label>

        </form>
    );
}
}
export default AddCocktail;