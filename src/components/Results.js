import React from 'react';
import axios from 'axios';
import img from '../../src/assets/img/attivita_1.jpg'

class Results extends React.Component {
    render() {

        const {
            treeResult,
            results
        } = this.props



        // const selectedResults = treeResult.map(resultId => {
        //     if (!treeResult) {
        //         return false;
        //     }
        //     return results.find(r => r.id === resultId)
        // }
        // )

        const selectedResultsFilter = results.filter(r => {
            if (!treeResult) {
                return false;
            }
            return treeResult.includes(r.id)
        })
        const renderMap = selectedResultsFilter.map(res => (
            <div className="results" key={res.id}>
                <img  src={img} alt="immagine"></img>
                <h1>{res.title}</h1>
                <h1>{res.description}</h1>
                <a href={res.url} target="_blank" rel="noopener noreferrer">vai allo store</a>
            </div>

        )


        )
        console.log(treeResult);
        return (
            <div>
                {renderMap}
            </div>
        );
    }
}
// //selection = [0,4,5,8]

// const resultIds = wizard.navigate([0, 0, 0, 0], tree, 4);




// console.log(JSON.stringify(selectedResults, null, 2))


export default Results;