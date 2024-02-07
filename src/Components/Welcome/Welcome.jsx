import React from 'react'
import "./Welcome.css"

const Welcome = () => {
  return (
    <div className='welcome'>
        <h1>Welcome to Prodesk-IT</h1>
        <div className='welcome-section'>
             <div className='welcome-section-1'>
                <img src="https://img1.wsimg.com/isteam/stock/uENxzPOagDu35BQJA/:/cr=t:0%25,l:19.65%25,w:60.71%25,h:100%25/rs=w:365,h:487,cg:true" alt="Work" />
                <h3>WELCOME</h3>
                <p className='para'>We are experts in developing business-oriented solutions. Since 2012, we have been translating the needs and goals of our customers into reliable software where utility, ease of use and efficiency are key factors and where state-of-the-art technical solutions minimize both future operational costs and risks.</p>
                <button className='welcome-btn'>Learn More</button>
             </div>
             <div className='welcome-section-2'>
                <img src="https://img1.wsimg.com/isteam/stock/5JZEA8n/:/cr=t:0%25,l:24.98%25,w:50.04%25,h:100%25/rs=w:365,h:487,cg:true" alt="work" />
                <h3>PRODESK ENGINEERING</h3>
                <p className='para'>Since 2006,  PRODESK Manpower has provided quality engineering and technical talent with the most relevant skills and experience to clients, working in Software, Industrial Manufacturing & Production sectors.</p>
                <button className='welcome-btn'>ENTER PRODESK MANPOWER SITE</button>
             </div>
             <div className='welcome-section-3'>
                <img src="https://img1.wsimg.com/isteam/stock/NpNq05n/:/cr=t:0%25,l:24.97%25,w:50.06%25,h:100%25/rs=w:365,h:487,cg:true" alt="work" />
                <h3>PRODESK IT </h3>
                <p className='para'>PRODESK IT is the software company started in 2012 by founders of Prodesk Engineering Manpower Outsourcing Solutions. We provide IT-Software & Web-Development services for clients in US, European, Australian & Domestic Indian market where state-of-the-art technical solutions minimize both future operational co</p>
                <button className='welcome-btn'>Learn More</button>
             </div>
        </div>
        <div className='below-welcome'>
        </div>
            <h1>Welcome</h1>
        <div className='below-welcome-1'>
            <div className='para-2 para'>
            Prodesk is one of the leading IT-Software Development & Engineering Manpower company specialized in providing IT-Software & Web-Development services for clients in US, European, Australian & Domestic Indian markets and We also supply high quality engineering and technical talent to various engineering sectors in India and abroad. Started in 2006 by Dr. Amit Maheshwari (Ex-Tech Mahindra, HR Manager), we continue to grow and build our capabilities and expertise. Prodesk is committed to providing 100% customer focused services. Whether in meeting a client’s requirement to source talented professionals within a specific time frame for their most challenging projects or translating the needs and goals of our customers into reliable software where utility, ease of use and efficiency are key factors and where state-of-the-art technical solutions minimize both future operational costs and risks. As a result of our customer focused services, Prodesk is a highly successful IT & Engineering Manpower outsourcing company currently maintaining total 56 employee strength working fulltime from 3 different locations in Delhi-NCR.
            </div>
        </div>
            <button className='welcome-btn'>Find Out More</button>
    </div>
  )
}

export default Welcome