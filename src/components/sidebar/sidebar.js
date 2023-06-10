import logo from "../../assets/images/logo.svg";
import Nav from "./nav";

const Sidebar = () => {
	return (
		<>
			<div id="sidebar" className="Sidebar">
				<div id="logo">
					<img src={logo} alt="Task Planner Logo" />
				</div>
				<Nav />
			</div>
		</>
	);
};

export default Sidebar;
