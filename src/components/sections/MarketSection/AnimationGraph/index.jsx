/* eslint-disable max-len */

import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {withTranslate} from 'react-redux-multilingual';

import './styles.sass';

class AnimationGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isFF: false,
      scroll: 0,
      animate: false,
      isAnimation: false,
      animateOptions: {
        attributeName: 'transform',
        attributeType: 'XML',
        type: 'translate',
        dur: '2s',
        repeatCount: '1',
        fill: 'freeze',
        calcMode: 'spline',
        keySplines: '0.1 0.7 0.2 1;0.1 0.7 0.2 1;0.1 0.7 0.2 1;0.1 0.7 0.2 1;0.1 0.7 0.2 1;0.1 0.7 0.2 1',
        keyTimes: '0;0.22;0.33;0.55;0.66;0.88;1'
      },
      animateOptionsFF: {
        attributeName: 'transform',
        attributeType: 'XML',
        type: 'translate',
        dur: '1s',
        repeatCount: '1'
      }
    };
  }

  componentWillMount() {
    document.addEventListener('scroll', this.scrollHandler.bind(this));

    this.getNameBrowser();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollHandler.bind(this));
  }

  getNameBrowser() {
    if (navigator.userAgent.search(/Firefox/) > 0) {
      this.setState({isFF: true});
    }
  }

  scrollHandler() {
    const {isAnimation} = this.state;
    const scroll = document.documentElement.scrollTop;

    const {svg, Line7, Line8, Line9, Line10, Line12, Line13, _900, _1_100, _1_490, _1_850, _2_000, _2_240} = this.refs;

    if (!svg) return;

    const svgDOM = findDOMNode(svg);
    const Line7DOM = findDOMNode(Line7);
    const Line8DOM = findDOMNode(Line8);
    const Line9DOM = findDOMNode(Line9);
    const Line10DOM = findDOMNode(Line10);
    const Line12DOM = findDOMNode(Line12);
    const Line13DOM = findDOMNode(Line13);
    const _900DOM = findDOMNode(_900);
    const _1_100DOM = findDOMNode(_1_100);
    const _1_490DOM = findDOMNode(_1_490);
    const _1_850DOM = findDOMNode(_1_850);
    const _2_000DOM = findDOMNode(_2_000);
    const _2_240DOM = findDOMNode(_2_240);

    const box = svgDOM.getBoundingClientRect();
    const clientHeight = document.documentElement.clientHeight;
    const offsetHeight = box.bottom - box.top;

    const top = box.top + scroll;

    if (((scroll + clientHeight) > top + offsetHeight * 0.8) && !isAnimation) {
      this.setState({isAnimation: true});

      Line7DOM.beginElement();
      Line8DOM.beginElement();
      Line9DOM.beginElement();
      Line10DOM.beginElement();
      Line12DOM.beginElement();
      Line13DOM.beginElement();
      _900DOM.beginElement();
      _1_100DOM.beginElement();
      _1_490DOM.beginElement();
      _1_850DOM.beginElement();
      _2_000DOM.beginElement();
      _2_240DOM.beginElement();
    }
  }

  _renderSVGIcon() {
    const {translate} = this.props;
    const {isAnimation, animateOptions, animateOptionsFF, isFF} = this.state;

    return (
      <svg ref="svg" id='Group_133' xmlns='http://www.w3.org/2000/svg' viewBox='-20 143 1044 540'>
        <line id='Line_2' className='cls-2' x1='851.3' transform='translate(104.12 277.367)' />
        <line id='Line_3' className='cls-2' x1='851.3' transform='translate(104.12 355.609)' />
        <line id='Line_4' className='cls-2' x1='851.3' transform='translate(104.12 431.299)' />
        <line id='Line_5' className='cls-2' x1='851.3' transform='translate(104.12 509.54)' />
        <line id='Line_6' className='cls-3' x1='851.3' transform='translate(104.12 585.23)' />
        <text id='_2500' className='cls-4 ani' transform='translate(133.003 266.728)'>
          <tspan x='-18.297' y='0'>2500</tspan>
        </text>
        <text id='_2013' className='cls-4' transform='translate(241 612.86)'>
          <tspan x='-18.297' y='0'>2013</tspan>
        </text>

        <text id='_900' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(241 ${isFF ? 471.86 : 574})`}>
          <tspan x='-13.699' y='0'>900</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_900" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_900"
            from="241 574"
            to="241 471.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_900"
            xlinkHref="#_900"
            from="241 574"
            to="241 471.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>
        <text id='_1_100' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(365 ${isFF ? 439.86 : 574})`}>
          <tspan x='-20.344' y='0'>1 100</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_1_100" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_1_100"
            from="365 574"
            to="365 439.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_1_100"
            xlinkHref="#_1_100"
            from="365 574"
            to="365 439.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>
        <text id='_1_490' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(489 ${isFF ? 387.86 : 574})`}>
          <tspan x='-20.344' y='0'>1 490</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_1_490" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_1_490"
            from="489 574"
            to="489 387.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_1_490"
            xlinkHref="#_1_490"
            from="489 574"
            to="489 387.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>
        <text id='_1_850' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(613 ${isFF ? 359.86 : 574})`}>
          <tspan x='-20.344' y='0'>1 850</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_1_850" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_1_850"
            from="613 574"
            to="613 359.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_1_850"
            xlinkHref="#_1_850"
            from="613 574"
            to="613 359.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>
        <text id='_2_000' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(737 ${isFF ? 326.86 : 574})`}>
          <tspan x='-20.344' y='0'>2 000</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_2_000" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_2_000"
            from="737 574"
            to="737 326.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_2_000"
            xlinkHref="#_2_000"
            from="737 574"
            to="737 326.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>
        <text id='_2_240' className={classNames('cls-5', {hide: !isAnimation, show: isAnimation})} transform={`translate(861 ${isFF ? 284.86 : 574})`}>
          <tspan x='-20.344' y='0'>2 240</tspan>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#_2_240" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="_2_240"
            from="861 574"
            to="861 284.86"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="_2_240"
            xlinkHref="#_2_240"
            from="861 574"
            to="861 284.86"
            begin="indefinite"
            {...animateOptions}
          />}
        </text>

        <text id='_2014' className='cls-4' transform='translate(364 612.86)'>
          <tspan x='-18.297' y='0'>2014</tspan>
        </text>
        <text id='_2016' className='cls-4' transform='translate(609 612.86)'>
          <tspan x='-18.297' y='0'>2016</tspan>
        </text>
        <text id='_2018_' className='cls-4' transform='translate(860 612.86)'>
          <tspan x='-22.711' y='0'>2018*</tspan>
        </text>
        <text id='_2017' className='cls-4' transform='translate(732 612.86)'>
          <tspan x='-18.297' y='0'>2017</tspan>
        </text>
        <text id='_2015' className='cls-4' transform='translate(486 612.86)'>
          <tspan x='-18.297' y='0'>2015</tspan>
        </text>
        <text className='cls-6' transform='rotate(-90 255.07 180.07)'>
          <tspan x='-24' y='0'>
            {translate('animate_graph.thousands_stores')}
          </tspan>
        </text>
        <text id='_1875' className='cls-4' transform='translate(133.003 344.969)'>
          <tspan x='-18.297' y='0'>1875</tspan>
        </text>
        <text id='_1250' className='cls-4' transform='translate(133.003 420.659)'>
          <tspan x='-18.297' y='0'>1250</tspan>
        </text>
        <text id='_625' className='cls-4' transform='translate(128.003 498.9)'>
          <tspan x='-13.723' y='0'>625</tspan>
        </text>
        <text id='_0' className='cls-4' transform='translate(124.003 574.59)'>
          <tspan x='-4.574' y='0'>0</tspan>
        </text>
        <path id='Path_1-2' className='cls-7' d='M12905.426,1048.8h586.848l42.227-56h-629.074Z'
          transform='translate(-12930 -850.8)' />
        <text className='cls-8' transform='translate(0 163)'>
          <tspan className='cls-9' x='0' y='0'>
            {translate('animate_graph.desc_1')}
          </tspan>
          <tspan className='cls-9' x='0' y='24'>
            {translate('animate_graph.desc_2')}
          </tspan>
        </text>

        <line id='Line7' cy="50" x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(204.5 ${isFF ? 482.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line7" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line7"
            from="204.5 585"
            to="204.5 482.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line7"
            xlinkHref="#Line7"
            from="204.5 585"
            to="204.5 482.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>
        <line id='Line8' x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(328.5 ${isFF ? 450.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line8" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line8"
            from="328.5 585"
            to="328.5 450.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line8"
            xlinkHref="#Line8"
            from="328.5 585"
            to="328.5 450.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>
        <line id='Line9' x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(452.5 ${isFF ? 398.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line9" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line9"
            from="452.5 585"
            to="452.5 398.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line9"
            xlinkHref="#Line9"
            from="452.5 585"
            to="452.5 398.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>
        <line id='Line10' x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(576.5 ${isFF ? 370.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line10" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line10"
            from="576.5 585"
            to="576.5 370.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line10"
            xlinkHref="#Line10"
            from="576.5 585"
            to="576.5 370.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>
        <line id='Line12' x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(700.5 ${isFF ? 337.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line12" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line12"
            from="700.5 585"
            to="700.5 337.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line12"
            xlinkHref="#Line12"
            from="700.5 585"
            to="700.5 337.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>
        <line id='Line13' x2='72' className={classNames('cls-11', {hide: !isAnimation, show: isAnimation})} transform={`translate(824.5 ${isFF ? 295.5 : 585})`}>
          {isFF && <animateMotion dur="1s" repeatCount="1">
            <mpath xlinkHref="#Line13" />
          </animateMotion>}
          {isFF && <animateTransform
            ref="Line13"
            from="824.5 585"
            to="824.5 295.5"
            {...animateOptionsFF} />}
          {!isFF && <animateTransform
            ref="Line13"
            xlinkHref="#Line13"
            from="824.5 585"
            to="824.5 295.5"
            begin="indefinite"
            {...animateOptions}
          />}
        </line>

        <line id='Line_11' className='cls-11' x2='21' transform='translate(627.5 175)' />

        <text className='cls-12'
        transform='translate(818.695 180)'>
          <tspan x='-156.574' y='0'>
            {translate('animate_graph.hint')}
          </tspan>
        </text>
      </svg>
    );
  }
  render() {
    return (
      <div className='svg'>
      {this._renderSVGIcon()}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default withTranslate(connect(mapStateToProps)(AnimationGraph));
