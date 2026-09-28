import { useEffect, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import Coordinates from "./Coordinates";


// =====================================================
// POSITION INITIALE
// =====================================================

const initialPosition = [
  -23.3500,
  43.6700,
];

const initialZoom = 13;


// =====================================================
// CORRECTION DES ICONES LEAFLET
// =====================================================

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});


// =====================================================
// POSITION DE LA SOURIS
// =====================================================

function MousePosition({ setCoordinates }) {

  useMapEvents({

    mousemove(event) {

      setCoordinates({
        lat: event.latlng.lat,
        lng: event.latlng.lng,
      });

    },

  });

  return null;
}


// =====================================================
// ACTIONS DE LA CARTE
// =====================================================

function MapController({ mapActions }) {

  const map = useMap();

  useEffect(() => {

    if (!mapActions) {
      return;
    }

    mapActions.current = {

      resetView: () => {

        map.setView(
          initialPosition,
          initialZoom
        );

      },

    };

    return () => {

      if (mapActions.current) {
        mapActions.current = null;
      }

    };

  }, [map, mapActions]);

  return null;
}


// =====================================================
// MAPVIEW
// =====================================================

function MapView({ mapActions }) {

  const [coordinates, setCoordinates] =
    useState({
      lat: initialPosition[0],
      lng: initialPosition[1],
    });


  return (

    <div className="map-wrapper">

      {/* ==========================
          CARTE LEAFLET
      =========================== */}

      <MapContainer

        center={initialPosition}

        zoom={initialZoom}

        minZoom={5}

        maxZoom={20}

        zoomControl={true}

        className="map"

      >

        {/* ==========================
            FOND SATELLITE
        =========================== */}

        <TileLayer

          attribution="Tiles © Esri"

          url={
            "https://server.arcgisonline.com/" +
            "ArcGIS/rest/services/" +
            "World_Imagery/MapServer/tile/" +
            "{z}/{y}/{x}"
          }

        />


        {/* ==========================
            POSITION SOURIS
        =========================== */}

        <MousePosition
          setCoordinates={setCoordinates}
        />


        {/* ==========================
            CONTROLE CARTE
        =========================== */}

        <MapController
          mapActions={mapActions}
        />


        {/* ==========================
            MARQUEUR
        =========================== */}

        <Marker
          position={initialPosition}
        >

          <Popup>

            <div>

              <strong>
                District Toliara I
              </strong>

              <br />

              Géoportail Urbanisme

            </div>

          </Popup>

        </Marker>

      </MapContainer>


      {/* ==========================
          OUTILS DE DESSIN
      =========================== */}

      <div className="map-tools">

        <button
          type="button"
          title="Mesurer"
        >
          📏
        </button>

        <button
          type="button"
          title="Dessiner"
        >
          ⬟
        </button>

        <button
          type="button"
          title="Modifier"
        >
          ✎
        </button>

        <button
          type="button"
          title="Supprimer"
        >
          🗑️
        </button>

      </div>


      {/* ==========================
          COORDONNÉES
      =========================== */}

      <Coordinates

        lat={coordinates.lat}

        lng={coordinates.lng}

      />

    </div>

  );
}

export default MapView;