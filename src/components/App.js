import React, { Component } from 'react'
import logo from '../logo.svg';
import '../css/App.css';
import League from './league/League';
import Cerca from './Cerca';
import NomeLeagues from './NomeLeagues';
import Giornata from './giornate/Giornata';

export class App extends Component {
 
  constructor(props) {
    super(props)
    this.state = { 
       
        listaGiornate: [],
        listaPreferiti:[],
        giornataInfo:[],
        inCaricamento:false,
        msg:null,
        msgAvviso:'',
        showAvviso:false
      }
      
    
      console.log(`1g) il costruttore crea la prima istanza Genitore`)
  }

  // -------MOUNTING CREAZIONE ----------
  componentDidMount() {
      const string = 'fixtures?league=135&season=2021&next=10';
      this.getElementi(string);
      
  }

  // --------UPDATE AGGIORNAMENTO--------

  // static getDerivedStaeFromProps(np,ns) {
  //   return null
  // }

  // componentDidUpdate() {
  //   console.log(`4g) DidUpdate padre ${this.state.nome}`)
  // }
  aggiornoStock = (e) => {
    /*e.preventDefault()
    const stock1 = [

      {
        nome: 'AMZ',
        valore: 250
      },
      {
        nome: 'GOOG',
        valore: 350
      },
      {
        nome: 'MICROSOFT',
        valore: 750
      },
      {
        nome: 'APPL',
        valore: 1299
      }
    ]
   this.setState({ listaStock:stock1 })
    //this.setState({ nome: 'Amazon' })*/
  }

  cercaElemento = str =>{
    this.getElementi(str)
    
  }

  getElementi = str =>{
    const url = `https://api-football-v1.p.rapidapi.com/v3/${str}`;

    this.setState({ inCaricamento: true})
    fetch(url,{
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "8f1bba4ae5msh0d4a72cc01b8247p171e5djsn63792cff8700"
      }
    })
    .then((response) => response.json())
    .then((responseJson) =>{
      console.log()
      const rows = [];
      const giornata = [];
      if (responseJson.response.length < 1) {
        this.setState({ showAvviso: true, msgAvviso: 'Spiacente non ho trovato Legues, Riprova!',listaelementi:[] })
      } else {
        this.setState({ showAvviso: false, msgAvviso: '' })
      }
     
      responseJson.response.map((el, index) => {
            
          return (
            rows.push(
              <Giornata key={index} dati={el} ids={index} />
            )
          )

         
      }) 
      giornata.push(responseJson.response[0].league);
      console.log(giornata)
      this.setState(
        { 
          
          listaGiornate: rows, 
          inCaricamento: false,
          giornataInfo: giornata[0]
          
      
        }
      )
    })
    .catch((error)=>{
      this.setState({inCaricamento: false,showError:true,msg:error.message})
      console.log('Fetch failed', error)
    })
  }
  addPreferiti= ids => {
     alert(`Hai cliccato sull'elemnto ${ids}`)
    this.setState({ 
      listaPreferiti:[...this.state.listaPreferiti, this.state.listaLeagues[ids]]
    
    })
  }

  render() {
    console.log(`2g) Genitore Render`)

   // console.log(this.state.primaGiornataInfo)

    /*
      "id":135
      "name":"Serie A"
      "country":"Italy"
      "logo":"https://media.api-sports.io/football/leagues/135.png"
      "flag":"https://media.api-sports.io/flags/it.svg"
      "season":2021
      "round":"Regular Season - 1"
    
    */

    return (
      <div className="App">
        
          <Cerca onInputSearch={this.cercaElemento}/>
          
          <div className="container">
            <div className="row">
                <section className="lista-nomi">
                    {this.state.inCaricamento &&<p className='text-center'>Caricamento in corso ...</p>}
                    {this.state.showError && <p className='text-center'>{this.state.msg}</p>}
                    {this.state.showAvviso && <p className="text-center">{this.state.msgAvviso}</p>}
                    <League  infoData={this.state.giornataInfo} />
                    <table className="table-tesult">
                      <tbody>
                        
                       {this.state.listaGiornate}
                       </tbody>
                    </table>
                </section>

              
     
            </div>
          

            
            <div className="row">
                <section className="lista-preferiti">
                {this.state.listaPreferiti.map(el => <League key={el.season} dati = {el}/>)}
                  
                </section>
              
            </div>
          </div>
        
      </div>

    )
  }
}

export default App