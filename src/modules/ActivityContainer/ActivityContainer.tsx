import React from 'react';
import { WishCard } from './components/WishCard';

import wishTest from '../../assets/wishTest.svg';

import './container.scss';

export const ActivityContainer = function() {
  return(
    <div className='activity-container'>
      <div className='card-container'>
        <WishCard costLevel={1} name="default image"/>
        <WishCard imgSrc={wishTest} costLevel={3} name="with image and loooooooooooong text"/>
      </div>

    </div>
  );
};
