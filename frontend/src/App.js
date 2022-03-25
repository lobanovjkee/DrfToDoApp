import React, {useEffect, useState} from "react";
import UsersList from "./components/Users";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import axios from "axios";
import {Route, Routes} from "react-router-dom";
import ProjectsList from "./components/Projects";
import TODOs from "./components/TODOs";

const App = () => {
    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([])
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/users/')
            .then((response) => setUsers(response.data.results))
    }, [users.length]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then((response) => setProjects(response.data.results))
    }, [projects.length]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/todos/')
            .then((response) => setTodos(response.data.results))
    }, [todos.length]);

    return (
        <>
            <Menu/>
            <Routes>
                <Route path='/' element={<UsersList users={users}/>}/>
                <Route path='projects' element={<ProjectsList projects={projects}/>}/>
                <Route path='todos' element={<TODOs todos={todos}/>}/>
            </Routes>
            <Footer/>
        </>
    )
}


export default App;
