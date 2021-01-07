import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Locators = () => {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js'
    s.integrity = 'sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=='

    document.head.appendChild(s)

    const l = document.createElement('link')
    l.rel = 'stylesheet'
    l.href = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css'
    l.integrity = 'sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=='

    document.head.appendChild(l)
  }, [])

  const position = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Locators
