import React, { Component } from 'react'

class Search extends Component {

    constructor(props){

        super(props);

        this.state ={

            cerca: this.props.nome,
            note:'',
            azioni:'',
            check1:false,
            check2:false
        }
    }
    onChange=(e)=>{

        console.log(e.target.value)
        this.setState({cerca:e.target.value})
    }

    onChangeTextArea=(e)=>{

        this.setState({note:e.target.value})
    }

    onChangeSelect=(e)=>{
        console.log(e.target.value)
        this.setState({azioni:e.target.value})
    }

    onChangeCheck=(e)=>{
        console.log(e.target.name + '--' +e.target.checked)
        this.setState({[e.target.name]:e.target.checked})
    }

    invioDati=(e)=>{
       e.preventDefault();
       alert("tuto inviato" + this.state.azioni)
    }

    render() {
        return (
            <div>
                <form className='form-inline' onSubmit={this.invioDati}>

                    <div className="form-group mx-sm-3 mb-2">
                    
                        <input type="text" className="form-control" name="cerca" value={this.state.cerca} onChange={this.onChange}/>
                   
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        
                        <select name="azioni" value={this.state.azioni} className="form-select  mb-2" onChange={this.onChangeSelect}>
                       
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input name="check1" id="check1" className="form-check-input" type="checkbox"  checked={this.state.check1}  onChange={this.onChangeCheck}></input>
                            <label className="form-check-label" >
                            Default checkbox 1
                        </label>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <input name="check2" id="check2" className="form-check-input" type="checkbox" checked={this.state.check2}  onChange={this.onChangeCheck}></input>
                            <label className="form-check-label" >
                            Default checkbox 2
                        </label>
                    </div>


                    <div className="form-group mx-sm-3 mb-2">
                        <textarea className="form-control" name="note" row="10" col="30" value= {this.state.note} onChange={this.onChangeTextArea}/>
                    </div>


                    <button type="submit" className="btn btn-warning mb-2">Invia</button>
                </form>
            </div>
        )
    }
}

export default Search
