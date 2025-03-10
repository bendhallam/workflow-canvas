import React from "react";

const AdminPage = ({onSetupWorkflow}) => {
  return(
    <div>
      <h2>Admin Page</h2>
      <button onClick={onSetupWorkflow}>Setup Workflow</button>
    </div>
  )
}

export default AdminPage;
