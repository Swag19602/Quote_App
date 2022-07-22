import React from 'react'
import './App.css'
import axios from 'axios'
class App extends React.Component{
    state={
        advice:''
    };
    //life cycle method
    componentDidMount(){
        //get request
        this.fetchAdvice();
    }
    fetchAdvice=()=>{
        axios.get('https://api.adviceslip.com/advice').then((res)=>{
            const {advice}=res.data.slip;
            this.setState({advice})
            console.log(advice)
        }).catch((error)=>{
                console.log(error)
        })

    }
    render(){
        return (
            <div className="app">
                    <div className="card">
                        <h1 className="heading">{this.state.advice}</h1>
                    <button onClick={this.fetchAdvice}className='button'>
                        <span>Give ME Advice</span>
                    </button>
                    </div>
            </div>
        )
    }
}
export default App;