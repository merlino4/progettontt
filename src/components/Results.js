import React from 'react';
import axios from 'axios';
import wizard from '../lib/wizard'
class Results extends React.Component {
render(){

    const {
        results
    } = this.props

return(
    <div>
        {results}
    </div>
);
}

// //selection = [0,4,5,8]

// const resultIds = wizard.navigate([1, 1, 0, 0], tree, 4);

// const selectedResults = resultIds.map(resultId => {
//     return results.find(r => r.id === resultId)
// })

// console.log(JSON.stringify(selectedResults, null, 2))

}
export default Results;