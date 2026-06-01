import { useState } from "react";
import { createRoute } from "../../services/routeService";

export default function RouteForm({ reload }) {

    const [form, setForm] = useState({
        route_name: "",
        start_city: "",
        end_city: "",
        distance: ""
    });

    const submit = async (e) => {

        e.preventDefault();

        await createRoute(form);

        setForm({
            route_name: "",
            start_city: "",
            end_city: "",
            distance: ""
        });

        reload();
    };

    return (

        <form onSubmit={submit}>

            <div className="row">

                <div className="col-md-3">

                    <input
                        className="form-control"
                        placeholder="Route Name"
                        value={form.route_name}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                route_name: e.target.value
                            })
                        }
                    />

                </div>

                <div className="col-md-2">

                    <input
                        className="form-control"
                        placeholder="Start City"
                        value={form.start_city}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                start_city: e.target.value
                            })
                        }
                    />

                </div>

                <div className="col-md-2">

                    <input
                        className="form-control"
                        placeholder="End City"
                        value={form.end_city}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                end_city: e.target.value
                            })
                        }
                    />

                </div>

                <div className="col-md-2">

                    <input
                        className="form-control"
                        placeholder="Distance"
                        value={form.distance}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                distance: e.target.value
                            })
                        }
                    />

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-primary"
                    >
                        Save
                    </button>

                </div>

            </div>

        </form>
    );
}