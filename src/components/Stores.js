import React from "react";
//import logo from "./assets/img/logo.svg";
//import "./App.css";
import axios from "axios";
//import wizard from './lib/wizard'
import {NavLink} from 'react-router-dom'

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

    render(){
        const options = this.state.stores.map(store => (
            <option key={store.storeCode} value={store.storeCode}>
              {store.storeName}
            </option>
          ));

        return(
            <div>
                   <select>{options}</select>
                   <button className="bottone">
                    <NavLink to="/wizard">Continua</NavLink>
                   </button>
            </div>
        );
    }
}

export default Stores;
