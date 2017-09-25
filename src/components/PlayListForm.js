import React, { Component } from "react";

export default class PlayListForm extends Component {
	render() {
		return (
			<div className="playlist-form col-md-3 col-sm-12">
				<form>
					<div className="form-group">
						<label htmlFor="name">Username</label>
						<input
							className="form-control"
							name="name"
							placeholder="Name or Username..."
						/>
					</div>
					<div className="form-group">
						<label htmlFor="artist">Artist/Band</label>
						<input
							className="form-control"
							name="artist"
							placeholder="Artist or Band Name..."
						/>
					</div>
					<div className="form-group">
						<label htmlFor="song">Song</label>
						<input
							className="form-control"
							name="song"
							placeholder="Song Title..."
						/>
					</div>
					<div className="form-group">
						<label htmlFor="nots">Notes</label>
						<textarea
							className="form-control"
							name="notes"
							placeholder="Notes..."
						/>
					</div>
					<button className="btn btn-primary" type="submit" name="submit">
						Submit
					</button>
				</form>
			</div>
		);
	}
}
