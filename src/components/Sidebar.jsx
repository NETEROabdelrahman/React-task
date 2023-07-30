import {BiSolidDashboard,BiSolidCoffeeAlt} from 'react-icons/bi'
import {MdOutlineMonitor} from 'react-icons/md'
import {FaUserFriends,FaHands} from 'react-icons/fa'


const Sidebar = () => {
  return (
      <aside className=" lg:block hidden w-[106px] h-full ">
          <ul className='flex flex-col justify-center items-center pt-[20px]'>
              <li className=" h-[106px] flex flex-col w-full justify-center  items-center text-white">
                  <BiSolidDashboard color='white' size='28.6px' />
                  <span className=' text-center text-[12px] mt-[3px]'>Dashboard</span>
              </li>
              <li className=" h-[106px] flex flex-col w-full justify-center items-center text-white">
                  <MdOutlineMonitor color='white' size='28.6px' />
                  <span className=' text-center text-[12px] mt-[3px]'>Workplace</span>
              </li>
              <li className=" h-[106px] flex flex-col w-full justify-center items-center text-white">
                  <BiSolidCoffeeAlt color='white' size='28.6px' />
                  <span className=' text-center text-[12px] mt-[3px]'>Holidays</span>
              </li>
              <li className=" h-[106px] flex flex-col w-full justify-center items-center bg-[#2765ac] text-white border-l-2 border-[#59c203]">
                  <FaUserFriends color='white' size='28.6px' />
                  <span className=' text-center text-[12px] mt-[3px]'>Employees</span>
              </li>
              <li className=" h-[106px] flex flex-col w-full justify-center items-center text-white">
                  <FaHands color='white' size='28.6px' />
                  <span className=' text-center text-[12px] mt-[3px] px-2'>Inbound Requests</span>
              </li>
          </ul>
    </aside>
  )
}

export default Sidebar