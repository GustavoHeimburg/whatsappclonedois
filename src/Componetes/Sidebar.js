import React from "react";
import ChatIcon from '@mui/icons-material/Chat';

function Sidebar(){
    return(
       <div className='sidebar'>
           <div className='sidebar-header'>
            <div className='sidebar-header-img'>
                <img src="../../public/user.png"/>
            </div>
           </div>
       </div>
    );
}

export default Sidebar;