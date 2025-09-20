import { Header } from "./Header";

export const Layout = ({ children }) => {
    return (
        <div>
            <header/>
            <main style={{padding: "20px"}}>
                {children}
            </main>
        </div>
    );
};