import React from 'react';
import history from '../../routes/history';

function UserComponent() {
  return (
    <div>
        <button type="button" onClick={() => history.push('/user/1')}>Edit User</button> 
    </div>
  );
}

export default UserComponent;
