import { INCREMENT, DECREMENT } from '@actionTypes/counterActionTypes';

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
