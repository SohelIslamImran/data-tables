import { Toaster } from "react-hot-toast";
import "./App.css";
import DataTable from "./components/DataTable/DataTable";
import UserContainer from "./components/UserContainer/UserContainer";

function App() {
    return (
        <>
            <UserContainer />
            <DataTable />
            <Toaster />
        </>
    );
}

export default App;
