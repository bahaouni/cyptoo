import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
    return (
        <div class="bg-light" style={{ height: "100vh" }}>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#"> Profile</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Profile</Link>
                            </li>
                        </ul>
                        <div class="d-flex">
                            <div class="mx-4">
                                <span class="text-black-50">cypto</span>
                                <Link class="btn btn-outline-primary" to="/">Logout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="container p-4 mt-4">
                <div class="row justify-content-evenly mt-4">

                    <div class="col-lg-12 col-md-12 mt-4">
                        <div class="d-flex">
                            <i class="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
                        </div>
                        <div class="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">name</th>
                                        <th scope="col">email</th>
                                        <th scope="col">role</th>
                                        <th scope="col">telephone</th>
                                        <th scope="col">city</th>
                                        <th scope="col">country</th>
                                        <th scope="col">bio</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>youssef</th>
                                        <td>test@live.fr</td>
                                        <td>ADMIN</td>
                                        <td>56666666</td>
                                        <td>tunisia</td>
                                        <td>tunisia</td>
                                        <td>im full stack developer</td>
                                        <td><button class="btn btn-outline-danger">Delete</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
