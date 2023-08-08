import React, { useState } from 'react';
import './navbar.css';
import Footer from '../Footer';

const Navbar = ({ setMostrar, mostrar, steps }) => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked');
  const [menu_class, setMenuClass] = useState('menu hidden');
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked');
      setMenuClass('menu visible');
    } else {
      setBurgerClass('burger-bar unclicked');
      setMenuClass('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked);
  };
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
    padding: '20px',
    marginBottom: '20px',
    justifyContent: 'center',
  };
  const [select, setSelect] = useState(0);
  const [colection, setColection] = useState(0);
  const handleClick = (selected) => {
    setSelect(selected);
    setMostrar(selected);

    updateMenu();
  };

  const handleColeccion = (colection) => {
    setColection(colection);
  };
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <nav>
        <div className='burger-menu' onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>

        <h1
          style={{
            padding: '5px',
            textAlign: 'center',
            width: '100%',
            fontSize: '40px',
            fontFamily: "'Castoro Titling', cursive",
            borderBottomRightRadius: '20%',
            borderBottomLeftRadius: '20%',
          }}
          className='r2style'
        >
          R2 STYLE
        </h1>
      </nav>
      <div className={menu_class}>
        <div className='options' onClick={() => handleColeccion(1)}>
          <h6 style={{ marginLeft: '20px' }}>COLECCIONES</h6>
        </div>
        {colection === 1 ? (
          <div>
            <div className={`tab `}>
              <p onClick={() => handleClick(0)}>
                <h5 className={`h5 ${select === 0 ? ' activeTab' : ''}`}>
                  HERMETISMO
                </h5>
              </p>
            </div>

            <div className={`tab `}>
              <p onClick={() => handleClick(3)}>
                <h5 className={`h5 ${select === 3 ? ' activeTab' : ''}`}>
                  Cuerpo Mente Alma
                </h5>
              </p>
            </div>
          </div>
        ) : null}

        <div className='options'>
          <p onClick={() => handleClick(1)}>
            <h6 style={{ marginLeft: '20px' }}>ARTE</h6>
          </p>
        </div>
        <div className='options'>
          <p onClick={() => handleClick(2)}>
            <h6 style={{ marginLeft: '20px' }}>PROMOCIONES</h6>
          </p>
        </div>
      </div>

      <div style={containerStyle} className=' App'>
        {steps[mostrar]}
      </div>

      <Footer />
    </div>
  );
};

export default Navbar;
