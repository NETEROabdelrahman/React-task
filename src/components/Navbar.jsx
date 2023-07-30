import {BiSolidBellRing} from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'



const Navbar = () => {
    return (
        <nav className="text-white w-full flex flex-row justify-end  items-center mt-[5.5px] px-5 gap-2">
            <div className=' flex flex-row justify-center gap-[49px]'>
                <span className="text-[#474747] text-[15px]">Thursday, 03 Oct 02:08:07 PM</span>
                <button className=" bg-[#27b40c] px-[26px] rounded text-[13px] md:block hidden ">Sign In</button>
            </div>
            <span className='bg-[#e8e4e4] w-[1px] h-[45px]'></span>
            <BiSolidBellRing color='#27b40c' />
            <span className='bg-[#e8e4e4] w-[1px] h-[45px]'></span>
            <img className='w-[32px] rounded-full' src={"/assets/16711036050971.jpeg"} alt="profile-img" />
            <div className='text-[#8997a4] text-[20px] flex flex-row items-center gap-2'>
                <span>Ahmed Khaled</span>
                <IoIosArrowDown color='#8997a4'  />
            </div>
                <IoIosArrowDown color='#595959' className='mb-[5px]' />
        </nav>
    )
};

export default Navbar