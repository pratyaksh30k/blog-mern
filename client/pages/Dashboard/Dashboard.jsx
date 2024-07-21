import React, { useEffect, useState } from 'react'
import {useLocation} from "react-router-dom"
import DashSidebar from '../../src/components/DashSidebar';
import DashProfile from '../../src/components/DashProfile';

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if(tabFromUrl) setTab('profile');
    console.log(tabFromUrl);
  },[location.search]);
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSidebar/>
      </div>
      {/* Profile */}
      {tab==="profile" && <DashProfile/>}
    </div>
    
  )
}
