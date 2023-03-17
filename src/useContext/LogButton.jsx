import React, { memo } from "react";

const LogButton = memo((setLog) => {
    console.log('로그인 버튼 렌더링');
    return (
        <button onClick={setLog.onClick}>로그인</button>
    )
});

export default LogButton;