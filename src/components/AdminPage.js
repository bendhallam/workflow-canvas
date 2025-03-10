import React from "react";
import "./AdminPage.css";


const AdminPage = ({onSetupWorkflow}) => {
  return(
    <div className="admin-page">
      <h2 className="admin-page__title">Admin Page</h2>
      <button className="admin-page__setup" onClick={onSetupWorkflow}>Setup Workflow</button>
    </div>
  )
}

export default AdminPage;
