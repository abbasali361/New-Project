import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const Bio = () =>(
<div className="Bio">
   <h3>Md. Abbas Ali</h3>
   <p>Junior Javascript Developer</p>
</div>
)

const Skills = () =>(
  <div className= 'Skills'>
          <h3>Skills: </h3>
          <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
)

const Links = () =>(
  <div className= 'Links'>
          <h3>Social Links: </h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Linkedin</a></li>
            <li><a href="#">Github</a></li>
          </ul>
        </div>
)
const MyProps = props =>{
  return <h1>My Name is {props.name}</h1>
}
class App extends Component {
  render() {
    return (
     <div className='app'>
       <div className='Container'>
       <Bio></Bio>
        <Skills></Skills>
        <Links></Links> 
       </div>
        
        <div style={{marginTop:'30px', marginBottom: '30px', color:'blue'}}>
        <h3>List of Programmers</h3>
        <MyProps name = 'Md. Abbas Ali'></MyProps>
        <MyProps name = 'Md. Nasir Ali'></MyProps>
        </div>
     </div>
    );
  }
}

export default App;
