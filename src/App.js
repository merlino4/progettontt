import React from 'react';
import logo from './assets/img/logo.svg';
import img_attivita_1 from './assets/img/attivita_1.jpg';
import './App.css';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">

          {/* CHIP CONTAINER */}
          <div className="chip-container">
            <div className="chip">
              <span>Chip 1</span>
            </div>
            <div className="chip active">
              <span>Chip 2</span>
            </div>
          </div>

          <br />

          {/* CARDS CONTAIONER  */}
          <div className="step-cards-container">
            <div className="step-card">
              <img src={img_attivita_1} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>

            <div className="step-card">
              <img src={img_attivita_1} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>

            <div className="step-card">
              <img src={img_attivita_1} alt="img_alt" />
              <div className="title">Tenere in ordine il mio giardino</div>
              <div className="description">Falciatura ordinaria del prato, rifinitura aiuole</div>
            </div>
          </div>

          <br />

          {/* BUTTON */}
          <div className="button disabled">
            <span>CONTINUA</span>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
