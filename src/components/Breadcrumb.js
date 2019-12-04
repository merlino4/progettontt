import React from 'react';
import '../style/chip.css';
import axios from 'axios';
import Chip from './Chip'


class BreadCrumb extends React.Component {
    render () {
      const {
        steps,
        activeIndex
      } = this.props;
  
      const chips = steps
        .map((step,index) => {
          return <Chip key={index} title={step.category} active={activeIndex >= index} />
        })
  
      return (
        <div className="chip-container">
            {chips}
        </div>
      )
    }
  }

  export default BreadCrumb;