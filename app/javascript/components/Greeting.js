import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRandomGreeting, getGreetingData } from '../redux/greeting/greetingSlice';

function Greeting() {

  const dispatch = useDispatch();
  const object = useSelector((state) => state.greetingReducer);
  const greeting = useSelector((state) => state.greetingReducer.text);
  useEffect(() => {
    if(greeting === undefined) {
      dispatch(getGreetingData());
    }
  }, []);
  console.log(object)
  return (
    <div>
      <h1>Hello, this is the randomized greeting:</h1>
      <h2>{greeting}</h2>
    </div>
  )
}

export default Greeting;