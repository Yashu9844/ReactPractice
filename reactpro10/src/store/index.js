import { configureStore } from "@reduxjs/toolkit";

import modalreducer  from './modal.js'
export const store = configureStore({
    reducer:{
        modal:modalreducer
    }
})