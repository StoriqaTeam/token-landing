/* eslint-disable max-len */

import React, {PureComponent} from 'react';
import RC2 from 'react-chartjs2';
import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/zh-cn';
import 'moment/locale/ko';
import 'moment/locale/ja';
import 'moment/locale/es';
import 'moment/locale/en-gb';
import {withTranslate} from 'react-redux-multilingual';
import {DarkenedBlock} from 'components/common';
import {find, findIndex} from 'lodash';
import MediaQuery from 'react-responsive';

import './styles.sass';

const dataDefaults = {
  labels: [],
  datasets: [
    {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(179, 179, 179, 0.06)',
      borderColor: '#2FBAFD',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [],
    }
  ]
};

class TokenPriceChart extends PureComponent {
  render() {
    const {ICOMainInfo} = this.props;
    const {ico_stages: stages, current_stage_id: currentStage} = ICOMainInfo;
    const stage = find(ICOMainInfo.ico_stages, {'id': ICOMainInfo.current_stage_id});
    const {translate} = this.props;
    const lang = translate('token_price_chart.lang');

    const x = new Date();
    // Значение смещения текущего часового пояса в часах
    const currentTimeZoneOffsetInHours = -x.getTimezoneOffset() / 60;

    if (!stages) return null;

    const startDate = new Date(2017, 10, 28, currentTimeZoneOffsetInHours + 9);
    const endDate = new Date(2018, 1, 13, currentTimeZoneOffsetInHours + 9);

    const actualStages = [];
    let currentItem;

    for (let i = startDate; i <= endDate; startDate.setDate(startDate.getDate() + 1)) {
      const item = find(stages, {'date_start': i.toISOString()});

      if (item) {
        currentItem = item;
      }

      actualStages.push({
        'date_start': i.toISOString(),
        'coin_price': currentItem.coin_price,

        'bonus_preferences': [
          {'bonus_percent': currentItem.bonus_preferences[0] ? currentItem.bonus_preferences[0].bonus_percent : 5}
        ]
      });
    }

    actualStages.push({
      'date_start': new Date(2018, 2, 1, 12).toISOString(),
      'coin_price': 0.03,
      'bonus_preferences': [
        {'bonus_percent': 0}
      ],
    });

    let stageIndex;
    let stagePrice;

    if (stage) {
      stageIndex = findIndex(actualStages, {'date_start': stage.date_start});
      stagePrice = stage.coin_price;
    }

    dataDefaults.labels = actualStages.map(item => moment(item.date_start).format('DD.MM.YY'));
    dataDefaults.datasets[0].data = actualStages.map(item => item.coin_price);

    return (
      <div className="token-price-chart">
        <DarkenedBlock>
          <div className="token-price-chart--chart">
            <div className="token-price-chart--chart-title">
              {translate('token_price_chart.price_model')}
            </div>
            <div className="token-price-chart--chart-wrapper">
              {stageIndex && <MediaQuery minWidth={576} maxWidth={767}>
                <div className="line" style={{
                  width: `calc(92px + ${0.924 * stageIndex}%)`,
                }}>
                  <div className="data text-white text-right pr-2">
                    {moment(actualStages[stageIndex].date_start).locale(lang).format('D MMMM YYYY')}<br />
                    {translate('token_price_chart.token_price')} ${stage.coin_price}<br />
                    {translate('token_price_chart.bonus')}&nbsp;
                    {stage.bonus_preferences[0] ? stage.bonus_preferences[0].bonus_percent : 5}%
                  </div>
                  <div className="circle" style={{
                    bottom: `${5250 * stagePrice - 7}px`
                  }} />
                </div>
              </MediaQuery>}

              {stageIndex && <MediaQuery minWidth={768} maxWidth={991}>
                <div className="line" style={{
                  width: `calc(78px + ${1.065 * stageIndex}%)`,
                }}>
                  <div className="data text-white text-right pr-2">
                    {moment().locale(lang).format('D MMMM YYYY')}<br />
                    {translate('token_price_chart.token_price')} ${stage.coin_price}<br />
                    {translate('token_price_chart.bonus')}&nbsp;
                    {stage.bonus_preferences[0] ? stage.bonus_preferences[0].bonus_percent : 5}%
                  </div>
                  <div className="circle" style={{
                    bottom: `${8290 * stagePrice - 7}px`
                  }} />
                </div>
              </MediaQuery>}

              {stageIndex && <MediaQuery minWidth={992} maxWidth={1199}>
                <div className="line" style={{
                  width: `calc(78px + ${1.1245 * stageIndex}%)`,
                }}>
                  <div className="data text-white text-right pr-2">
                    {moment().locale(lang).format('D MMMM YYYY')}<br />
                    {translate('token_price_chart.token_price')} ${stage.coin_price}<br />
                    {translate('token_price_chart.bonus')}&nbsp;
                    {stage.bonus_preferences[0] ? stage.bonus_preferences[0].bonus_percent : 5}%
                  </div>
                  <div className="circle" style={{
                    bottom: `${12300 * stagePrice - 7}px`
                  }} />
                </div>
              </MediaQuery>}

              {stageIndex && <MediaQuery minWidth={1200}>
                <div className="line" style={{
                  width: `calc(78px + ${1.096 * stageIndex}%)`,
                }}>
                  <div className="data text-white text-right pr-2">
                    {moment().locale(lang).format('D MMMM YYYY')}<br />
                    {translate('token_price_chart.token_price')} ${stage.coin_price}<br />
                    {translate('token_price_chart.bonus')}&nbsp;
                    {stage.bonus_preferences[0] ? stage.bonus_preferences[0].bonus_percent : 5}%
                  </div>
                  <div className="circle" style={{
                    bottom: `${10200 * stagePrice - 7.4}px`
                  }} />
                </div>
              </MediaQuery>}

              <RC2
                data={dataDefaults}
                options={{
                  showAllTooltips: true,
                  tooltips: {
                    callbacks: {
                      afterBody: (items, data) => {
                        const {datasets: {data: sourceData}} = data;
                        const idx = items[0].index;
                        const bonus = actualStages[idx];
                        let bonusValue;

                        if (bonus.bonus_preferences[0]) {
                          bonusValue = bonus.bonus_preferences[0].bonus_percent;
                        } else {
                          let currentIndex = idx;
                          while (!ICOMainInfo.ico_stages[currentIndex].bonus_preferences[0]) {
                            currentIndex -= 1;
                          }
                          const prevBonus = ICOMainInfo.ico_stages[currentIndex];
                          bonusValue = prevBonus.bonus_preferences[0].bonus_percent;
                        }

                        return `${translate('token_price_chart.bonus')} ${bonusValue}%`;
                      },
                      labelTextColor: () => '#000',
                      title: (items) => {
                        const idx = items[0].index;

                        return moment(actualStages[idx].date_start).locale(lang).format('D MMMM YYYY');
                      },
                      label: ({yLabel}) => `${translate('token_price_chart.token_price')} $${yLabel}`,
                    },
                    backgroundColor: '#F4F4F4',
                    titleFontFamily: 'Open_Sans',
                    bodyFontFamily: 'Open_Sans',
                    titleFontSize: 14,
                    bodyFontSize: 14,
                    titleFontColor: '#000',
                    xPadding: 15,
                    yPadding: 15,
                    bodySpacing: 5,
                    displayColors: false,
                  },
                  legend: {
                    display: false,
                    labels: {
                      fontFamily: 'Open_Sans',
                      fontColor: '#fff',
                      fontSize: 12,
                    },
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }}
                type='line' />
            </div>
          </div>
          <div className="token-price-chart--info">
            <div className="token-price-chart--info--title">
              {translate('token_price_chart.next_steps')}
            </div>
            <div className="token-price-chart--info--wrapper">
              <div className="inner-section-1">
                <span className="token-price-chart--info--month">{translate('token_price_chart.section_1.title')}</span>
                <br/>
                <span className="token-price-chart--info--text">
                {translate('token_price_chart.section_1.text', null, true)}<br/>
              </span>
                <a href="https://www.facebook.com/hit.btc/posts/732560646929887" target="_blank">HitBTC tweet</a>
              </div>
              <div className="inner-section-2">
                <span className="token-price-chart--info--month">{translate('token_price_chart.section_2.title')}</span>
                <br/>
                <span className="token-price-chart--info--text">
                  {translate('token_price_chart.section_2.text', null, true)}
                </span>
              </div>
            </div>
          </div>
        </DarkenedBlock>
      </div>
    );
  }
}

export default withTranslate(TokenPriceChart);
