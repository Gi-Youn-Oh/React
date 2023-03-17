import React, {useRef, useEffect} from 'react';

// Case3. useEffect에서 componentDidUpdate 처럼 사용하기
//  UseEffect에서는 componentDidmount, componentDidUpdate 같이 실행되지만 mount를 무시한다.
const RefAsDidUpdate = () => {
    const mountRef = useRef(false);
    useEffect(() => {
        if(mountRef.current){  //초기값이 false이기 때문에  if문이 동작하지 않는다.
            console.log('updated!');
        }else{
            mountRef.current = true; // 다음 리렌더링에서는 동작하게 바꾼다.
        }
    });
    return <div>Ref</div>
};

export default RefAsDidUpdate;