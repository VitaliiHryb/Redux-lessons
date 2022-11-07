import React from 'react';
import UsersList from './UsersList';

function User({ name, age }) {
  return (
    <li className="user">
      <span className="user__name">{name}</span>
      <span className="user__age">{age}</span>
    </li>
  );
}

export default User;

/*
<div>
  <Filter someProps={...props} />
  <ul class="users">
    {UsersList.map(user => (
      <User key={user.id} {...user} />
    ))}
  </ul>
</div>;
*/

/*
<div>
  <div class="filter">
    <span class="filter__count">5</span>
    <input type="text" class="filter__input" value="a">
  </div>
  <ul class="users">
    <li class="user"><span class="user__name">Tad</span><span class="user__age">18</span></li>
    <!-- ... -->
    <li class="user"><span class="user__name">Anna</span><span class="user__age">45</span></li>
  </ul>
</div>
*/
