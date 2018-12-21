import React from 'react';
import {withTranslate} from 'react-redux-multilingual';

import Footer from 'components/Footer';
import Header from 'components/Header';

import './styles.sass';

const Faq = ({translate}) => {
  const questions = translate('faq').map((entity, index) =>
    <li key={index}><a href={'#question' + (index + 1)}>{entity.q}</a></li>
  );

  const answers = translate('faq').map((entity, index) =>
    <div key={index}>
      <p><a name={'question' + (index + 1)}><strong>{index + 1}. {entity.q}</strong></a></p>
      {entity.a.map((p, i) => <p key={i}>{p}</p>)}
      {entity.l && entity.l.map((l, i) => <div key={i}>{l.name} <a href={l.link} target="_blank">{l.link}</a></div>)}
    </div>
  );

  return (
    <div className="faq">
      {false && <div>
        <Header />
        <section className="container">
          <div className="questions col-md-9">
            <ol className="color-blue">
              {questions}
            </ol>
          </div>
          <div className="answers col-md-9">
            {answers}
          </div>
        </section>
        <Footer />
      </div>}
    </div>
  );
};

export default withTranslate(Faq);
