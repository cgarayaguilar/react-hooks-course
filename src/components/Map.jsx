import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Map = () => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  }

  const containerStyle = {
    width: '400px',
    height: '400px',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }

  const defaultCenter = {
    lat: 19.426761,
    lng: -99.1718796,
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyDrzJsL4XUqojfPsoRhkZdfNsLqni6-ckk">
      <GoogleMap mapContainerStyle={containerStyle} zoom={10} center={center}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}
export default Map
