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
			songs: [],
			addSong: {}
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
	_updateList = e => {
		e.preventDefault();
		fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting")
			.then(results => {
				return results.json();
			})
			.then(data => {
				console.log("Updating data");
				console.log(this);
				this.setState({ songs: data });
			});
	};
	_addToList = e => {
		e.preventDefault();
		console.log(e.target);
		this.setState({
			addSong: {
				userName: e.target.value,
				songTitle: e.target.value,
				songArtist: e.target.value,
				songNotes: e.target.value
			}
		});
		let listItem = JSON.stringify(this.state.addSong);

		fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
			method: "POST",
			body: listItem,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				console.log(response, "yay");
			})
			.catch(err => {
				console.log(err, "boo!");
			});
		this.setState({
			addSong: {
				userName: "",
				songNotes: "",
				songArtist: "",
				songTitle: ""
			}
		});
	};
	render() {
		return (
			<div className="container-fluid">
				<NavBar />
				<div className="row justify-content-around">
					<PlayListForm add={this._addToList} />
					<PlayList update={this._updateList} songs={this.state.songs} />
				</div>
			</div>
		);
	}
}

export default App;
