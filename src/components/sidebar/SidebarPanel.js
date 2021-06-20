import React from 'react';

import { Link } from 'react-router-dom';
import { Sidebar } from 'primereact/sidebar';

function SidebarPanel(props) {
    
    const handleLogout = () => {
        props.setLogin(false);
        props.setVisibility(false); 
        localStorage.clear()
    }

    return (
        <Sidebar visible={props.visibility} position="left" onHide={() => props.setVisibility(false)} style={{
            zIndex: '1030'
        }}>
            <h5 className="mb-3 pl-1 theme-color" style={{  }}>Kasbai</h5>
            <div>
               <ul className="list-group mt-2" style={{listStyleType: "none"}}> 
               
                <Link 
                    to={ 
                        props.loginType === 'Admin'? 
                            '/home'
                        : 
                            '/donor' 
                    } 
                    style={{ textDecoration: 'none' , color: '#000' }}
                >
                    <li 
                        className="li-item" 
                        onClick={e => {
                            props.setVisibility(false)
                        }}  
                        style={{position: "relative"}}>
                        Home 
                    </li>
                </Link> 
                {
                    props.loginType === 'Admin' ?
                    <> 
                        <Link to='/approval' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={e => { 
                                    props.setVisibility(false)
                                }}  
                                style={{position: "relative"}}>
                                Approvals 
                            </li>
                        </Link>
                        <Link to='/user-management' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={e => {
                                    props.setVisibility(false)
                                }}  
                                style={{position: "relative"}}>
                                User Management 
                            </li>
                        </Link>
                        <Link to='/forms' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={e => {
                                    props.setVisibility(false)
                                }}  
                                style={{position: "relative"}}
                            >
                                Volunteer Forms
                            </li>
                        </Link>
                        <Link to='/donor' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={e => {
                                    props.setVisibility(false)
                                }}  
                                style={{position: "relative"}}>
                                Donor 
                            </li>
                        </Link>
                        <Link to='/profile' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={e => {
                                    props.setVisibility(false)
                                }}  
                                style={{position: "relative"}}>
                                Profile 
                            </li>
                        </Link>
                        <Link to='/dashboard' style={{ textDecoration: 'none' , color: '#000' }}>
                            <li 
                                className="li-item" 
                                onClick={() => {
                                    handleLogout()}}
                                style={{position: "relative"}}
                            >
                                Sign Out  
                            </li>
                        </Link>
                    </>
                    :
                    <Link to='/dashboard' style={{ textDecoration: 'none' , color: '#000' }}>
                        <li 
                            className="li-item" 
                            onClick={() => handleLogout()} 
                            style={{position: "relative"}}
                        >
                            Sign Out  
                        </li>
                    </Link>
                }
               </ul>
         </div>
        </Sidebar>
    );
}

export default SidebarPanel;