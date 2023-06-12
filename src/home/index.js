import Sidebar from "../components/sidebar/sidebar";
import Profile from "../components/profile/profile";
import Timeline from "./timeline";

const Home = () => {
	return (
		<>
			<main>
				<div className="leftBar">
					<Sidebar />
				</div>
				<Timeline />
				<div className="rightBar">
					<Profile />
				</div>
			</main>
		</>
	);
};

export default Home;
