import { combineReducers, Reducer } from "redux";
import { ThreadsState } from "./thread/threads.reducer";
import { UsersState } from "./user/users.reducer";

export interface AppState {
    users: UsersState,
    threads: ThreadsState;
}

const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    users: UserReducer,
    threads: ThreadReducer
});

export default rootReducer;