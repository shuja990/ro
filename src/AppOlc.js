import React,{ Component } from 'react'
import CardList from '../Components/CardList'
import Scroll from '../Components/Scroll'
import Searchbox from '../Components/Searchbox'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
class App extends Component {
  constructor(){
     super();
     this.state={
        robots: [],
        searchfield : ''
     }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=>{
     this.setState({robots:users})
    })
    
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render(){ 
    const{robots,searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    });
    return !robots.length ?
      return <h1>Loading</h1>;
    {
      return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
      );
    }
    
  }
}
export default App;