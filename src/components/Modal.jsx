import { useGlobalContext } from "../context";

const Modal = () => {
    const { setIsModalOpen, handleChange, handleSubmit } = useGlobalContext()

    return (
        <div className="flex justify-center   absolute w-[100vw] h-[100vh] modal">
            <div className="w-[70%]  absolute bg-white rounded mt-20 p-3">
                <h1 className="text-[#23aaeb] text-[18px]">NEW EMPLOYEE</h1>
                <div className="bg-[#23aaeb] mt-3 mr-2 h-[0.1px]" />
                <h6 className="text-[#23aaeb] font-bold text-[16px] mt-2">personal info</h6>
                <div className="bg-[#23a8eb39]  mr-2 h-[3px] w-10" />
                <form className="my-4" onSubmit={handleSubmit}>
                    <div className="flex justify-between gap-2">
                      
                        <div className=" border-4 p-10 border-dashed flex-2 ">
                            Drag image here
                        </div>
                        <div className="flex flex-col flex-1">
                          
                            <label htmlFor="">Name</label>
                            <input className="border-2 w-full rounded" type="text" name="name" required onChange={handleChange} />
                            <label htmlFor="">phone</label>
                            <input className="border-2 w-full rounded" type="phone" />
                            
                        </div>
                        <div className="flex flex-col flex-1">
                            <label htmlFor="">start date</label>
                            <input className="border-2 w-full rounded" type="date" name="startDate" required onChange={handleChange} />
                            <label htmlFor="">email</label>
                            <input className="border-2 w-full rounded" type="email" name="email" required onChange={handleChange} />
                        </div>
                 
                    </div>
                    <h6 className="text-[#23aaeb] font-bold text-[16px] mt-2">Office Info</h6>
                    <div className="bg-[#23a8eb39]  mr-2 h-[3px] w-10" />
                    <div className=" flex flex-col gap-2 my-2">

                        <label htmlFor="">Office</label>
                        <select className=" w-full border-2" >
                            <option >Name</option>
                        </select>
                    </div>
                    <div className="flex w-full flex-row gap-2 my-2">
                        <div className="flex flex-col flex-1 gap-2">

                            <label htmlFor="">Department</label>
                            <select name='department' onChange={handleChange} className=" w-full border-2 " required >
                                <option value='' ></option>
                                <option value={'front end'} >front end</option>
                                <option value={'back end'} >back end</option>
                            </select>
                        </div>
                        <div className="flex flex-col flex-1 gap-2">

                            <label htmlFor="">Attendance profile</label>
                            <select className=" w-full border-2 " >
                                <option >Name</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex w-full flex-row gap-2 my-2">
                        <div className="flex flex-col flex-1 gap-2">

                            <label htmlFor="">Role</label>
                            <select className=" w-full border-2 " >
                                <option >Name</option>
                            </select>
                        </div>
                        <div className="flex flex-col flex-1 gap-2">

                            <label htmlFor="">Position</label>
                            <select name='position' onChange={handleChange} className=" w-full border-2 " required >
                                <option value='' ></option>
                                <option value={'HR Head'}>HR Head</option>
                                <option value={'software developer'}>software developer</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col  gap-2">

                        <label htmlFor="">Direct Manager</label>
                        <select className=" w-full border-2 " >
                            <option >select option</option>
                        </select>
                    </div>
                    <h6 className="text-[#23aaeb] font-bold text-[16px] mt-2">work from home</h6>
                    <div className="bg-[#23a8eb39]  mr-2 h-[3px] w-10" />
                    <div className="flex flex-row gap-2 my-2">

                        <input type="checkbox" />
                        <label htmlFor="">Allow Employee To Work From Home</label>
                    </div>
                    <div className="bg-[#23a8eb30] mt-3 mr-2 h-[0.1px]" />
                    <div className="flex flex-row w-full justify-end gap-2 pt-3 text-white">
                        <button className="px-3 bg-[#ff6a6a] rounded" onClick={() => setIsModalOpen(false)}>cancel</button>
                        <button className="px-3 bg-[#23aaeb] rounded" type="sumbit">save</button>
                    </div>


                </form>
            </div>
        </div>
    )
};

export default Modal