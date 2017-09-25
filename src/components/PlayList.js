import React, { Component } from "react";
import PlayListItem from "./PlayListItem";

export default class PlayList extends Component {
	render() {
		return (
			<div className="playlist col-5">
				<button
					className="btn btn-success"
					onClick={this.props.update}
					name="update"
					type="button"
				>
					Update
				</button>
				{this.props.songs.map((song, ind) => {
					console.log(song);
					return (
						<PlayListItem
							user={song.songTitle}
							song={song.songTitle}
							artist={song.songArtist}
							notes={song.songNote}
							key={song._id}
						/>
					);
				})}
			</div>
		);
	}
}
