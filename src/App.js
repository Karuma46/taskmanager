import "./scss/main.scss";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/profile";

function App() {
	return (
		<div className="App">
			<Sidebar />
			<Profile />
		</div>
	);
}

export default App;
