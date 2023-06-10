import { useState } from "react";

const NavItem = ({ icon, name, link }) => {
	return (
		<li className="navItem">
			<span>
				<i className={`fas fa-${icon}`}></i>
				<a href={link ? link : "/"}>{name}</a>
			</span>
		</li>
	);
};

const Nav = () => {
	const [links] = useState([
		{
			name: "Dashboard",
			icon: "chart-simple",
		},
		{
			name: "Analytics",
			icon: "chart-pie",
		},
		{
			name: "Teams",
			icon: "users",
		},
		{
			name: "Documents",
			icon: "file",
		},
		{
			name: "Settings",
			icon: "gear",
		},
	]);

	return (
		<nav>
			<ul>
				{links &&
					links.map((link, index) => (
						<NavItem
							icon={link.icon}
							name={link.name}
							key={index}
						/>
					))}
			</ul>
		</nav>
	);
};

export default Nav;
