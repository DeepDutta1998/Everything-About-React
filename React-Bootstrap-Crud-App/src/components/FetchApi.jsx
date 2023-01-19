import React from 'react'
import { useState, useEffect } from 'react';

export const FetchApi = () => {
    const [user, setUser] = useState([])
    const getData = async () => {
        const response = await fetch('https://herokuapp.com/api/category');
        setUser(await response.json());
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    {
                        user.map((Data) => {
                            return (
                                <div className='col-md-3' key={Data.id}>
                                    <div className="card" >
                                        <div className="card-body">
                                            <p>success : {Data.success}</p>
                                            <p>message: {Data.message}</p>
                                            <p>data: {Data.data}</p>
                                            <p>data: {Data.data.id}</p>
                                            <p>category: {Data.data.category}</p>
                                            <p>image: {Data.data.image}</p>
                                            <p>created_at: {Data.data.created_at}</p>
                                            <p>updated_at: {Data.data.updated_at}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

