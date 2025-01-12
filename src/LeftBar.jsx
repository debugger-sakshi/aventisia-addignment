import React, { Children } from 'react'
import Aventisia from './assets/images/Aventisia.png'
import Dashboard from './assets/images/dashboard.png'
import Support from './assets/images/support.png'
import Model from './assets/images/model.png'
import Test from './assets/images/test.png'
import White from './assets/images/whiteDashboard.png'
import Settings from './assets/images/setting.png'
import Blue from './assets/images/bluearrow.png'
import SidebarItem from './SidebarItem'
const LeftBar = () => {

  return (
    <aside className='h-screen w-1/4'>
      <nav className='h-full flex flex-col bg-white border-r shadow-sm'>
        <div className="p-4 pb-2 flex justify-between items-center bg-gray-50 relative">
          <img className="w-32" src={Aventisia} alt="Aventisia" />
          <button className='w-3 h-5 absolute top-6 right-0 bg-white'><img className='h-4 w-2 ' src={Blue} /></button>
        </div>

        <ul className='flex-1 px-3 bg-white'>
          <h4 className='text-sm text-black font-semibold my-4'>Modal Library</h4>
          <SidebarItem
            icon={<img className='w-4' src={White} alt="dashboard" />}
            text={"Modal Library"}
            active={true}
          />
          <SidebarItem icon={<img className='w-4' src={Dashboard} alt="dashboard" />} text="Dashboard" />
          <h4 className='text-sm text-black font-semibold my-4'>Extraction Builder</h4>
          <SidebarItem
            icon={<img className='w-4' src={Dashboard} alt="dashboard" />}
            text={"Label Data"}
            // active={true}
          />
          <SidebarItem icon={<img className='w-4' src={Model} alt="model" />} text="Model" />
          <SidebarItem icon={<img className='w-4' src={Test} alt="test" />} text="Test" />
          <h4 className='text-sm text-black font-semibold my-4'>Help</h4>
          <SidebarItem icon={<img className='w-4' src={Settings} alt="dashboard" />} text="Settings" />
          <SidebarItem
            icon={<img className='w-4' src={Support} alt="dashboard" />}
            text={"Support"}
            // active={true}
          />

        </ul>
      </nav>
    </aside>
  )
}

export default LeftBar
