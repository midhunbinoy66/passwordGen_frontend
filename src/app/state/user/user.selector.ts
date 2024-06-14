import { createAction, createFeatureSelector, createSelector, props } from "@ngrx/store";
import { UserState } from "./user.state";


export const selectUserState = createFeatureSelector<UserState>('user');
export const selectUserDetails = createSelector(selectUserState,(state:UserState)=>state.user);
