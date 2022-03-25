import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table"

const UserItem = ({user}) => {
    return (
        <tr>
            <td><a href={user.url} target='_blank'>Ссылка на пользователя</a></td>
            <td>{user.username}</td>
            <td>{user.first_name}</td>
            <td>{user.last_name}</td>
            <td>{user.email}</td>
        </tr>
    )
}

const UsersList = ({users}) => {
    return (
        <Container>
            <Table striped bordered className="mt-5">
                <thead>
                <tr>
                    <th>Url</th>
                    <th>Username</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <UserItem key={user.url} user={user}/>)}
                </tbody>
            </Table>
        </Container>
    )
}

export default UsersList