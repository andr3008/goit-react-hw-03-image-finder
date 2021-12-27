import "./App.css";
import { Component } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";

export default class App extends Component {
	state = {
		imageName: "",
	};
	handleFormSubmit = (imageName) => {
		this.setState({ imageName });
	};

	render() {
		return (
			<div className="App">
				<Searchbar onSubmit={this.handleFormSubmit} />
				<ImageGalleryItem imageName={this.state.imageName} />
			</div>
		);
	}
}
