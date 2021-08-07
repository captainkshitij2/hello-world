import React from 'react';
import Header from './Header';
import Tip from './Tip';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            language:[]
        }
    }
    handleLanguage = (langValue) => {
        this.setState({ language: langValue});
    }
    render(){
        return (
            <>
                <Header/>
                <Tip onSelectLanguage={this.handleLanguage}
                pass={this.state.language}/>
            </>
        )
    }
}

export default App
