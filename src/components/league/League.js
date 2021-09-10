import React, { Component } from 'react';
import '../../css/league/league.css';
class League extends Component {

    constructor(props) {
        super(props);
       
       
    }

   
    

    render() {
        console.log('2f) FIGLIO Render');
        return (
            <div className="league">
                <div className="row">
                    <div className="col">
                        <h2>{this.props.infoData.name}</h2>
                       
                    </div>
                    <div className="col">
                        <h2>{this.props.infoData.country}</h2>
                        
                    </div>
                    <div className="col">
                        <h2>{this.props.infoData.season}</h2>
                       
                    </div>
                    
                    
                </div>
                <div >
                    <h1>{this.props.infoData.round}</h1>
                    
                </div>
            </div>
        )
    }
}

export default League