import PropTypes from "prop-types";
import { Li, Img } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
	webformatURL,
	largeImageURL,
	tags,
	onOpenModal,
}) {
	return (
		<Li>
			<Img
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
	onOpenModal: PropTypes.func.isRequired,
};
