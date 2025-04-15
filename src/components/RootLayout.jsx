import { Header } from "./Header";
import { Outlet } from "react-router";

export function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main> 
        </>
    )
}