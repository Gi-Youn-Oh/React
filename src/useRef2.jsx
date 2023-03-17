import React, {useRef, useCallback} from 'react';

//Case2. 리렌더링과 관련없는 데이터를 저장할 때
// 리렌더링 여부와 상관없이 같은 값 유지, useRef 값 변하더라도 리렌더링 되지 않는다.
let data = 0; // Test 컴포넌트를 여러개 사용하면 data를 공유하게 된다.
// const Test = () => {
//     // let data = 0; 리렌더링 될 때 초기화 된다.
//     const onClick = useCallback(() => {
//         data ++;
//         console.log(data);
//     }, [data]);
//     return <div><button onClick={onClick}>{data}</button></div>
// }

//useRef 사용하면
const Test = () => {
    const dataRef = useRef(0);
    const onClick = useCallback(() => {
       dataRef.current++;
       console.log(dataRef);
    }, []);
    return <div><button onClick={onClick}>{data}</button></div>
};
export default Test;