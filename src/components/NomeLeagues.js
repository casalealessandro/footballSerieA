import React, { Component } from 'react'

class NomeLeagues extends Component {
    addPreferiti=()=>{

        this.props.onAddPreferiti(this.props.ids);
    }

    render() {
        return (
           
                
               <li onClick={this.addPreferiti}><i className="fas fa-plus-circle"></i>{this.props.dati.league.name} - {this.props.dati.country.name}  </li>
         
        )
    }
}

export default NomeLeagues
/**
               id	71
name	"Serie A"
type	"League"
logo	"https://media.api-sports.io/football/leagues/71.png"
**/