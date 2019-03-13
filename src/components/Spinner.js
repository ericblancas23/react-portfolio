import React from 'react';
import loader from '../img/loader.gif';

export default () => {
  return (
    <div>
      <img src={loader}
      alt="loading..."
      style={{ width: '700px', margin: ' 40px', display: 'block'}}
      />
    </div>
  )
}