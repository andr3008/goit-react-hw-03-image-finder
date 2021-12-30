import PropTypes from "prop-types";
import { Form, Input } from "./Searchbar.styled";
function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
	return (
		<Form onSubmit={onHandleSubmit}>
			<Input
				type="text"
				value={value}
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
				onChange={onSearchQueryChange}
			/>
		</Form>
	);
}

Searchbar.propTypes = {
	onHandleSubmit: PropTypes.func.isRequired,
	onSearchQueryChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Searchbar;
