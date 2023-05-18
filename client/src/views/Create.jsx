import React, {useState} from 'react'
import Form from '../components/Form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {

    const {newStore} = props
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const addStore = store => {
        axios.post('http://localhost:8000/api/stores/new', store)
            .then(res => {
                newStore(res.data.results)
                navigate(`/stores/${res.data.results._id}`)
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.errors)
            })

    }


    return (
        <div>
            <div className='m-5 text-start'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Store Finder</h1>
                    <Link to='/' className='btn btn-primary my-3'>Home</Link>
                </div>
                <p className=''>Add a new store!</p>
            </div>
            <Form setForm={true} initialName='' initialNumber='' initialOpen={false} onSubmitStore={addStore} errors={errors}/>
        </div>
    )
}

export default Create