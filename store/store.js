import { createStore, combineReducers } from 'redux';

// Define your actions, reducers, and selectors in respective directories

const rootReducer = combineReducers({
    // Combine reducers here
});

const store = createStore(rootReducer);

export default store;
