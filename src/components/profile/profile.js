import { useState } from "react";
import { TaskItem } from "../../home/timeline/tasks";

const Profile = () => {
	const [tasks] = useState([
		{
			title: "Medical LP",
			description: "Make a landing page and mobile app",
			progress: "35",
		},
		{
			title: "Finance App",
			description: "Branding and mobile app development",
			progress: "35",
		},
	]);

	return (
		<>
			<div id="profile">
				<div id="avatar">
					<div className="avatarImg">
						<img
							src="https://i.pravatar.cc/100?img=10"
							alt="Avatar"
						/>
					</div>
					<div className="avatarName">
						<h4>Jessika Smith</h4>
						<p>UI/UX Designer</p>
					</div>
				</div>
				<div id="actionSection">
					<span>
						<i className="fas fa-bell"></i>
					</span>

					<span>
						<i className="fas fa-envelope"></i>
					</span>
				</div>
			</div>

			<div id="timeTracker">
				<div>
					<h4>Project Time Tracker</h4>
					<p>You can start tracking</p>
				</div>
				<div className="trackBtn">
					<span className="i fas fa-play"></span>
				</div>
			</div>

			<div id="taskCreator">
				<div id="today">
					<div id="date">
						<h3>April 10, 2020</h3>
						<h2>Today</h2>
					</div>
					<div id="addTaskBtn">
						<span>
							<i className="fas fa-plus"></i>
						</span>
						<p>Add Task</p>
					</div>
				</div>
				<div id="calendar">
					<table>
						<thead>
							<tr>
								<th>Mon</th>
								<th>Tue</th>
								<th>Wed</th>
								<th>Thu</th>
								<th className="active">Fri</th>
								<th>Sat</th>
								<th>Sun</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>30</td>
								<td>31</td>
								<td>1</td>
								<td>2</td>
								<td>3</td>
								<td>4</td>
								<td>5</td>
							</tr>
							<tr>
								<td>6</td>
								<td>7</td>
								<td>8</td>
								<td>9</td>
								<td className="active">10</td>
								<td>11</td>
								<td>12</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div id="currentTasks">
					{tasks.map((task, index) => (
						<TaskItem key={index} {...task} />
					))}
				</div>
			</div>
		</>
	);
};

export default Profile;
