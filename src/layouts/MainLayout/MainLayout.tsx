import { Outlet } from "react-router-dom";
import './MainLayout.css';

export const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="topbar">Topbar</div>
      <div className="content"><Outlet /></div>
    </div>
  )
}
