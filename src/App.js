// 함수 컴포넌트로 정적 데이터 출력하기

import React from 'react';
import PropTypes from 'prop-types';

const listOfFood = [
  {
    name: 'kimchi',
    image: ""
  },
  {
    name: 'ramen',
    image: ""
  },
  {
    name: 'ggochi',
    image: ""
  }
]

function Food({name, img}) {
  return (
  <div>
      <h2>I like {name}</h2>
      <img src={img} alt={name}></img>
  </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {listOfFood.map(food => {
        return(<Food
          key={food.name}
          name={food.name}
          img={food.image}
        />
        )
      })}
    </div>
  )
}

export default App;
