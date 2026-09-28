import {
  FaMapMarkerAlt,
  FaCamera,
  FaClock,
  FaExpand,
  FaLayerGroup,
} from "react-icons/fa";

function Toolbar({
  toggleLayers,
  resetView,
  toggleFullscreen,
}) {
  return (
    <div className="toolbar">

      {/* ==========================
          FOKONTANY
      =========================== */}

      <div className="fokontany">

        <FaMapMarkerAlt className="location-icon" />

        <span>
          Fokontany
        </span>

        <select defaultValue="">

          <option value="">
            Sélectionner un Fokontany
          </option>

           <option value="centre">Toliara Centre</option>
  <option value="tanambao-i">
    Tanambao I
    </option>

  <option value="tanambao-ii-tsf-nord">
    Tanambao II Tsf Nord
    </option>

  <option value="tanambao-morafeno">
    Tanambao Morafeno
    </option>

  <option value="tanambao-motombe">
    Tanambao Motombe
    </option>

  <option value="mahavatse-i-tanambao">
    Mahavatse I Tanambao
    </option>
  
  <option value="mahavatse-i-ouest">Mahavatse I Ouest</option>
  
  <option value="mahavatse-i-est">Mahavatse I Est</option>
  
  <option value="mahavatse-ii-ouest">Mahavatse II Ouest</option>
  
  <option value="mahavatse-ii-est-ambararata">Mahavatse II Est Ambararata</option>

  <option value="amborogony">Amborogony</option>
  
  <option value="amborogony-tanambao">Amborogony Tanambao</option>
  
  <option value="andaboly">Andaboly</option>
  
  <option value="andabizy">Andabizy</option>
  
  <option value="ankatsaka">Ankatsaka</option>
  
  <option value="anketa-haut">Anketa Haut</option>
  
  <option value="anketa-bas">Anketa Bas</option>
  
  <option value="anketraka">Anketraka</option>
  
  <option value="ankiembe-bas">Ankiembe Bas</option>
  
  <option value="ankiembe-haut">Ankiembe Haut</option>
  
  <option value="konkasera">Konkasera</option>

  <option value="betania-ouest">Betania Ouest</option>
  
  <option value="betania-tanambao">Betania Tanambao</option>
  
  <option value="betania-centre">Betania Centre</option>
  
  <option value="betania-ankilifaly">Betania Ankilifaly</option>

  <option value="besakoa">Besakoa</option>
  
  <option value="amohitsabo">Amohitsabo</option>
  
  <option value="ampasikibo">Ampasikibo</option>
  
  <option value="mangabe">Mangabe</option>
  
  <option value="sakabera">Sakabera</option>
  
  <option value="betaritarika">Betaritarika</option>
  
  <option value="antaninarenina">Antaninarenina</option>
  
  <option value="antaravay-salimo">Antaravay Salimo</option>
  
  <option value="sanfily">Sanfily</option>
  
  <option value="tsongobory">Tsongobory</option>
  
  <option value="tsianengea">
    Tsianengea
    </option>
  
  <option value="tsianaloka">
    Tsianaloka
    </option>

  <option value="tsimenatse-i-est">
    Tsimenatse I Est
  </option>

  <option value="tsimenatse-i-ouest">
    Tsimenatse I Ouest
    </option>

  <option value="tsimenatse-ii">
    Tsimenatse II
    </option>

  <option value="tsimenatse-iii">
    Tsimenatse III
    </option>

        </select>

      </div>


      {/* ==========================
          CAPTEUR
      =========================== */}

      <button
        type="button"
        className="blue-button"
      >

        <FaCamera />

        <span>
          Capteur
        </span>

      </button>


      {/* ==========================
          VUE INITIALE
      =========================== */}

      <button
        type="button"
        className="blue-button"
        onClick={resetView}
      >

        <FaClock />

        <span>
          Vue initiale
        </span>

      </button>


      {/* ==========================
          PLEIN ÉCRAN
      =========================== */}

      <button
        type="button"
        className="blue-button"
        onClick={toggleFullscreen}
      >

        <FaExpand />

        <span>
          Plein écran
        </span>

      </button>


      {/* ==========================
          COUCHES
      =========================== */}

      <button
        type="button"
        className="layer-button"
        onClick={toggleLayers}
      >

        <FaLayerGroup />

        <span>
          Des couches
        </span>

      </button>

    </div>
  );
}

export default Toolbar;