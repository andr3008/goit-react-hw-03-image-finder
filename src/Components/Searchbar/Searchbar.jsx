import { Component } from "react";
import toast, { Toaster } from "react-hot-toast";
export default class Searchbar extends Component {
	state = {
		imageName: "",
	};
	handleImageChange = (e) => {
		this.setState({ imageName: e.currentTarget.value.toLowerCase() });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.imageName.trim() === "") {
			return toast.error("Please enter");
		}
		this.props.onSubmit(this.state.imageName);
		this.setState({ imageName: "" });
	};
	render() {
		return (
			<header>
				<Toaster />
				<form onSubmit={this.handleSubmit}>
					<button type="submit">
						<span>Search</span>
					</button>

					<input
						type="text"
						name="imageName"
						value={this.state.imageName}
						onChange={this.handleImageChange}
						placeholder="Search images and photos"
					/>
				</form>
			</header>
		);
	}
}
