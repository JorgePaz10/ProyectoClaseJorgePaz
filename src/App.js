import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import SideNavbar from "./components/SideNavbar";
import CardItems from "./components/CardItems";

function App(){

    return(
        <Router>
            <Routes>
                <Route path="/*" element={
                    <div>
                        <TopNavbar />
                        <SideNavbar />
                        <CardItems />
                    </div>
                }>
                </Route>
            </Routes>
        </Router>

    );

}
export default App;