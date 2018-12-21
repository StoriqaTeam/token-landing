/* eslint-disable max-len */

import React, {Component} from 'react';

import Footer from './Footer';
import Map from './Map';
import GoogleMap from './GoogleMap';
import ImageGallery from './Gallery';
// import Chaping from './Chaping';
import Countdown from 'components/Countdown';

import './styles.sass';

class Event extends Component {
  render() {
    return (
      <div className="home event">
        <section className="section-hero section-event-top text-center d-flex align-items-center">
          <div className="container container-fluid d-flex flex-column justify-content-between">
            <h1 className="h1 text-white mb-4">
              <div className="big-text mb-4">E-commerce powered by&nbsp;blockchain</div>
              <div className="small-text">October&nbsp;18, 2017, 19:00, Moscow&nbsp;City, Mercury&nbsp;Space</div>
            </h1>

            <div>
              <div className="pt-4 pb-4 cta-button">
                <form action="https://www.coinpayments.net/index.php" method="post">
                  <input type="hidden" name="cmd" value="_pay" />
                  <input type="hidden" name="reset" value="1" />
                  <input type="hidden" name="merchant" value="ef573f65e77343431b35e91951debad9" />
                  <input type="hidden" name="item_name" value="Ticket for event" />
                  <input type="hidden" name="currency" value="ETH" />
                  <input type="hidden" name="amountf" value="0.10000000" />
                  <input type="hidden" name="quantity" value="1" />
                  <input type="hidden" name="allow_quantity" value="1" />
                  <input type="hidden" name="want_shipping" value="0" />
                  <input type="hidden" name="allow_extra" value="1" />
                  <input type="hidden" name="lang" value="en" />

                  <button type="submit" className="btn btn-primary btn-lg blue" role="button" aria-pressed="true">
                    <b>Book a ticket</b>
                  </button>
                </form>
              </div>
              <h1 className="h1 text-white mt-4 bottom-most-text">
                <div className="small-text">Pre-launch ICO Storiqa</div>
              </h1>
            </div>
          </div>
        </section>

        <section className="section-preview">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="mb-4">Storiqa is conducting an event in Moscow which covers the whole world with live streaming in 8 languages. The main idea is to introduce the newest tendencies of e&#8209;commerce and explain what happens if online trading intersects with one of the forward-thinking fields of the present day&nbsp;— blockchain. </p>
                <p>The conference covers the following points:</p>
                <ul>
                  <li>Analysis of the current trends in e&#8209;commerce</li>
                  <li>Discussion of problems between sellers and buyers in e&#8209;commerce;</li>
                  <li>Blockchain implementation in e&#8209;commerce;</li>
                  <li>Possible use of cryptocurrency and its function in different businesses</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="section-timing pt-4 pb-1">
          <div className="container">
            <h1 className="h1 text-center">Timing</h1>
            <div className="row mb-5">
              <div className="container text-center">
                <div className="d-inline-block">
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>19:00</b> • </span>
                      <span>Welcome Part: Cocktail</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>20:00</b> • </span>
                      <span>Launch of Storiqa</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>21:00</b> • </span>
                      <span>FAQ</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>22:00</b> • </span>
                      <span>Lounge Time with our special guest</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-timing">
          <div className="container">
            <h1 className="h1 text-center mb-4">Timing</h1>
            <div className="row mb-5">
              <div className="container text-center">
                <div className="d-inline-block">
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>19:00</b> • </span>
                      <span>Cocktails</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>20:00</b> • </span>
                      <span>Launch of Storiqa</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>21:00</b> • </span>
                      <span>FAQ</span>
                    </div>
                  </div>
                  <div className="row table-row-details pt-2 pb-2 pl-3 pr-3">
                    <div className="item">
                      <span><b>22:00</b> • </span>
                      <span>Lounge Time: DJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={require('./img/roof.png')} alt="" className="roof" />
        </section>

        <section className="section-speakers">
          <h1 className="h1 mb-5 mt-2 text-center steep-title">
            <span>Speakers panel</span>
            <div className="background-text">Speakers panel</div>
          </h1>
          <div className="container text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-lg-8 mb-5 d-lg-flex flex-lg-row">
                <div className="avatar-wrapper mr-lg-4">
                  <img src={require('./img/avatar-2.jpg')} alt="Team Member" className="avatar" />
                </div>
                <div className="info-wrapper text-lg-left d-flex align-items-center">
                  <div>
                    <span className="name mb-2">Evgeny Gavrilin</span>
                    <span className="position mb-3">CO-CEO Boomstarter and Tugush.com, CEO Nectarin</span>
                    <span className="description">Entrepreneur, founder of more than 10&nbsp;companies. Co-founder of the Boomstarter platform which has already helped in fund raising of 1,548&nbsp;projects of various fields, such as business, technology, books, travelling, cinema, music and events. Author of Life of Bi, a youtube channel on business issues, with more than 400,000&nbsp;subscribers. Founder of Nectarin, the most famous digital agency in Russia from 2014 to 2017. Co&#8209;founder of the Tugush investment platform.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="beautiful-shadow">
          <div className="shadow" />
        </div>

        <section className="section-guests">
          <h1 className="h1 mb-5 mt-2 text-center steep-title">
            <span>Special guest</span>
            <div className="background-text">Special guest</div>
          </h1>
          <div className="container text-center">
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-lg-8 mb-5 d-lg-flex flex-lg-row">
                <div className="avatar-wrapper mr-lg-4">
                  <img src={require('./img/avatar-1.jpg')} alt="Team Member" className="avatar" />
                </div>
                <div className="info-wrapper text-lg-left d-flex align-items-center">
                  <div>
                    <span className="name mb-2">Maxim Tadevosyan</span>
                    <span className="position mb-3">First Deputy General Director of Rambler&nbsp;& Co</span>
                    <span className="description">Rambler&nbsp;& Co&nbsp;— one of the largest media holdings in Russia, working in the field of technology and e&#8209;commerce. Audience projects&nbsp;— more than 40&nbsp;million people a month.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-foto">
          <h1 className="h1 mb-5 mt-2 text-center steep-title">
            <span>Mercury Space</span>
            <div className="background-text dark">Mercury Space</div>
          </h1>
          <div className="container">
            <div className="description">
              <p className="pb-3 mb-5">This event will be held in the spacious venue on the 40th&nbsp;floor. The event will feature the presentation and welcome area with drinks and buffet.</p>
            </div>
            <ImageGallery />
          </div>
        </section>

        {/* <section className="info">
          <Map />
        </section> */}

        <section className="info">
          <GoogleMap />
        </section>
        <Footer />
      </div>
    );
  }
}

export default Event;
