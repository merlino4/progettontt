import React from 'react';
import '../App.css';
import axios from 'axios';
import Card from './Card';
import Button from './Button';
import { timingSafeEqual } from 'crypto';



class CardContainer extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selectedCard : ""
            //cards:[]
        }

   // var submitChoice = this.submitChoice.bind(this);
      //    this.resetSelectedCard = this.resetSelectedCard.bind(this); 
    }

    // resetSelectedCard(){
    //   this.setState({
    //     selectedCard : ""
    //   })
    // }

    // handleClick = (i)=>{

    //   this.setState({
    //         selectedCard:i,
    //     })
    //     console.log(i)

    // }

 //   submitChoice = () => {}

    render() {
      const {
        answers
      } = this.props
  
     


      const cards = answers.map((answer,index) => {
        //console.log(answer)
        return <Card 
                  key={index} 
                  answer={answer} 
                  onClick={() => this.props.selectCard(index)}
                   />
      })
  
      return (
        <div className="step-cards-container">

                {cards}



        </div>
      )
    }
  }
  export default CardContainer;