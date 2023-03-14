/** @format */

import "./App.css";

import { Routes, Route } from "react-router-dom";
import LoginPage from "./views/login/components/LoginPage";
import HomePage from "./views/dashboard/components/HomePage";
import Layout from "./utils/Layout";
import Mission from "./views/missions/components/Mission";
import Profile from "./views/profiles/components/Profile";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/mission/:id' element={<Mission />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
