import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PasswordGeneratorService } from "src/app/services/password-generator.service";
import { savePassword, savePasswordFailure, savePasswordSuccess } from "./user.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { Injectable } from "@angular/core";


@Injectable()
export class UserEffects{
    constructor(
        private action$:Actions,
        private userService:UserService
    ){}

    savePassword$= createEffect(()=>
    this.action$.pipe(
        ofType(savePassword),
        mergeMap(action=>
            this.userService.savePassword(action.password).pipe(
                map(()=>savePasswordSuccess({password:action.password})),
                catchError(error=>of(savePasswordFailure({error})))
            )
        )
    )
    )
}