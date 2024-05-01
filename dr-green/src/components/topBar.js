import * as React from "react";
import { useNavigate } from "react-router-dom";
import BackIcon from '../icons/back.png';

function TopBar({ backRoute = '/history' }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(backRoute);
  };

  return (
    <div style={{ height: '44px', width: '100%', display: 'flex', alignItems: 'center' }}>
      <button onClick={handleBackClick} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0', margin: '0' }}>
        <img
          src={BackIcon}
          alt="Back"
          style={{ height: 'auto', maxWidth: 'none', marginLeft: '10px' }}
        />
      </button>
    </div>
  );
}

export default TopBar;
