export interface col {
    
    id: string,
    title: string,
    taskIds: string[],
}

export interface task {
    id: string;
    name: string;
    description: string;
    priority:number; 
}

export interface tasks {
    id : string;
}