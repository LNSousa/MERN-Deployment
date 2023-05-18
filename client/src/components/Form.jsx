import React, { useState } from 'react'

const Form = (props) => {
    const {setForm, initialName, initialNumber, initialOpen, onSubmitStore, errors} = props
    const [name, setName] = useState(initialName)
    const [storeNumber, setStoreNumber] = useState(initialNumber)
    const [open, setOpen] = useState(initialOpen)

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitStore({name, storeNumber, open})
    }

    const checkOpen = () => {
        setOpen(!open)
    }

    return (
        <div className='m-5'>
            <form className='border border-black p-3' onSubmit={submitHandler}>
                <div className='my-3'>
                    <label>Store Name</label>
                    { errors.name ? <p className='mb-0' style={{color: 'red'}}>{errors.name.message}</p> : '' }
                    <br />
                    <input className='' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='my-3'>
                    <label>Store Number</label>
                    { errors.storeNumber ? <p className='mb-0' style={{color: 'red'}}>{errors.storeNumber.message}</p> : '' }
                    <br />
                    <input className='' type="number" value={storeNumber} onChange={(e) => setStoreNumber(e.target.value)}/>
                </div>
                <div>
                    <input className='my-3' type="checkbox" name="open" checked={open} onChange={checkOpen} />
                    <label className='mx-1'>Open?</label>
                </div>
                {setForm ? <button type="submit" className='btn btn-outline-success mb-3'>Add a new store</button> : <button type="submit" className='btn btn-outline-success mb-3'>Edit Store</button>}
            </form>
        </div>
    )
}

export default Form