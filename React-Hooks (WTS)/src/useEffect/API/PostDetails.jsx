import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
    const [post, setPost] = useState({});
    const { id } = useParams();

    const getUser = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            const newuser = data.find((item)=>item.id === parseInt(id))
            setPost(newuser);
        }catch(err){
            console.log(err +"data not found")
        }
    }       
    
    useEffect(() => {
        getUser()
    })

    return (
        <>

            {
                <div className='col-md-4 mb-4' >
                    <div className='card cardd'>

                        <div className='Card body'>
                        <h3> {post.username}</h3>
                            <h5 className='card-title '>Name : {post.name}</h5>
                            <p> email : {post.email}</p>
                            <p> website : {post.website}</p>
                            {/* <p>city : {post.address.city}</p> */}
                            <button className='btn-primary'>details</button>


                        </div>
                    </div>
                </div>

            }


        </>
    )
}

export default PostDetails
