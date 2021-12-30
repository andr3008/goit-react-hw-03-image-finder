import PropTypes from "prop-types";
import errorImage from "./errorImage.jpg";

function ErrorView({ texterror }) {
	return (
		<div role="alert">
			<img src={errorImage} width="550" alt="sadcat" />
			<p text={texterror}>{texterror}</p>
		</div>
	);
}

ErrorView.propTypes = {
	texterror: PropTypes.string.isRequired,
};

export default ErrorView;
