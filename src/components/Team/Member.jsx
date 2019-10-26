import React, { Component} from 'react'
import '../../index.css'
import './src/css/member.css'


export default class Member extends Component {
	constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
    	return (
    		<div>
    			<div className="member-parent">
    				<div className="member-image-container">
    					<div className="red-border"><div className="member-image" style={{
                          backgroundImage: `url(${this.props.image})`}}></div></div>
    				</div>
    				<div className="member-info">
    					<h3 className="member-info-name">{this.props.name}</h3>
    					<p className="member-info-position">{this.props.position}</p>
    					<p className="member-info-quote"><span>&#8220;</span>{this.props.quote}<span>&#8221;</span></p>   
    				</div>
    			</div>
    		</div>
    	) 
    }
}