import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import React from "react";



const TodoItem = ({todo}) => {
    return (
        <tr>
            <td><a href={todo.url} target='_blank'>Ссылка на заметку</a></td>
            <td>{todo.user}</td>
            <td>{todo.project}</td>
            <td>{todo.text}</td>
            <td>{todo.is_active ? 'Active' : 'Not active'}</td>
        </tr>
    )

}

const TODOs = ({todos}) => {
    return (
        <>
            <Container>
                <Table striped bordered className="mt-5">
                    <thead>
                    <tr>
                        <th>Url</th>
                        <th>User</th>
                        <th>Project</th>
                        <th>Text</th>
                        <th>Active</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todos.map((todo) => <TodoItem key={todo.url} todo={todo}/>)}
                    </tbody>
                </Table>
            </Container>
        </>
    )
}

export default TODOs  