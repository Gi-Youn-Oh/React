import React, {memo} from 'react';
import Child from './Child';

const Parent = memo(() => {
    return <Child />;
});

export default Parent;