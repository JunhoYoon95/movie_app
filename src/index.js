import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));  
// React는 component 를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
// JavaScript와 HTML 사이의 이러한 조합을 jsx 라고 부른다. -> react에서 나온 매우 custom한 유일한 개념이다.

// React application은 하나의 component 만을 redering 해야 한다. 그 component가 저 위의 <APP />이고, 저기가 <APP /> <Potato /> 이런 식으로 1개가 아니면 안된다는 소리야
