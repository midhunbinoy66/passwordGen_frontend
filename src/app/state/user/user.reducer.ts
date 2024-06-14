import { Action, createReducer, on, props } from "@ngrx/store"
import { UserState, initialState } from "./user.state"
import { deleteUserFromStore, logoutSuccess, savePasswordFailure, savePasswordSuccess, saveUserOnStore } from "./user.action"
import { IUserRes } from "src/app/model/user.interface"

export const _userReducer = createReducer(initialState,
    on(saveUserOnStore,(state,{user})=>{
        console.log(user,'from reducer...')
        return {...state,user}
    }),
    on(deleteUserFromStore,(state)=>{
        return {...state,user:null}
    }),

    on(savePasswordSuccess,(state,{password})=>
        {
            if(state.user){
                const passwordExits = state.user.storage.includes(password);

                if(!passwordExits){
                    const updatedUser:IUserRes ={
                        ...state.user,
                        storage:[...state.user.storage,password]
                    };
                    return {...state,user:updatedUser}
                }

            }
        return state
        }),

        on(savePasswordFailure, (state, { error }) => ({
            ...state,
            error,
          })),

        on(logoutSuccess,state=>({
            ...state,
            user:null
        }))
)


export function userReducer(state:UserState |undefined ,action:Action){
    return _userReducer(state,action)
}