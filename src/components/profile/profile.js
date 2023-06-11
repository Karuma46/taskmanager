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
		</>
	);
};

export default Profile;
