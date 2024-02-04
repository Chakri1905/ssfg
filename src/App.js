// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/about";
import Events from "./Pages/events";
import Blogs from "./Pages/blogs";
import SignUp from "./Pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route path="/blogs" element={<Blogs />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
