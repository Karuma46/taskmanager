const Profile = () => {
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
								<th>Fri</th>
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
								<td>10</td>
								<td>11</td>
								<td>12</td>
							</tr>
							<tr>
								<td>13</td>
								<td>14</td>
								<td>15</td>
								<td>16</td>
								<td>17</td>
								<td>18</td>
								<td>19</td>
							</tr>
							<tr>
								<td>20</td>
								<td>21</td>
								<td>20</td>
								<td>22</td>
								<td>23</td>
								<td>24</td>
								<td>25</td>
							</tr>
							<tr>
								<td>26</td>
								<td>27</td>
								<td>28</td>
								<td>29</td>
								<td>30</td>
								<td>31</td>
								<td>1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default Profile;
