import React, { useState } from "react";
import AdminPage from "./components/AdminPage";
import WorkflowEditor from "./components/WorkflowEditor";

function App() {
  // State to determine if workflow-editor is open
  const [editing, setEditing] = useState(false);

  const handleSetupWorkflow = () => {
    setEditing(true);
  };
  
  const handleCancel = () => {
    setEditing(false);
  }

  return (
    <div className="App">
      {editing ? (
        <WorkflowEditor 
          onCancel = {handleCancel}
        />
      ) : (
        <AdminPage 
          onSetupWorkflow={handleSetupWorkflow}
        />
      )}
    </div>
  );
};

export default App;
