import React, { Component } from 'react';
import './SearchDestination.css';
import { data } from '../../CardInfo';
import GoogleMapReact from 'google-map-react';
import DestinationExample from './Destination/DestinationExample';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
class SearchDestination extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className='searchDestination'>
        <div
          style={{
            height: '50vh',
            width: '50%',
            position: 'fixed',
            right: '0',
          }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBumLEMQA8520IYOhxMMqeLeDP9lnpeetk',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text='My Marker'
            />
          </GoogleMapReact>
        </div>
        <div className='destination__result'>
          <div className='destination__resultHeader'>
            <p>Over 300 place</p>
            <h2>At Ha noi</h2>
            <div className='destination__choose'>
              <div className='destination__suggest'>
                <p>Flexible place</p>
              </div>
              <div className='destination__suggest'>
                <p>Type place</p>
              </div>

              <div className='destination__suggest'>
                <p>Order now</p>
              </div>

              <div className='destination__suggest'>
                <p>Other filter</p>
              </div>
            </div>
          </div>
          <div className='destination__resultMain'>
            <DestinationExample />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDestination;
