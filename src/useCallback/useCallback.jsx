import React, {useState, useCallback} from "react";
import PropTypes from "prop-types";

// Case. 함수 자체를 캐싱
// Callback 함수가 실행 될 때마다 ()=> setHide(true) 새로 생성
// button의 props인 함수가 새로 생성되면 props가 바뀌는 것이므로 리렌더링 됨
// 새로 생성되어야 할 상황이 아니라면 막아야 한다.

//Not useCallback
// const Callback = ({name, age, lang}) => {
//     const [hide, setHide] = useState(false);
//     return (
//         <div>
//             <span>저는 {lang} 전문 {name}입니다.</span>
//             {!hide && <span>{age}살 입니다.</span>}
//             <button onClick={()=> setHide(true)}>Hiding</button>
//         </div>
//     );
// };
//useCallback
const Callback =({name, age, lang}) => {
    const [hide, setHide] = useState(false);

    const onClickButton = useCallback(() => {
        setHide(true);
    },[])
    return (
        <div>
            <span>저는 {lang} 전문 {name}입니다.</span>
            {!hide && <span>{age}살 입니다.</span>}
            <button onClick={onClickButton}>Hiding</button>
        </div>
    );
};

Callback.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    lang: PropTypes.string,
};

Callback.defaultProps = {
    lang: 'JavaScript',
};

export default Callback;