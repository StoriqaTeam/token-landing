import React from 'react';

import {Title} from 'components/common';

import Slider from './Slider';
import './styles.sass';

const MediaSection = (props) => (
  <div className="media-section" id="about">
    <Slider />
  </div>
);

export default MediaSection;
