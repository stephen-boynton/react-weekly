import React from "react";
import "../style/PlayListItem.css";

export default function PlayListItem(props) {
	return (
		<div className="row">
			<section className="card col-12 item">
				<p>
					User: <span>{props.user}</span>
				</p>
				<p>
					Artist/Band: <span>{props.artist}</span>
				</p>
				<p>
					Song: <span>{props.song}</span>
				</p>
				<p>
					Notes: <span>{props.notes}</span>
				</p>
			</section>
		</div>
	);
}
