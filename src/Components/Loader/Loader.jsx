import GridLoader from "react-spinners/GridLoader";
import { Div } from "./Loader.styled";

export default function Loader() {
	return (
		<Div>
			<GridLoader size={25} color={"#3f51b5"} />
		</Div>
	);
}
