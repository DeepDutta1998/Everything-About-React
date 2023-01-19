import React from 'react'

const Githubuser = ({users}) => {
  return (
    <div>
        <div className="container">
            <div className="row">
                {
                    users.map((Myuser)=>{
                        return(
                            <div className='col-md-4 mb-5' >
                            <div className='card cardd' >
                                <img className='card-img-top' src={Myuser.avatar_url} alt="Card image cap"></img>

                                <div className='Card body'>
                                    <h5 className='card-title'>Name : {Myuser.login}</h5>
                                    <p>{Myuser.followers_url} </p>
                                    <h6>Type : {Myuser.type}</h6>
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

export default Githubuser
