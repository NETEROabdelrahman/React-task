import React, { useContext, useState } from "react"


const AppContext = React.createContext()




const AppProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [data,setData] = useState([])
    const [filtered,setFiltered] = useState('')
    const [userData,setUserData] = useState({})
    // console.log(userData)
    // console.log(data[0])
    // console.log(filtered)

    
    const handleChange = (e) => {
        e.preventDefault()
        
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        const name = e.target.name
        
        setUserData({ ...userData, [name]: value,createdAt:new Date().getTime() })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, userData])
        setUserData({})
        setIsModalOpen(false)
    }

    const filterData = (searchtext) => {
        const regex = new RegExp(searchtext, "i"); 
        if (searchtext) {
            setFiltered(data.filter(
                (user) => regex.test(user.name) 
                ))
        } else {
            setFiltered('')
            }
      };

    const handleSearch = (e) => {
        console.log(filtered)
        filterData(e.target.value)
    }

    const handleDelete = (id) => {
        console.log(id)
        setData(prev=>prev.filter(user=>user.createdAt!=id))
    }



    return <AppContext.Provider value={{
        isModalOpen,
        setIsModalOpen,
        handleChange,
        handleSubmit,
        handleSearch,
        handleDelete,
        data,
        filtered
    }}>
        {children}
    </AppContext.Provider>
}
 
const useGlobalContext = () => {
    return  useContext(AppContext)
}

export {useGlobalContext,AppProvider,AppContext}