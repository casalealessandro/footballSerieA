import React, { Component } from 'react'

class Cerca extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cerca: ''
        }
    }

    onInputChange = e => {
        this.setState({ cerca: e.target.value })
        console.log(this.state.cerca)
    }

    onSubmit = e => {
        e.preventDefault();
       this.props.onInputSearch(this.state.cerca);
       this.setState({ cerca: '' })
    }

    onFocus = (e) => {
        e.target.blur()
    }

    render() {
        return (
           <React.Fragment>
                <div className="row">

                <form className="d-flex" onSubmit={this.onSubmit}>
                    <input className="form-control me-2" 
                    type="search" 
                    
                    placeholder="Cerca" 
                    className="form-control"
                    value={this.state.cerca}
                    onChange={this.onInputChange}
                    
                    placeholder="Cerca..."
                             />
                    <button type="submit" className='btn btn-warning cercaButton' onFocus={this.onFocus}><i className="fas fa-search" ></i></button> 
                </form>
                </div>

           </React.Fragment>
            
        )
    }
}

export default Cerca
