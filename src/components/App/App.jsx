import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';


const name = require('@rstacruz/startup-name-generator');
/* Class Component */
class App extends React.Component{

    state = {
        headerText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    }

    handleInputChange = (inputText) => {
        //console.log('Input text - ',inputText);
        this.setState({headerExpanded: !inputText,
        suggestedNames: inputText ? name(inputText) : [],
    });
    };

    render(){
        return(
            <div>
                <Header 
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
  }
  
/*
Functional Component
function App(){
    return <h1> This is my functional component!</h1>
}
*/

export default App