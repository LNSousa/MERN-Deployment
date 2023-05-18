import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Dashboard = (props) => {
    const {stores} = props

    const deleteStore = (id) => {
        axios.delete('http://localhost:8000/api/stores/delete/' + id)
    }

    return (
        <div className='m-3'>
            <div className='my-3 text-start'>
                <h1>Store Finder</h1>
                <p>Add a new store!</p>
            </div>
            <table className='table table-dark mx-auto'>
                <thead>
                    <tr>
                        <th scope='col'>Store</th>
                        <th scope='col'>Store Number</th>
                        <th scope='col'>Open</th>
                        <th scope='col'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    stores.sort((a, b) => a.storeNumber > b.storeNumber ? 1 : -1).map((store, i) => {
                        return(
                            <tr key={i} className="align-middle">
                                <th scope='row'><Link to={`/stores/${store._id}`} className="link-underline link-underline-opacity-0">{store.name}</Link></th>
                                <td>{store.storeNumber}</td>
                                <td>{store.open ? "Open" : "Closed"}</td>
                                <td>{store.open ? <button onClick={() => deleteStore(store._id)} className='btn btn-outline-danger'>Delete</button> : ""}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <div className='text-start'>

                <Link to='/stores/new' className='btn btn-primary '>Can't find your store?</Link>
            </div>
        </div>
    )
}

export default Dashboard