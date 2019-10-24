import React, { Component } from 'react'
import './css/glimpses.css'

export default class Glimpses extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	render () {
		return (
			<div>
				<div className="glimpses-parent">
					<h1 className="glimpses-heading">GLIMPSES</h1>
					<div className="glimpses-image"></div>
				</div>
				<div className="masonry" >
					<div alt="random list" className="masonry-brick brick1"></div>
					<div alt="random list" className="masonry-brick brick2"></div>
					<div alt="random list" className="masonry-brick brick3"></div>
					<div alt="random list" className="masonry-brick brick4"></div>
					<div alt="random list" className="masonry-brick brick5"></div>
					<div alt="random list" className="masonry-brick brick6"></div>
					<div alt="random list" className="masonry-brick brick7"></div>
				</div>
			</div>
		)
	}
}