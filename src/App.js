import React, { useState } from "react";
import AdminPage from "./components/AdminPage";
import WorkflowEditor from "./components/WorkflowEditor";
import { availableActions, initialWorkflow } from "./data";

function App() {
  // STATE INITIALIZATION
  const [editing, setEditing] = useState(false); // Determines if editor is open or not
  const [workflow, setWorkflow] = useState(initialWorkflow); // Determines current workflow

  // BUTTON HANDLERS
  // Setup Workflow Button
  const handleSetupWorkflow = () => {
    setEditing(true);
  };
  // Cancel Button
  const handleCancel = () => {
    setEditing(false);
  }
  // Save Button
  const handleSave = (newWorkFlow) => {
    setWorkflow(newWorkFlow);
    setEditing(false)
  }

  return (
    <div className="App">
      {editing ? (
        <WorkflowEditor 
          workflow={workflow}
          availableActions={availableActions}
          onCancel={handleCancel}
          onSave={handleSave}
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
