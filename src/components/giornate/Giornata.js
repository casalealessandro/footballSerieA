import React, { Component } from 'react'
import '../../css/giornata/giornata.css';
class Giornata extends Component {
    
    
    
    render() {
        return (
 
            <tr>
                <td className="team-name">
                    <span>{this.props.dati.teams.home.name}</span>
                </td>
                <td className="team-vs">vs</td>
                <td className="team-name">
                    <span>{this.props.dati.teams.away.name}</span>
                </td>
            </tr>

           
      
            
        )
    }
}

export default Giornata
