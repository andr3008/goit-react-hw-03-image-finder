import PropTypes from "prop-types";
import { Li, Img } from "./ImageGalleryItem.styled";
function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
	return (
		<Li>
			<Img
				width="200"
				src={webformatURL}
				alt={tags}
				data-source={largeImageURL}
				onClick={onOpenModal}
			/>
		</Li>
	);
}

ImageGalleryItem.propTypes = {
	largeImageURL: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
