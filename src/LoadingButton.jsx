import React, { memo } from "react";

const LoadingButton = memo((setLoad) => {
    console.log('로딩 버튼 렌더링');
    return (
        <button onClick={setLoad.onClick}>로그인</button>
    )
});

export default LoadingButton;