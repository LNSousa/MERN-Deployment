import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './Create'
import Dashboard from './Dashboard'
import Details from './Details'
import Update from './Update'



const Main = () => {
    const [stores, setStores] = useState([])

    const newStore = store => {
        setStores([...stores, store])
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores')
            .then((res) => setStores(res.data.results))
            .catch((err) => console.log(err))
    }, [stores])

    return (
        <div>
            <Routes>
                <Route path='/' element={<Dashboard stores={stores}/>}/>
                <Route path='/stores/new' element={<Create newStore={newStore}/>}/>
                <Route path='/stores/:id' element={<Details/>}/>
                <Route path='/stores/edit/:id' element={<Update/>}/>
            </Routes>
        </div>
    )
}

export default Main