import React from 'react';
import '../style/button.css';
import axios from 'axios';
import { is } from '@babel/types';
import { isAbsolute } from 'path';


class Button extends React.Component {

    render() {
        const activeButton = this.props.isActive ? 'button' : 'button disabled';

        return(

            <button   

                onClick = {() => {this.props.onClick();this.props.onClickReset()}}
                className={activeButton} >
                
                Continua
          
            </button>
        );
    }
}

  export default Button;






