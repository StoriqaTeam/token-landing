import React from 'react';
import Gallery from 'react-grid-gallery';
import Measure from 'react-measure';

import './styles.sass';

export default class Sample extends React.Component {
  render() {
    return (
        <div className="gallery">
          <Gallery
            images={IMAGES}
            rowHeight={200}
            margin={10} />
        </div>
    );
  }
}

const IMAGES =
  [{
    src: require('./img/1.jpg'),
    thumbnail: require('./img/1.jpg'),
    thumbnailWidth: 911,
    thumbnailHeight: 607
  },
  {
    src: require('./img/2.jpg'),
    thumbnail: require('./img/2.jpg'),
    thumbnailWidth: 1257,
    thumbnailHeight: 868
  },
  {
    src: require('./img/3.jpg'),
    thumbnail: require('./img/3.jpg'),
    thumbnailWidth: 1296,
    thumbnailHeight: 864
  },
  {
    src: require('./img/5.jpg'),
    thumbnail: require('./img/5.jpg'),
    thumbnailWidth: 1028,
    thumbnailHeight: 635
  },
  {
    src: require('./img/6.jpg'),
    thumbnail: require('./img/6.jpg'),
    thumbnailWidth: 800,
    thumbnailHeight: 534
  },
  {
    src: require('./img/7.jpg'),
    thumbnail: require('./img/7.jpg'),
    thumbnailWidth: 833,
    thumbnailHeight: 556
  },
  {
    src: require('./img/8.jpg'),
    thumbnail: require('./img/8.jpg'),
    thumbnailWidth: 600,
    thumbnailHeight: 768
  },
  {
    src: require('./img/9.jpg'),
    thumbnail: require('./img/9.jpg'),
    thumbnailWidth: 1200,
    thumbnailHeight: 800
  }];
