import './styles/normal-layout.scss'

import SiteLogoWithText from '../../components/SiteLogoWithText/SiteLogoWithText'
import {Outlet} from 'react-router-dom'

function NormalLayout() {
  return (
    <div className='normal-layout'>
      <div className='layout-header'>
        <SiteLogoWithText />
      </div>
      <div className='layout-content'>
        <div className='layout-siderbar'>Sidebar Menu</div>
        <div className='layout-body'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default NormalLayout
