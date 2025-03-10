import React, { useState } from "react";
import AdminPage from "./components/AdminPage";
import WorkflowEditor from "./components/WorkflowEditor";
import { availableActions, initialWorkflow } from "./data";

function App() {
  // State to determine if workflow-editor is open
  const [editing, setEditing] = useState(false);
  const [workflow, setWorkflow] = useState(initialWorkflow);

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
          workflow={workflow}
          availableActions={availableActions}
          onCancel={handleCancel}
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
