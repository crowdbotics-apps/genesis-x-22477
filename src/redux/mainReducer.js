import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp22170444Reducer from '../features/SignUp22170444/redux/reducers'
import Dashboard23170443Reducer from '../features/Dashboard23170443/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp22170444: SignUp22170444Reducer,
Dashboard23170443: Dashboard23170443Reducer,

});