import { useState } from "react";

export const TaskItem = (props) => {
	return (
		<>
			<div className="task">
				<div className="taskTitle">
					<h4>{props.title}</h4>
				</div>
				<div className="taskDetails">
					<p>{props.description}</p>
				</div>
				<div className="taskMembers">
					<div className="memberAvatar">
						<img src="https://i.pravatar.cc/50?img=11" alt="" />
					</div>
					<div className="memberAvatar">
						<img src="https://i.pravatar.cc/50?img=22" alt="" />
					</div>
					<div className="memberAvatar">
						<img src="https://i.pravatar.cc/50?img=33" alt="" />
					</div>
					<div className="memberAvatar">
						<img src="https://i.pravatar.cc/50?img=44" alt="" />
					</div>
				</div>
				<div className="taskProgress">
					<div className="taskProgressText">
						<h4>Progress</h4>
						<p>{props.progress}%</p>
					</div>
					<div className="taskProgressRange">
						<div
							className="taskProgressBar"
							style={{ width: `${props.progress}%` }}></div>
					</div>
				</div>
			</div>
		</>
	);
};

const Tasks = () => {
	const [tasks] = useState([
		{
			title: "Medical LP",
			description: "Make a landing page and mobile app",
			progress: "15",
		},
		{
			title: "Finance App",
			description: "Branding and mobile app development",
			progress: "60",
		},
		{
			title: "Finance App",
			description: "Branding and mobile app development",
			progress: "33",
		},
		{
			title: "Finance App",
			description: "Branding and mobile app development",
			progress: "90",
		},
	]);
	return (
		<>
			<div id="tasksList">
				<h2>My Tasks</h2>

				<div id="taskCategories">
					<div>
						<a href="/" className="active">
							Recently
						</a>
					</div>
					<div>
						<a href="/">Today</a>
					</div>
					<div>
						<a href="/">Upcoming</a>
					</div>
					<div>
						<a href="/">Later</a>
					</div>
				</div>

				<div id="tasks">
					{tasks &&
						tasks.map((task, index) => (
							<TaskItem key={index} {...task} />
						))}
				</div>
			</div>
		</>
	);
};

export default Tasks;
