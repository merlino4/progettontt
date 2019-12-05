import React from 'react';
import logo from './assets/img/logo.svg';
import './App.css';
import axios from 'axios';
import BreadCrumb from './components/Breadcrumb'
import CardContainer from './components/CardContainer'
import Button from './components/Button';



const WIZARD = {
  "steps": [
    {
      "question": "Che tipo di attività devi svolgere?",
      "category": "Attività",
      "answers": [
        {
          "id": 100,
          "title": "Tenere in ordine il mio giardino",
          "description": "Falciatura ordinaria del prato, rifinitura aiuole",
          "image": "attivita_1.jpg"
        },
        {
          "id": 101,
          "title": "Pulire e rinnovare il giardino",
          "description": "Presenza di arbusti, erbe alte e spesse, piante infestanti da rimuovere",
          "image": "attivita_2.jpg"
        }
      ]
    },
    {
      "question": "Sono presenti piante o ostacoli?",
      "category": "Ostacoli",
      "answers": [
        {
          "id": 102,
          "title": "Sono presenti aiuole e ostacoli di piccole dimensioni",
          "description": null,
          "image": "ostacoli_1.jpg"
        },
        {
          "id": 103,
          "title": "Sono presenti arbusti, alberi e ostacoli di grandi dimensioni",
          "description": null,
          "image": "ostacoli_2.jpg"
        },
        {
          "id": 104,
          "title": "No, non son presenti piante e ostacoli",
          "description": null,
          "image": "ostacoli_3.jpg"
        }
      ]
    },
    {
      "question": "Ci sono pendenze o affossamenti?",
      "category": "Pendenza",
      "answers": [
        {
          "id": 105,
          "title": "Sì, il mio terreno è pendente o presenta degli affossamenti",
          "description": null,
          "image": "pendenza_1.jpg"
        },
        {
          "id": 106,
          "title": "No, ho un terreno piano",
          "description": null,
          "image": "ostacoli_2.jpg"
        }
      ]
    },
    {
      "question": "Che dimensioni ha il tuo terreno?",
      "category": "Dimensioni",
      "answers": [
        {
          "id": 107,
          "title": "Fino a 100 m2",
          "description": null,
          "image": null
        },
        {
          "id": 108,
          "title": "Da 100 a 500 m2",
          "description": null,
          "image": null
        },
        {
          "id": 109,
          "title": "Da 500 a 1000 m2",
          "description": null,
          "image": null
        },
        {
          "id": 110,
          "title": "Da 1000 a 2000 m2",
          "description": null,
          "image": null
        }
      ]
    }
  ],
  "tree": {
    "children": [
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      8
                    ]
                  },
                  {
                    "results": [
                      8
                    ]
                  },
                  {
                    "results": [
                      9
                    ]
                  },
                  {
                    "results": [
                      10
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      1
                    ]
                  },
                  {
                    "results": [
                      2
                    ]
                  },
                  {
                    "results": [
                      2
                    ]
                  },
                  {
                    "results": [
                      3,
                      2
                    ]
                  }
                ]
              }
            ]
          },
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      6
                    ]
                  },
                  {
                    "results": [
                      6
                    ]
                  },
                  {
                    "results": [
                      7
                    ]
                  },
                  {
                    "results": [
                      7
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      4
                    ]
                  },
                  {
                    "results": [
                      4
                    ]
                  },
                  {
                    "results": [
                      5
                    ]
                  },
                  {
                    "results": [
                      3,
                      5
                    ]
                  }
                ]
              }
            ]
          },
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      6
                    ]
                  },
                  {
                    "results": [
                      6
                    ]
                  },
                  {
                    "results": [
                      7
                    ]
                  },
                  {
                    "results": [
                      7
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      4
                    ]
                  },
                  {
                    "results": [
                      4
                    ]
                  },
                  {
                    "results": [
                      5
                    ]
                  },
                  {
                    "results": [
                      3,
                      5
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "children": [
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      14
                    ]
                  },
                  {
                    "results": [
                      14
                    ]
                  },
                  {
                    "results": [
                      11
                    ]
                  },
                  {
                    "results": [
                      11
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      14
                    ]
                  },
                  {
                    "results": [
                      14
                    ]
                  },
                  {
                    "results": [
                      11
                    ]
                  },
                  {
                    "results": [
                      11
                    ]
                  }
                ]
              }
            ]
          },
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      15
                    ]
                  },
                  {
                    "results": [
                      15
                    ]
                  }
                ]
              }
            ]
          },
          {
            "children": [
              {
                "children": [
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  }
                ]
              },
              {
                "children": [
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      12,
                      14
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  },
                  {
                    "results": [
                      13
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "results": [
    {
      "id": 1,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1920675"
    },
    {
      "id": 2,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1920675"
    },
    {
      "id": 3,
      "title": "Trattorini tagliaerba",
      "description": "Hai un giardino molto grande e hai bisogno di un rasaerba adeguato per tagliare il prato? Scegli un trattorino tagliaerba in grado di coprire grandi spazi di prato e accorciare il tempo necessario a completare il taglio dell\"erba",
      "url": "https://www.leroymerlin.it/prodotti/trattorini-CAT598-c"
    },
    {
      "id": 4,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1306"
    },
    {
      "id": 5,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1306"
    },
    {
      "id": 6,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE66412%2CFRULE1920678"
    },
    {
      "id": 7,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1269%2CFRULE1920677"
    },
    {
      "id": 8,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920152%2CFRULE1920677"
    },
    {
      "id": 9,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920153%2CFRULE1920677"
    },
    {
      "id": 10,
      "title": "Tieni in ordine il prato con il tagliaerba",
      "description": "Il tagliaerba è il tuo miglior alleato per prenderti cura e tenere sempre in ordine il tuo spazio verde. Per svolgere un buon lavoro in breve tempo e con poco sforzo, scegli la tipologia giusta considerando le dimensioni del tuo giardino, il tipo di terreno e l’alimentazione più adatta.",
      "url": "https://www.leroymerlin.it/prodotti/tagliaerba-CAT749-c?ruleFilter=FRULE1920154%2CFRULE1920677"
    },
    {
      "id": 11,
      "title": "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      "description": "Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l\"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.",
      "url": "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?ruleFilter=FRULE1923446"
    },
    {
      "id": 12,
      "title": "Per le rifiniture, il tagliabordi",
      "description": "Ora che hai tagliato il tuo prato con un tagliaerba, ti sarai accorto che ci sono dei punti in cui la macchina non riesce a ottenere un risultato perfetto. Infatti, per i lavori di finitura, come i cordoli e le aiuole, ti sarà di grande aiuto il tagliabordi. Il tagliabordi ha un motore nella parte inferiore del manico che aziona una bobina di filo di nylon. Questo taglia l’erba ruotando rapidamente. Anche in questo caso possono esserci macchine elettriche a filo, a batteria oppure a scoppio con motore a due tempi.",
      "url": "https://www.leroymerlin.it/prodotti/tagliabordi-CAT600-c?sellingAidsFilter=SRULE4205"
    },
    {
      "id": 13,
      "title": "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      "description": "Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l\"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.",
      "url": "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3624&ruleFilter=FRULE1923445"
    },
    {
      "id": 14,
      "title": "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      "description": "Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l\"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.",
      "url": "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3625&ruleFilter=FRULE1923445"
    },
    {
      "id": 15,
      "title": "Il decespugliatore: per cespugli, rovi, punti difficili da raggiungere",
      "description": "Il decespugliatore è una macchina che si presta per tagliare cespugli, falciare i rovi e tagliare le sterpaglie e l\"erba alta in punti difficili da raggiungere, ad esempio lungo i fossi o a ridosso di muri, cordoli, tronchi di piante. Ci sono due sistemi di taglio: con due fili di nylon o con disco di taglio. Alcuni modelli permettono di scegliere il sistema di taglio più adatto di volta in volta in base al lavoro da svolgere. Il decespugliatore può essere elettrico, a batteria e a scoppio, a benzina o a miscela. Il suo motore si trova sul retro di un manico su cui sono poste due maniglie o un doppio manubrio.",
      "url": "https://www.leroymerlin.it/prodotti/decespugliatori-CAT599-c?sellingAidsFilter=SRULE3623&ruleFilter=FRULE1923445"
    }
  ]
}

const URLS = {
  STORES: 'https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/stores.json',
  WIZARD: 'https://mctsuite.it.nttdata-emea.com/preview/tag_ntt_project_work/wizard_config.json'
}


class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      stores:[],
      steps: [],
      selectedAnswers: [],
      activeIndex: 1
    }
    this.submitChoice = this.submitChoice.bind(this) 
  }
    submitChoice() {   
      this.setState({activeIndex:this.state.activeIndex+1});
    }

  componentDidMount() {
    axios
    .get(URLS.STORES)
    .then(r => r.data)
    .then(stores => {
      this.setState({
        stores
      })
      console.log(this.state.activeIndex)
    })

    axios
    .get(URLS.WIZARD)
    .then(wizard => {
      this.setState({
        steps: WIZARD.steps
      })
    })
  }

  render() {



    const {
      activeIndex,
      steps,
      stores
    } = this.state

    const currentStep = steps[activeIndex]
    const cardContainer = currentStep ? <CardContainer submitChoice = {this.submitChoice} answers={currentStep.answers}></CardContainer> : null;
    const options = stores
      .map(store => (<option key={store.storeCode} value={store.storeCode}>{store.storeName}</option>));

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-container">

          {/* CHIP CONTAINER */}
          <BreadCrumb activeIndex={activeIndex} steps={steps}></BreadCrumb>

          <br />

          {/* CARDS CONTAINER  */}
          {cardContainer}

          <br />

          {/* BUTTON  */}


          <select>
            {options}
          </select>

        </div>
      </div>
    );
  }
}

export default App;



