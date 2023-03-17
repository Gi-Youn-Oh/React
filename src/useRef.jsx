import React, {useRef, useState} from 'react';

//Case1. useRef 이용하여 특정 DOM 참조
function RefTest () {
    const [input, setInput] = useState({username: '', nickname: ''});

    const inputName = useRef();
    const {username, nickname } = input;

    const onChangeInput = (e) => {
        const {name, value} = e.target;
        setInput({...input, [name]: value});
    };

    const onReset = () => {
        setInput({username: '', nickname: ''})
        inputName.current.focus(); //해당하는 컴포넌트 참조 ref={inputName}을 가지고 있는 컴포넌트가 참조 된다.
    };

    return (
        <>
            <input name={'username'} placeholder={'이름'} onChange={onChangeInput} value={username} ref={inputName}/>
            <input name={"nickname"} placeholder={'닉네임'} onChange={onChangeInput} value={nickname}/>
            <button onClick={onReset}>Reset</button>
        </>
    )
}

export  default RefTest;

