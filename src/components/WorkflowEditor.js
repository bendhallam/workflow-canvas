import React, { useState } from "react";

const WorkflowEditor = ({ onCancel, workflow, availableActions }) => {
  return(
    <div className="workflow-editor">
      <h2>Workflow Editor</h2>
      <div className="workflow-editor__containers">
        {/* Left Panel: List of Available Actions */}
        <div className="available-actions">
        <h3>Available Actions</h3>
        <ul>
          {availableActions.map((action, index) => (
            <li>{action}</li>
          ))}
        </ul>
        </div>
        {/* Right Panel: Workflow Canvas */}
        <div className="workflow-canvas">
        <h3>Workflow Canvas</h3>
        <div>
          {workflow.Stages.map((stage) => (
            <div>
              {stage.action}
            </div>
          ))}
        </div>
        </div>
      </div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default WorkflowEditor;