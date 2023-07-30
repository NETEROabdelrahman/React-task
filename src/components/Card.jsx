import {AiOutlinePauseCircle,AiOutlineExclamation} from 'react-icons/ai'
import {BiSolidPencil} from 'react-icons/bi'
import {TbTrashXFilled} from 'react-icons/tb'
import {BsEnvelopeFill} from 'react-icons/bs'
import { MdCallEnd } from 'react-icons/md'
import { useState } from 'react'
import { useGlobalContext } from '../context'


const Card = ({ name,
    startDate,
    email,
    department,
    position,
createdAt}) => {
console.log(createdAt)
    const [cardReveal, setCardReveal] = useState(false)

    const {handleDelete} = useGlobalContext()

    return (
    
        <div className='flex flex-row bg-white rounded pb-[12px] pr-[13px]  box lg:w-[400px] sm:w-[300px]'>
            <div className='px-[19px] py-[11px]'>
                <img className=' rounded-full w-[64px]' src="/assets/16711036050971.jpeg" alt="" />
                <div className=' flex flex-row gap-2 text-[#8997a4] mt-2'>
                    <BiSolidPencil />
                    <AiOutlinePauseCircle />
                    <TbTrashXFilled id={createdAt}  onClick={(e)=>handleDelete(e.currentTarget.id)} />
                </div>
            </div>
            <div className=' bg-[#8997a44d] w-[0.1px]  my-3' />
            <div className='pl-4 min-w-[40%]'>
                <h1 className=' text-[#313030] text-[20px]'>{name}</h1>
                <h4 className=' text-[#313030] text-[13px]'>{position}</h4>
                <h6 className='text-[#5c6974] text-[10px]'>{department}</h6>
                <span className=' bg-[#28b40c38] text-[#27b40c] text-[11px] px-2 rounded'>Present</span>
            </div>
            <div className='flex flex-row justify-between items-end flex-1 '>
                <BsEnvelopeFill className=' bg-[#eaeef0] rounded-full p-1 w-[19px]' />
                <MdCallEnd className=' bg-[#eaeef0] rounded-full p-1 w-[19px]' />
                <div className='relative'>

                <AiOutlineExclamation
                    className=' bg-[#eaeef0] rounded-full p-1 w-[19px] '
                    onMouseOver={() => setCardReveal(true)}
                    onMouseLeave={() => setCardReveal(false)}
                />
                {cardReveal &&
                    <div className='absolute w-7 h-7 bg-white right-[-50px] top-8 box2 grid grid-cols-3 p-3'>
                            <div className='text-[8px]'>
                                <h1 className=' text-[#8997a4]'>office</h1>
                                <h1>Arabic localizer</h1>
                            </div>
                            <div className='text-[8px]'>
                                <h1 className=' text-[#8997a4]'>Role</h1>
                                <h1>employee</h1>
                            </div>
                            <div className='text-[8px]'>
                                <h1 className=' text-[#8997a4]'>Copied manager</h1>
                                <h1>mohammed tarek</h1>
                            </div>
                            <div className='text-[8px]'>
                                <h1 className=' text-[#8997a4]'>joining date</h1>
                                <h1>{startDate }</h1>
                            </div>
                            <div className='text-[8px]'>
                                <h1 className=' text-[#8997a4]'>manager</h1>
                                <h1>mohammed tarek</h1>
                            </div>
                </div>
                }
                </div>
            </div>
        </div>
    )
};

export default Card