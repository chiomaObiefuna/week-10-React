import { useState } from 'react';

function Counter () {
  const [count, setCount] = useState(0);
  return (
    <div className='my-counter'>
      <h2 className='Count-header'>Counter</h2>
      <p className='current-header'>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className='button'>Increment</button>
      <button onClick={() => setCount(count - 1)} className='button'>Decrement</button>
      <button onClick={() => setCount(0)} className='button'>Reset</button>
    </div>
  )
}

export default Counter