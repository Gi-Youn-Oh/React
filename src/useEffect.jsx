import React, {useState, useEffect} from "react";

//Case Life-Cycle
//componentDidMount, componentDidUpdate, componentWillUnmount
//class 일 때
//constructor->render->Ref->componentDidMount->setState,props->shouldComponentUpdate->re-render->componentDidUpdate->(parent->child)->componentWillUnmount
//class일 때는 가로로 함수 컴포넌트 일때는 세로
//                        result, imgCoord, score
// componentDidMount
// componentDidUpdate
// componentWillUnmount
//useEffect는 데이터 개수에 따라 여러번 사용 <-> class는 컴포넌트당 한 번씩만

const Effect = () => {
    const [hidden, setHidden] = useState(false);
    //첫 렌더링 시 실행 후 hidden이 변경될 때 마다 실행
    useEffect(() => {
        console.log('hidden changed');
    }, [hidden]); // componentDidMount, componentDidUpdate

    useEffect(() => {
        console.log('hidden changed');
        return () => { // componentWillUnmount
         console.log('hidden이 바뀔 예정');
        };
    },[hidden]);

    // mount될 때 한번만 실행하고 싶다면? [] 빈 배열
    useEffect(() => {
        console.log('mounted');
        return () => {
            console.log('unmount');
        }
    },[])

    // re-rendering 마다 실행
    useEffect(() => {
        console.log('re-render');
    })
};