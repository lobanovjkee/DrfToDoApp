import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import React from "react";


const ProjectItem = ({project}) => {
    return (
        <tr>
            <td><a href={project.url} target='_blank'>Ссылка на проект</a></td>
            <td>{project.users.join(', ')}</td>
            <td>{project.project_name}</td>
            <td>{project.project_link}</td>
        </tr>
    )

}

const ProjectsList = ({projects}) => {
    return (
        <>
            <Container>
                <Table striped bordered className="mt-5">
                    <thead>
                    <tr>
                        <th>Url</th>
                        <th>Users</th>
                        <th>Project name</th>
                        <th>Project link</th>
                    </tr>
                    </thead>
                    <tbody>
                    {projects.map((project) => <ProjectItem key={project.url} project={project}/>)}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default ProjectsList