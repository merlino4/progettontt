import React from 'react';
import '../App.css';
import axios from 'axios';
import Card from './Card'
import Button from './Button';

class CardContainer extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selectedCard : ""
            //cards:[]
        }
    }
    handleClick=(i)=>{
        // const selectedCardActive = this.state.selectedCard
        this.setState({
            selectedCard:i,
        })
        console.log(i)

    }

   

    render() {
      const {
        answers
      } = this.props
  
      
      const cards = answers.map((answer,index) => {
        //console.log(answer)
        return <Card 
        key={answer.id} 
        answer={answer} 
        onClick={() => this.handleClick(answer.id)}/>
      })
  
      return (
        <div className="step-cards-container">
          {cards}
          <Button
          isActive={this.state.selectedCard}
          />
        </div>
      )
    }
  }
  export default CardContainer;