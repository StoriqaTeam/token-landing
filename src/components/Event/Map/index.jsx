import React from 'react';
import {YMaps, Map, GeoObject, Placemark} from 'react-yandex-maps';

// import placemarks from './placemark.json';

const mapState = {
  center: [55.778896568946735,37.690614499999995],
  zoom: 16,
  behaviors: ['drag', 'multiTouch'],
  controls: ['zoomControl']
};

const MapBlock = () =>
  (<YMaps>
    <Map state={mapState} width="100%" height="400px">
      {/* Creating a geo object with the "Point" geometry type. */}
      <GeoObject
        // The geometry description.
        geometry={{
          type: 'Point',
          coordinates: [55.778896568946735,37.690614499999995],
        }}
        // Properties.
        properties={{
          // The placemark content.
          iconContent: 'Bakuninskaya str. 69',
          // hintContent: 'Bakuninskaya str. 69'
        }}
        // Options.
        options={{
          // The placemark's icon will stretch to fit its contents.
          preset: 'islands#blackStretchyIcon',
          // The placemark can be moved.
          draggable: true,
        }}
      />
    </Map>
  </YMaps>);

export default MapBlock;
