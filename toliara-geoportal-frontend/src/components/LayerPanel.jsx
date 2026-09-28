import { useState } from "react";

function LayerPanel({ visible }) {

  const [layers, setLayers] = useState({
    district: true,
    fokontany: false,
    parcelles: true,
    pudi: false,
    sentinel2: false,
    ndvi: false,
    dynamicWorld: false,
    zonesBat: false,
    solNu: false,
  });


  const handleChange = (layer) => {

    setLayers({
      ...layers,
      [layer]: !layers[layer],
    });

  };


  if (!visible) {
    return null;
  }


  return (

    <div className="layer-panel">

      <div className="layer-header">

        <h3>
          🗺️ Des couches
        </h3>

      </div>


      <div className="layer-content">

        {/* DISTRICT */}

        <label>
          <input
            type="checkbox"
            checked={layers.district}
            onChange={() =>
              handleChange("district")
            }
          />

          <span>
            Limite District Toliara I
          </span>
        </label>


        {/* FOKONTANY */}

        <label>
          <input
            type="checkbox"
            checked={layers.fokontany}
            onChange={() =>
              handleChange("fokontany")
            }
          />

          <span>
            Fokontany
          </span>
        </label>


        {/* PARCELLES */}

        <label>
          <input
            type="checkbox"
            checked={layers.parcelles}
            onChange={() =>
              handleChange("parcelles")
            }
          />

          <span>
            Parcelles
          </span>
        </label>


        {/* PUDI */}

        <label>
          <input
            type="checkbox"
            checked={layers.pudi}
            onChange={() =>
              handleChange("pudi")
            }
          />

          <span>
            PUDI
          </span>
        </label>


        <div className="separator"></div>


        <h4>
          Analyse géospatiale
        </h4>


        {/* SENTINEL */}

        <label>
          <input
            type="checkbox"
            checked={layers.sentinel2}
            onChange={() =>
              handleChange("sentinel2")
            }
          />

          <span>
            Sentinel-2
          </span>
        </label>


        {/* NDVI */}

        <label>
          <input
            type="checkbox"
            checked={layers.ndvi}
            onChange={() =>
              handleChange("ndvi")
            }
          />

          <span>
            NDVI
          </span>
        </label>


        {/* DYNAMIC WORLD */}

        <label>
          <input
            type="checkbox"
            checked={layers.dynamicWorld}
            onChange={() =>
              handleChange("dynamicWorld")
            }
          />

          <span>
            Occupation du sol
          </span>
        </label>


        {/* ZONES BÂTIES */}

        <label>
          <input
            type="checkbox"
            checked={layers.zonesBat}
            onChange={() =>
              handleChange("zonesBat")
            }
          />

          <span>
            Zones bâties
          </span>
        </label>


        {/* SOL NU */}

        <label>
          <input
            type="checkbox"
            checked={layers.solNu}
            onChange={() =>
              handleChange("solNu")
            }
          />

          <span>
            Sol nu
          </span>
        </label>

      </div>

    </div>
  );
}

export default LayerPanel;