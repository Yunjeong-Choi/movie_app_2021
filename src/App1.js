//class 컴포넌트로 동적데이터 출력하기

import React from 'react';

class App extends React.Component {
    state = {
        count:0
    }
    
    //state를 바꿔줄 뿐만 아니라, state가 바뀌면 render도 재실행 되도록 해주는 방법은?
    // -> setState 사용, react는 current를 함수형태로 사용할 수 있게 해줌.
    add = () => {
        this.setState(current => ({count: current.count +1}))
    }

    minus = () => {
        this.setState(current => ({count: current.count -1}))
    }

    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>                
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
