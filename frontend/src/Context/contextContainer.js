import {useState, useContext, createContext} from 'react'
import { getPostRequest, createHistory } from '../Api/history'

const Createcontext = createContext()

export const ContextProvider = ({children}) => {

    const [Username, setUsername] = useState('')
    const [User, setUser] = useState([])
    const [Post, setPost] = useState([])

    const getHistory =async()=>{
        const res = await getPostRequest()
        setPost(res.data)
    }

    const createHist =async(history)=>{
        const create = await createHistory(history)
        console.log(history)
    }

    return <Createcontext.Provider value={{
        User,
        Post,
        setUser,
        getHistory,
        setUsername,
        Username,
        createHist
    }}>

        {children}

    </Createcontext.Provider>

}

export const useMyContext =()=>{
    const myCont = useContext(Createcontext)
    return myCont
}