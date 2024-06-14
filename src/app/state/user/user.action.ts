import { createAction, createReducer, props } from "@ngrx/store";
import { IUserRes } from "src/app/model/user.interface";


export const saveUserOnStore = createAction('[user] Save user data on Store',props<{user:IUserRes}>());
export const deleteUserFromStore = createAction('[user] Delete user from store')
export const savePassword = createAction('[password] Save password',props<{password:string}>())
export const savePasswordSuccess = createAction('[password] save password Success',props<{password:string}>());
export const savePasswordFailure = createAction('[Password] Save Password Failure',props<{ error: any }>());
export const logout = createAction('[User] logout');
export const logoutSuccess =createAction('[user] Logout Success');