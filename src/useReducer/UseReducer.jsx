// const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)

import React, { useReducer } from "react";

function reducer (state, action) {
    switch (action.type) {
        case "increase":
            return {count: state.count + action.step};
        case "decrease":
            return {count: state.count - action.step};
        default:
            throw new Error('undefinde Action Type', action.type);
    }
}

const initialState = {
    count: 0,
}
function Counter () {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "increase", step: 1 })}>증가</button>
            <button onClick = {() => dispatch({type: 'decrease', step: 1})}>감소</button>
        </>
    );
};

export default Counter;