import { Component } from "react";
import ImageData from "./ImageData";

import Loader from "../Loader/Loader";
const BASE_URL = "https://pixabay.com/api";
const API_URL = "24155040-09394a9154ec72d89d619259b";

export default class ImageGalleryItem extends Component {
	state = {
		image: null,

		error: null,
		status: "idle",
	};
	componentDidUpdate(prevProps, prevState) {
		const prevName = prevProps.imageName;
		const nextName = this.props.imageName;
		if (prevName !== nextName) {
			this.setState({ status: "pending" });
			fetch(
				`${BASE_URL}/?q=${nextName}&page=1&key=${API_URL}&image_type=photo&orientation=horizontal&per_page=12`
			)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return Promise.reject(new Error(`Not found ${nextName}`));
				})
				.then((image) => this.setState({ image, status: "resolved" }))
				.catch((error) => this.setState({ error, status: "rejected" }));
		}
	}
	render() {
		const { image, error, status } = this.state;
		if (status === "idle") {
			return <div>Enter text</div>;
		}
		if (status === "pending") {
			return <Loader />;
		}
		if (status === "rejected") {
			return <h3>{error.message}</h3>;
		}
		if (status === "resolved") {
			return <ImageData image={image} />;
		}
	}
}

// 	fetch(
// 		`${BASE_URL}/?q=cat&page=1&key=${API_URL}&image_type=photo&orientation=horizontal&per_page=12`
