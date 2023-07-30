import { useGlobalContext } from "../context";
import Employees from "./Employees";
import Modal from "./Modal";
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Dashboard = () => {
    const {isModalOpen} = useGlobalContext()
    console.log(isModalOpen)
    return (
        <div className="w-full h-[100vh] flex flex-row md:overflow-hidden overflow-x-hidden relative">
            <div className=" flex-1">
                <Sidebar />
              
            </div>
            <div className="w-full flex-11 h-[79px] mr-5 ">
                <Navbar />
                <Employees/>
            </div>
            {isModalOpen && <Modal/>}
        </div>
    )
};

export default Dashboard