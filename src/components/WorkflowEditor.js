import React, { useState } from "react";
import "./WorkflowEditor.css";

const WorkflowEditor = ({ onCancel, onSave, workflow, availableActions }) => {

  // STATE INITIALIZATION
  const [localStages, setLocalStages] = useState(workflow.Stages); // Create a local copy of the workflow stages to allow modifications to be canceled without permanent change

  // Specify what data is being dragged
  const handleDragStart = (event, action) => {
    event.dataTransfer.setData("action", action);
  }

  // Allow drop event by preventing default handling of the element
  const handleDragOver = (event) => {
    event.preventDefault();
  }

  // Handler for dropping action into the Workflow Canvas
  const handleDrop = (event) => {
    event.preventDefault(); // Allow drop event by preventing default handling of the element
    const action = event.dataTransfer.getData("action"); // Retrieve action from drag event
    if (action) {
      const newStage = {
        id: Date.now(), // Generate a unique id using current timestamp
        action,
        isStart: localStages.length === 0, // If no stages exist in local stages, this becomes the start
        prevStage: localStages.length > 0 ? localStages[localStages.length - 1].id : null, // Check if there is a previous stage, otherwise null
        nextStage: null // Upon adding a new stage there can not be a next stage, thus keep it as null
      };

      // Copy current stages array to update it
      let updatedStages = [...localStages];
      if (updatedStages.length > 0) {
        // Update last stage's nextStage property to point to the new stage's id
        const lastIndex = updatedStages.length - 1;
        updatedStages[lastIndex] = {
          ...updatedStages[lastIndex],
          nextStage: newStage.id
        };
      }
      // Add the new stage to the updated stages array
      updatedStages.push(newStage);
      // Update the local state with the new stages array
      setLocalStages(updatedStages);
    }
  };

  // Handler for save button: passes localstages workflow back to parent component
  const handleSave = () => {
    onSave({...workflow, Stages: localStages });
  };

  const handleRemoveStage = (stageId) => {
    // Filter out the stage that was clicked
    let updatedStages = localStages.filter(stage => stage.id !== stageId);

    // Recalculate the stage relationships for the updated list
    updatedStages = updatedStages.map((stage, index) => ({
      ...stage,
      isStart: index===0,
      prevStage: index > 0 ? updatedStages[index - 1].id : null, // If not first, then grab the next element's index, otherwise null
      nextStage: index < updatedStages.length - 1 ? updatedStages[index + 1].id : null, // If not last, grab previous element's index, otherwise null
    }));

    // Update local state with the new list of stages
    setLocalStages(updatedStages);
  }

  return(
    <div className="workflow-editor">
      <h2>Workflow Editor</h2>
      <div className="workflow-editor__containers">
        {/* Left Panel: List of Available Actions */}
        <div className="available-actions">
        <h3 className="available-actions__title">Available Actions</h3>
        <ul className="available-actions__list">
          {availableActions.map((action, index) => (
            <li
              className="available-actions__item"
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, action)}
            >
              {action}
            </li>
          ))}
        </ul>
        </div>
        {/* Right Panel: Workflow Canvas */}
        <div 
          className="workflow-canvas"
          onDrop={handleDrop}
          onDragOver={handleDragOver}  
        >
        <h3 className="workflow-canvas__title">Workflow Canvas</h3>
        <div className="workflow-canvas__list">
          {localStages.map((stage) => (
            <div
              className="workflow-canvas__item"
              onClick={() => handleRemoveStage(stage.id)}
            >
              {stage.action}
            </div>
          ))}
        </div>
        </div>
      </div>
      <div className="workflow-editor__buttons">
        <button className="workflow-editor__save" onClick={handleSave}>Save</button>
        <button className="workflow-editor__cancel" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default WorkflowEditor;