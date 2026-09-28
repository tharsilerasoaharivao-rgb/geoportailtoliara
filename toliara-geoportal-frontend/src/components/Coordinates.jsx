function Coordinates({ lat, lng }) {
  return (
    <div className="coordinates">

      <span>
        📍 Lat :
        <strong>
          {Number(lat).toFixed(6)}°
        </strong>
      </span>

      <span>
        Lng :
        <strong>
          {Number(lng).toFixed(6)}°
        </strong>
      </span>

    </div>
  );
}

export default Coordinates;