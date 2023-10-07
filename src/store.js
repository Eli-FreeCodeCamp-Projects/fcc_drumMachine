import { configureStore } from '@reduxjs/toolkit';
import drmMachineReducer from './features/drmMachine/drmMachineSlice.js';

export const store = configureStore({
    reducer: {
        drmMachine: drmMachineReducer
    }
})