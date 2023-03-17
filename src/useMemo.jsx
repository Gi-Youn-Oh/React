import React, {useState, useMemo} from 'react';

//useMemo(() => 값, []); 값을 저장 (데이터, 함수도 가능)
//Case 연산비용이 복잡한 함수의 값 캐싱

function getLottoNumber() {
    console.log('getNumber');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const randomNum = [];
    while (candidate.length > 0){
        randomNum.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
    }
    const bonusNum = randomNum[randomNum.length -1];
    const lottoNum = randomNum.slice(0,6).sort((a, b) => b - a);
    return [...lottoNum, bonusNum]; //스프레드 연산자로 얕은 복사 (불변성 유지)
};

// Not useMemo
// const Lotto = () => {
//     const [lotto, setLotto] = useState(getLottoNumber()); // 컴포넌트 리렌더링 마다 함수 호출
//     // const [lotto, setLotto] = useState(getLottoNumber); lazy init 함수 자체를 전달하면 한번만 렌더링
//     return <div>{lotto.join(',')}</div>
// };
// useMemo
const Lotto = () => {
    const cacheNum = useMemo(() => getLottoNumber(), []);
    const [lotto, setLotto] = useState(cacheNum); // 컴포넌트 리렌더링 마다 함수 호출
    // const [lotto, setLotto] = useState(getLottoNumber); lazy init 함수 자체를 전달하면 한번만 렌더링
    return <div>{lotto.join(',')}</div>
};

export default Lotto;