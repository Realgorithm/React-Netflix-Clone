/* eslint-disable no-lone-blocks */
import React from 'react';
import './Profile.css';
import ProfileData from '../../data/profiles.json';

function Profile({ children, random, ...restprops }) {
  const randomIndex = random;
  return (
    <div className="profile-header" {...restprops}>
      <div className="profile-menu">
        <div className="profile-menu-item">
          <img src={`./images/users/${random}.png`} alt="profile" />
          <h3>Tabish</h3>
        </div>
        {
            ProfileData.filter((_item, index) => index < randomIndex).map(item => (
              <div className="profile-menu-item" key={item.id}>
                {console.log({ random })}
                <img src={item.image} alt="profile" />
                <h3>{item.name}</h3>
              </div>
            ))
          }
      </div>
      <div className="profile-link">
        <a href="/browse">Account</a>
        <a href="/">Help center</a>
        <a href="/">Sign out of Netflix</a>
      </div>
    </div>
  );
}

export default Profile;
