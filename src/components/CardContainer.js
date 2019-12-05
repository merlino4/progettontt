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
          this.resetSelectedCard = this.resetSelectedCard.bind(this); 
    }

    resetSelectedCard(){
      this.setState({
        selectedCard : ""
      })
    }

    handleClick = (i)=>{

      this.setState({
            selectedCard:i,
        })
        console.log(i)

    }

 //   submitChoice = () => {}

    render() {
      const {
        answers
      } = this.props
  
     


      const cards = answers.map((answer,index) => {
        //console.log(answer)
        return <Card 
                  key={answer.id} 
                  answer={answer} 
                  onClick={() => this.handleClick(answer.id)}
                   />
      })
  
      return (
        <div className="step-cards-container">

                {cards}

                <Button onClick = {this.props.submitChoice}  
                        isActive = {this.state.selectedCard !==""} 
                        onClickReset ={() => this.resetSelectedCard()}
                         // isActive={this.state.selectedCard}
                       // onClick={this.props.submitChoice()}
        
                  />

        </div>
      )
    }
  }
  export default CardContainer;