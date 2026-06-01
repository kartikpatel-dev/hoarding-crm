import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/users/Users";
import RoutesPage from "../pages/routes/RoutesPage";
import Hoardings from "../pages/hoardings/Hoardings";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Dashboard />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Users />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/routes"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <RoutesPage />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/hoardings"
                    element={
                        <ProtectedRoute>
                            <MainLayout>
                                <Hoardings />
                            </MainLayout>
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}