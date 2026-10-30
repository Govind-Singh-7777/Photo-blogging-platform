import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateBlogs from "./router/CreateBlogs.jsx"
import ShowBlogs from "./router/showBlogs.jsx"

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/createblogs" element={ < CreateBlogs />} />
                    <Route path="/showblogs" element={<ShowBlogs/>}/>
                </Routes>
            </Router>
        </>
    )

}

export default App
