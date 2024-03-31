import React from "react";
import Logo from "./components/Logo";
import {Route,Routes} from "react-router-dom"
import UserInfo from "./Routes/UserInfo.js"
import Users from "./Routes/Users.js"

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="container text-gray-200 py-3">
        <Logo/>
        <Routes>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:name" element={<UserInfo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
