import React from 'react'
import logo from '../images/Group 5750.png'
import SidebarOptions from '../utility/SidebarOptions'
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import InsertChartOutlinedTwoToneIcon from '@material-ui/icons/InsertChartOutlinedTwoTone';

function Leftbar() {
  return (
    <div className="leftbar">
      <div className="profile">
      <div className="profile-left">
        <img src={logo} alt="sarah"/>
      </div>
      <div className="profile-right">
        <p>Sarah Cody</p>
        <span>sarah@gmail.com</span>
      </div>
      </div>
      <div className="sidebarOption">

      <SidebarOptions Icon={DashboardOutlinedIcon} text="Dashboard"/>
      <SidebarOptions active Icon={SmsOutlinedIcon} text="People"/>
      <SidebarOptions Icon={PeopleAltOutlinedIcon} text="User Groups"/>
      <SidebarOptions Icon={InsertChartOutlinedTwoToneIcon} text="Transaction"/>
      </div>
     
    </div>
  )
}

export default Leftbar
