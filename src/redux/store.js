import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-slice';
import rootReducer from './root-reducer';




const store = configureStore({ 
    reducer: {
        auth: authReducer
    },

})


export default store