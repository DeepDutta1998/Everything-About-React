import React, { useEffect, useState } from 'react'

const Album = () => {
    const [post, setpost] = useState([])
    const getpost = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums')
        setpost(await response.json())
    }
    useEffect(() => {
        getpost()
    },)
    return (
        <div>
            <h1>fetch api albums</h1>
            <div className="container">
                <div className='row'>
                    {
                        post.map((Mypost) => {
                            return (
                                <div className='col-md-4 mb-5' >
                                    <div className='card cardd' >
                                        {/* <img className='card-img-top' src={Mypost.userId} alt="Card image cap"></img> */}

                                        <div className='Card body'>
                                            <h5 className='card-title'>{Mypost.userId}</h5>
                                            <p>{Mypost.title}</p>
                                            <a href="#" className="btn btn-primary">Details</a>
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

export default Album
