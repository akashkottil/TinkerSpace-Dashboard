import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
    const mentorData =[
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
    ]
    const leanersData =[
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200/300",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200/300",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        {
            name:"Cyril Cyriac",
            description:"Gen AI",
            category:"Resident",
            img:"https://picsum.photos/200",
        },
        
        
    ]
  return (
    <div className='container'>
        <nav className='nav'>
            <div className="nav-left">
                <p>LiveFeed  04:22PM// 12/12/2023</p>
            </div>
            <div className="nav-right">
                <div className="heading">
                    TINKERSPACE
                </div>
                <div className="heading2">
                    by TinkerHub
                </div>
            </div>
        </nav>

        <main>
            <div className="mentors">
                <div className="mentors-heading">
                    <h1>Mentors</h1> 
                </div>
                <div className="mentors-count">
                    <h2>16</h2>
                </div>
            </div>
                <div className="mentors-cards">

                    {
                         mentorData.map((item,index)=>(
                            <div className='m-card' key={index}>
                        <div className="m-card-img">
                            <img src={item.img} alt="img" />
                        </div>
                        <div className="card-head">
                            <h4>{item.name}</h4>
                            <div className="line">
                            </div>
                        </div>
                        <div className="card-content">
                            <h5>{item.description}</h5>
                            <p>{item.category}</p>
                        </div>
                    </div>
                         )) 
                    } 
                </div>

                <div className="learners-section">
            <div className="learners">
                <div className="learners-heading">
                    <h1>Learners</h1> 
                </div>
                <div className="learners-count">
                    <h2>16</h2>
                </div>
            </div>
                <div className="learners-cards">

                    {
                         leanersData.map((item,index)=>(
                            <div className='l-card' key={index}>
                        <div className="l-card-img">
                            <img src={item.img} alt="img" />
                        </div>
                        <div className="card-head">
                            <h4>{item.name}</h4>
                            <div className="line">
                            </div>
                        </div>
                        <div className="card-content">
                            <h5>{item.description}</h5>
                            <p>{item.category}</p>
                        </div>
                    </div>
                         )) 
                    } 
                </div>
                </div>
        </main>
      
    </div>
  )
}

export default Dashboard
