import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
    const {id} = useParams()
    const [store, setStore] = useState('')

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then((res) => setStore(res.data.results))
            .catch((err) => console.log(err))
    }, [id])
    return (
        <div className='m-5'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Store Finder</h1>
                <Link to={'/'} className='btn btn-primary '>Home</Link>
            </div>
            <div className='text-start my-5'>
                <h3>{store.name}</h3>
                <h3>Store Number: {store.storeNumber}</h3>
                <h3>{store.open ? "Open" : "Closed"}</h3>
            </div>
            <Link to={`/stores/edit/${store._id}`} className='btn btn-primary float-start'>Edit Store Details</Link>
        </div>
    )
}

export default Details