import React, { useEffect, useState } from 'react'

const FetchApiData = () => {

    const [users, setUsers] = useState([]);



    const getUsers = async () => {
        const response = await fetch("https://api.github.com/users");


        // const data=await response.json();
        // console.log(data);


        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
               
                {
                    users.map((CurrentData) => {
                        return (
                            <div className="userName">
                                <h5>LOGIN ID: {CurrentData.login}</h5>
                            <div className="card_item" key={CurrentData.id}>
                            <h5>NODE ID:</h5>{CurrentData.node_id}

                                <div className="card_inner">
                                        <img src={CurrentData.avatar_url} alt="" />
                                        <h5>GRAVATAR ID: {CurrentData.gravatar_id}</h5>
                                        <div className="userUrl"><h5>USER URL:</h5> {CurrentData.url}</div>
                                        <div className="htmlUrl"><h5>HTML URL: </h5>{CurrentData.html_url}</div>
                                        <div className="gistsUrl"> <h5>GISTS URL:</h5>{CurrentData.gists_url}</div>
                                        <div className="Starred Url"> <h5>STARRED URL:</h5>{CurrentData.starred_url}</div>
                                        <div className="Subscription Url"> <h5>SUBSCRIPTION URL:</h5>{CurrentData.subscriptions_url}</div>
                                        <div className="OrganizationsUrl"> <h5>ORGANIZATION URL:</h5>{CurrentData.organizations_url}</div>
                                        <div className="Repos Url"> <h5>REPOS URL:</h5>{CurrentData.repos_url}</div>
                                        <div className="Events Url"> <h5> EVENTS URL:</h5>{CurrentData.events_url}</div>
                                        <div className="Received Events Url"> <h5>RECEIVED EVENTS URL:</h5>{CurrentData.received_events_url}</div>
                                      <h5>TYPE:{CurrentData.type}</h5>
                                      <h5>ADMIN:{CurrentData.site_admin}</h5>
                                       
                                
                                </div>

                            </div>
                            </div>
                        )
                    })
                }

            </div>              


    )
}

export default FetchApiData;

