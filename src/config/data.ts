const initialData = {
    tasks : {
        "task-1": { id : "task-1", name:"Task 1", description: "Premiere tache", priority:1},
        "task-2": { id : "task-2", name:"Task 2", description: "Seconde tache", priority:1},
        "task-3": { id : "task-3", name:"Task 3", description: "Troisieme tache", priority:1},
        "task-4": { id : "task-4", name:"Task 4", description: "Quatrieme tache", priority:1},
    },
    columns : {
        "column-1": {
            id: "column-1",
            title: "To Do",
            taskIds: ["task-1", "task-2", "task-3"],
        },
        "column-2": {
            id: "column-2",
            title: "En cours",
            taskIds: [],
        },
        "column-3": {
            id: "column-3",
            title: "Terminées",
            taskIds: ["task-4"],
        },
    },
    columnOrder: ["column-1","column-2","column-3"],

}

export default initialData;