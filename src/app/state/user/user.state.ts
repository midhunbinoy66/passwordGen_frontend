import { createReducer, on } from "@ngrx/store";
import { IUserRes } from "src/app/model/user.interface";
import { deleteUserFromStore, saveUserOnStore } from "./user.action";




export interface UserState{
    user:IUserRes | null;
}

export const initialState:UserState ={
    user:null
}

