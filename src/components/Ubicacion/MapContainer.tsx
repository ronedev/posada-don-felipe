import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const [map, setMap] = useState<typeof google.maps | null>();

  const center = {
    lat: -34.613332853240514,
    lng: -68.32052197381489,
  }

  const containerStyle = {
    width: "400px",
    height: "400px",
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY
      ? process.env.REACT_APP_API_KEY
      : "",
  });

  const onLoad = useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
        <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export { MapContainer };
