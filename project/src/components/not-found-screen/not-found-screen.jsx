import React from 'react';
import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <section style={{textAlign: 'center', padding: '40px'}}>
      <h1>
        404 Not Found
      </h1>
      <Link to='/'>Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
