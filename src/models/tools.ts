import {get_no_delete_tools} from "@/service/service";

export default {
    namespace: 'tools',
    state: {
        toolArr: null,
    },
    reducers: {
        setToolArr(state: any, {payload}: any) {
            state.toolArr = payload
            return state
        },
    },
    effects: {
        * getAllTools({payload}: any, {put, call}: any) {
            // @ts-ignore
            const res:any = yield call(get_no_delete_tools);
            yield put({type: 'setToolArr', payload: res})
        },
    },
    subscriptions: {
        setup({ dispatch}:any) {
            dispatch({type: 'getAllTools'});
        },
        setupHistory({dispatch,history}:any){
            history.listen(({location}:any) => {
                if(location.pathname == '/'){
                    dispatch({type: 'getAllTools'});
                }
            })
        }
    }
};
