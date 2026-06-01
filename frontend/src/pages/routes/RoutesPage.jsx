import { useEffect, useState } from "react";

import RouteForm from "./RouteForm";

import { getRoutes } from "../../services/routeService";

export default function RoutesPage() {

    const [routes, setRoutes] = useState([]);

    const loadRoutes = async () => {

        const res = await getRoutes();

        setRoutes(res.data);
    };

    useEffect(() => {

        loadRoutes();

    }, []);

    return (

        <div>

            <h3 className="mb-3">
                Route Management
            </h3>

            <RouteForm reload={loadRoutes} />

            <div className="card mt-4">

                <div className="card-body">

                    <table className="table">

                        <thead>

                            <tr>

                                <th>ID</th>

                                <th>Route</th>

                                <th>Start</th>

                                <th>End</th>

                                <th>Distance</th>

                                <th>Status</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                routes.map(route => (

                                    <tr key={route.id}>

                                        <td>{route.id}</td>

                                        <td>{route.route_name}</td>

                                        <td>{route.start_city}</td>

                                        <td>{route.end_city}</td>

                                        <td>{route.distance}</td>

                                        <td>{route.status}</td>

                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}