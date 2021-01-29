import { createReducer, on } from '@ngrx/store';
import { addMovie } from '../actions/movie.action';
 
export const initialState = [];
 
const _movieReducer = createReducer(
  initialState,
  on(addMovie, (state:string[], {movieName} ) => {
      return [...state, movieName];
  })
);
 
export function movieReducer(state:any , action:any) {
  return _movieReducer(state, action);
}