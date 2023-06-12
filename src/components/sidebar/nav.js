import { useState } from "react";

const NavItem = ({ icon, name, active, link }) => {
	return (
		<li className={`navItem ${active ? "active" : ""}`}>
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
			active: true,
		},
		{
			name: "Analytics",
			icon: "chart-pie",
			active: false,
		},
		{
			name: "Teams",
			icon: "users",
			active: false,
		},
		{
			name: "Documents",
			icon: "file",
			active: false,
		},
		{
			name: "Settings",
			icon: "gear",
			active: false,
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
							active={link.active}
							key={index}
						/>
					))}
			</ul>
		</nav>
	);
};

export default Nav;
