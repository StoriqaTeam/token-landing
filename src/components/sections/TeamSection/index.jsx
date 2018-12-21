/* eslint-disable max-len */

import React, {Component} from 'react';

import {withTranslate} from 'react-redux-multilingual';
import './styles.sass';
import members from './members.json';
import ListItem from './ListItem';

import {Title, AngleContainer, ButtonEmpty} from 'components/common';

class TeamSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
    this.expandList = this.expandList.bind(this);
  }
  expandList() {
    this.setState(() => ({isExpanded: true}));
  }

  render() {
    const {isExpanded} = this.state;
    const {translate, isFinished} = this.props;
    const list = isExpanded ? members : members.slice(0, 12);
    if (list.length % 3 > 0) {
      for (let i = 0; i < list.length % 3; i++) {
        list.push({
          mockNumber: i+1,
        });
      }
    }
    return (
      <AngleContainer className="team-section" id="team" hiddenTop={!isFinished}>
       <div className="container">
        <Title text={translate('team.title')} />
        <div className="row team-section--members">
          {list.map((item) => (<ListItem key={item.photo} {...item} />))}
        </div>
        {!isExpanded && (
          <div className="col-12 see-all-link text-center" onClick={this.expandList}>
            <ButtonEmpty>
              {translate('team.see_all')}
            </ButtonEmpty>
          </div>
        )}
       </div>
      </AngleContainer>
    );
  }
}

export default withTranslate(TeamSection);
