import { combineReducers, Reducer } from "redux";
import { ThreadReducer, ThreadsState } from "./thread/threads.reducer";
import { UsersReducer, UsersState } from "./user/users.reducer";

export interface AppState {
    users: UsersState,
    threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UsersReducer,
    threads: ThreadReducer
});

export default rootReducer;