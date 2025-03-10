import React, { useState } from "react";

const WorkflowEditor = ({ onCancel }) => {
  return(
    <div className="workflow-editor">
      <h2>Workflow Editor</h2>
      <div className="workflow-editor__containers">
        <div className="available-actions">
          Available Actions
        </div>
        <div className="workflow-canvas">
          Workflow Canvas
        </div>
      </div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default WorkflowEditor;