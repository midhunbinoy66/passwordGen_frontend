export interface userRegister{
    userName:string
    email:string,
    password:string
}

export interface userLogin{
    email:string,
    password:string
}



export interface IUserRes{
    userName:string
    email:string
    storage:string[]
    _id:string,
}


export interface ApiLoginRes{
    message:string;
    data:IUserRes
}