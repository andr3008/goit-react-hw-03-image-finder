export default function ImageData({ image: { hits } }) {
	return (
		<div>
			<ul>
				{hits.map((image) => (
					<li key={image.id}>
						<img
							src={image.webformatURL}
							width="240"
							height="100"
							data-source={hits.largeImageURL}
							alt={image.tags}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
