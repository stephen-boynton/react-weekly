import React, { Component } from "react";
import logo from "../logo.svg";
import "../style/App.css";
import NavBar from "./NavBar";
import PlayListForm from "./PlayListForm";
import PlayList from "./PlayList";

class App extends Component {
	constructor() {
		super();
		this.state = {
			songs: []
		};
	}
	componentDidMount() {
		fetch("http://tiny-tiny.herokuapp.com/collections/playlisting")
			.then(results => {
				return results.json();
			})
			.then(data => {
				this.setState({ songs: data });
				console.log("state", this.state.songs);
			});
	}
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row justify-content-around">
					<PlayListForm />
					<PlayList songs={this.state.songs} />
				</div>
			</div>
		);
	}
}

export default App;
