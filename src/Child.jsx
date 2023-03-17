import React, {memo, useContext, useCallback} from 'react';
import {UserContext} from './useContext';
import LogButton from "./LogButton";
import LoadingButton from "./LoadingButton";

// A -> C
// const Child = () => {
//   const {setLogIn, setLoading} = useContext(UserContext);
//   return (
//       <>
//         <button onClick={() => setLogIn((prev) => !prev)}>로그인</button>
//           <button onClick={() => setLoading((prev) => !prev)}>로딩</button>
//       </>
//   )
// }

// 최적화 연습
const Child = memo(() => {
    const {setLogIn, setLoading} = useContext(UserContext);

    const setLog = useCallback(() =>{
        setLogIn((prev) => !prev);
    }, []);

    const setLoad = useCallback(() => {
        setLoading((prev) => !prev);
    }, [])
    return (
        <>
            <LogButton onClick={setLog}/>
            <LoadingButton onClick={setLoad} />
        </>
    )
});

export default Child;

