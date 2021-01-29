import { createAction, props } from "@ngrx/store";

export const addMovie = createAction(
    'ADD_MOVIE', 
    props<{ movieName: string; }>()
);