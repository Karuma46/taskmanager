import Search from "./search";
import Tasks from "./tasks";

const Timeline = () => {
	return (
		<>
			<div id="timeline">
				
				<div id="welcomeSection">
					<h3>Hello Jessika!</h3>
					<h2>You've got 8 tasks today.</h2>
				</div>

				<Search />

				<Tasks />
			</div>
		</>
	);
};

export default Timeline;
