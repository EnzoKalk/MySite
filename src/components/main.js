import { Routes, Route } from 'react-router-dom';
import AboutMe from "./aboutMe.js";
import AboutSite from "./aboutSite.js";
import Contacts from "./contacts.js";
import Home from "./home.js";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/aboutSite" element={<AboutSite />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>
    );
}

export default Main;