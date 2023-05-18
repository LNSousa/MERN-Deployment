import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Form from '../components/Form'
import { useState } from 'react'

const Update = () => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const [storeNumber, setStoreNumber] = useState('')
    const [open, setOpen] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [errors, setErr] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setName(res.data.results.name)
                setStoreNumber(res.data.results.storeNumber)
                setOpen(res.data.results.open)
                setLoaded(true)
            })
        }, [id])

    const updateStore = (store) => {
        axios.put('http://localhost:8000/api/stores/update/'+id, store)
            .then(res => {navigate(`/stores/${id}`)})
            .catch(err => {
                setErr(err.response.data.errors)
            })
    }
    
    return (
        <div>
            <div className='m-5 text-start'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Store Finder</h1>
                    <Link to='/' className='btn btn-primary my-3'>Home</Link>
                </div>
                <p>Edit this store!</p>
            </div>
            {loaded && (
                <Form setForm={false} initialName={name} initialNumber={storeNumber} initialOpen={open} onSubmitStore={updateStore} errors={errors}/>
            )}
        </div>
    )
}

export default Update