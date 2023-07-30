import {AiOutlineSearch} from 'react-icons/ai'
import Card from './Card'
import { useGlobalContext } from '../context'



const Employees = () => {
    const { data, setIsModalOpen, handleSearch, filtered } = useGlobalContext()



    return (
        <div className="bg-[#f7f8f9] w-full h-[100vh] px-[35px]">
            <div className="w-full mt-3 pt-[29px] px-[48px] flex flex-row gap-2">
                <div className="w-[88%] p-0 relative">
                  
                    <input type="search" placeholder='search' className=' pl-14 w-full' onChange={handleSearch} />
                    <AiOutlineSearch color='#23aaeb' className=' absolute top-[19%] left-[3%]' />
                </div>
                <button className="bg-[#2764ac] text-white px-3 rounded w-[101px] whitespace-nowrap" onClick={() => setIsModalOpen(true)}>+ add new</button>
            </div>
            <div className='w-full flex flex-row flex-wrap gap-[46px] mt-10 items-center justify-center lg:justify-normal '>
                {!filtered ?   <>
              
                        {data?.map((user ) => {
                        return (
                            <Card key={user.createdAt} {...user}  />
                        )
                    })} </>:<>
              
                    {filtered?.map((user) => {

                        return (
                            <Card key={user.createdAt} {...user}  />
                        )
                    })} </>}
            </div>
        </div>
    )
};

export default Employees