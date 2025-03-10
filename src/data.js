export const availableActions = [
  "Import",
  "Export",
  "Sort",
  "Extract",
  "Split"
]


export const initialWorkflow = {
  id: "bU4rMI7fEeeqxlvy4NOyyA==",
  ProjectId: "bOd74o7fEeeqxlvy4NOyyA==",
  AcctId: "GVb1w0skuUKO+FfzgvG+JA==",
  Stages: [
    {
      id: 1,
      action: "Import",
      isStart: true,
      prevStage: null,
      nextStage: 2
    },
    {
      id: 2,
      action: "Sort",
      isStart: false,
      prevStage: 1,
      nextStage: 3
    },
    {
      id: 3,
      action: "Extract",
      isStart: false,
      prevStage: 2,
      nextStage: 4
    },
    {
      id: 4,
      action: "Export",
      isStart: false,
      prevStage: 3,
      nextStage: null
    }
  ]
}