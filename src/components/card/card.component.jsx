import React, { Component } from 'react';
import './card.styles.css'

class Card extends Component {
    
    constructor(props){
        super(props)
        this.state={
            name: props.monster.name,
            url: props.monster.url,
            image: null
        }
    }
    componentDidMount(){
        fetch(this.props.monster.url)
          .then(response => response.json())
          .then(json =>{ 
              this.setState({
                image: json.sprites.front_default
             });
          });
        
        console.log(this.state.image)
      }
    render() {
        var {name,url,image} = this.state
        return (
            <div className='card-container'>
            <img alt='puchimon' src={image}></img>
            <h2>{name}</h2>
            <p>{url}</p>
        </div>
        );
    }
}

export default Card