import React from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import '../style/store.css'
import Header from '../components/Header'
import Bg from '../assets/img/attivita_2.jpg'

const URLS = {
    STORES:
      "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json",
    WIZARD:
      "https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json"
  };

class Stores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          stores: [],
          redirect: false,
          selectedStore:undefined
        };
    }

componentDidMount(){
    axios
      .get(URLS.STORES)
      .then(r => r.data)
      .then(stores => {
        this.setState({
          stores
        });
        console.log(this.state.stores)
      });
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }
    renderRedirect = () => {
      if (this.state.redirect) {
        return <Redirect to='/wizard' />
      }
    }
    changeStore = (e) =>{
      this.setState({
        selectedStore: e.target.value
      })
    }
    render(){
        const options = this.state.stores.map(store => (
            <option key={store.storeCode} value={store.storeCode}>
              {store.storeName}
            </option>
          ));

          
        return(
          <div className="stores">
                  <img src={Bg} className="bg" alt="bg" id="bgPhoto"/>
                  <Header 
                  className ="backgroundLogo"/>
                  <div className="content">
                  

                   <select value={this.state.selectedStore} onChange={this.changeStore}> 
                   <option value=""> Select a store </option>
                     {options} 
                     </select>
                  
                   {this.renderRedirect()}
                  <div className="contentButton">
                   <button 
                   onClick={this.setRedirect} 
                   className="bottone" 
                   disabled={!this.state.selectedStore}>
                    <span>Continua</span></button>
                    </div>
                   </div>
            </div>
            
        );
    }
}

export default Stores;
