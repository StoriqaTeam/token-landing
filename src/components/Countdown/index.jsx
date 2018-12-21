/* eslint-disable max-len */

import React from 'react';
import CountDown from 'react-simple-countdown';
import {withTranslate} from 'react-redux-multilingual';
import {ICOStart, started} from 'helpers/constants';
import classNames from 'classnames';

import './styles.sass';

const Countdown = ({translate, stageName, dataEnds, withoutText}) => {
  const messages = translate('countdown');
  const onFinish = () => location.reload();

  return (
    <div className="countdown-wrapper text-white">
      <span className="stage-text d-block text-white open-sans-semibold">{stageName}</span>
      {dataEnds &&
        <CountDown
          date={dataEnds}
          className={classNames({'without-text': withoutText, countdown: true})}
          onEnd={onFinish}
          {...messages}
        />
      }
      {/* !stageName && <span className="d-block text-white text">$1&nbsp;500&nbsp;000 raised during&nbsp;Pre&nbsp;Token&nbsp;sale</span> */}
    </div>
  );
};

export default withTranslate(Countdown);
