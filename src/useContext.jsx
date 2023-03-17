import React, {useState, useMemo, createContext} from 'react';
import Parent from './Parent';

//Case. props drilling
// ex (A -> B -> C -> D) <-> (A -> D)
// issue
// Provider value change? =>  useContext used All component re-render !!!!!
// solution?
// another Context, seperate component->memo
export const UserContext = createContext({ // 원하는 공유 데이터 초깃 값
   setLogIn: () => {},
   setLoading: () => {},
});

const GrandParent = () => {
    const [logIn, setLogIn] = useState(false);
    const [loading, setLoading] = useState(false);
    // value=객체, useMemo를 안하면 이 데이터를 사용하는 모든 컴포넌트가 매번 리렌더링
    const value = useMemo(() => ({setLogIn, setLoading}), [setLogIn, setLoading]);
    return (
        <UserContext.Provider value={value}>
            <Parent/>
            <div>{logIn ? '로그인' : '노 로그인'}</div>
            <div>{loading ? '로딩중' : '노 로딩'}</div>
        </UserContext.Provider>
    );
};

export  default GrandParent;