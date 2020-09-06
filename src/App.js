import React from "react";

import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import ProjectBoard from "./component/ProjectBoard";
function App() {
    return (
        <div className="App">
            <div>
                <Navbar />
                <ProjectBoard />
            </div>
        </div>
    );
}

export default App;
