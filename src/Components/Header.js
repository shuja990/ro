import React,{ Component } from 'react';
import CounterButton from './CounterButton'
class Header extends Component{
	shouldComponentUpdate(nextProps,nextState){
		return false;
	}
	render(){
		return (
			<div>
			<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="shuja-ali-075408ab"><a class="LI-simple-link" href='https://pk.linkedin.com/in/shuja-ali-075408ab?trk=profile-badge'>Shuja Ali</a></div>
				<h1 className="f1">RoboFriends</h1>
				<CounterButton color={'red'}/>
			</div>
		);
	}
}
export default Header;