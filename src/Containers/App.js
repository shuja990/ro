import React,{ Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../Components/CardList'
import Scroll from '../Components/Scroll'
import Searchbox from '../Components/Searchbox'
import Header from '../Components/Header'
import './App.css'
import {setSearchField,requestRobots} from '../actions'
const mapStateToProps = state => {
  return{
    searchField : state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    err: state.requestRobots.err
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange : (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())    
  }
}
class App extends Component {
  componentDidMount(){
    this.props.onRequestRobots();
    }
    
  render(){ 
    const {searchField, onSearchChange,robots,isPending} = this.props;
    const filteredRobots = robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return isPending ?
      <h1>Loading</h1> :
    (
      <div className='tc'>
        <Header/>
        <Searchbox searchChange={onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots}/>
        </Scroll>
      </div>
      );
    
    
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);