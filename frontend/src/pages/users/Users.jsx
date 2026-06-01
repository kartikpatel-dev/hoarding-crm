import { useEffect, useState } from "react";
import { getUsers } from "../../services/userService";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        loadUsers();

    }, []);

    const loadUsers = async () => {

        const res = await getUsers();

        setUsers(res.data);
    };

    return (

        <div>

            <div className="d-flex justify-content-between mb-3">

                <h3>Users</h3>

                <button
                    className="btn btn-primary"
                >
                    Add User
                </button>

            </div>

            <div className="card">

                <div className="card-body">

                    <table className="table table-bordered">

                        <thead>

                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map(user => (

                                <tr key={user.id}>

                                    <td>{user.id}</td>

                                    <td>{user.name}</td>

                                    <td>{user.email}</td>

                                    <td>
                                        {
                                            user.roles?.[0]?.name
                                        }
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}