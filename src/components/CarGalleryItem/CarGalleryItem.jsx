import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalWindow } from "../Modal/Modal";
import PropTypes from 'prop-types';
import { addFavorite, deleteFavorete } from "../../redux/carsSlice";


export const CarGalleryItem = ({ id, img, make, model, rentalPrice, address, rentalCompany, type, year, engineSize, })=> {
    

  const [showModal, setShovModal] = useState(false);
  const toggleModal = () => setShovModal(!showModal);



  const handleButtonClick = () => {
    toggleModal();
  };

  const dispatch = useDispatch();
  const inFavorites = useSelector((state) =>
    state.adverts.favorites.includes(id)
  );

  const clickFavorite = () => {
    if (inFavorites) {
      dispatch(deleteFavorete(id));
    } else {
      dispatch(addFavorite(id));
    }
  };


  return (
    <>
      <li>
        <img src={img} alt={"car image"} height="268" />
        <div>
          <div>
            <p>
              {make} <span style={{ color: "#3470FF" }}>{model}</span>, 2019
            </p>
            <p>{rentalPrice}</p>
          </div>
          <div>
            <div>
              <p aria-label="City">{address}</p>
              {/* <Divider /> */}
              <p aria-label="Contry">{address}</p>
              {/* <Divider /> */}
              <p aria-label="Rental Company">{rentalCompany}</p>
            </div>
            <div>
              <p aria-label="ID">{id}</p>
              {/* <Divider /> */}
              <p aria-label="Car type">{type}</p>
              {/* <Divider /> */}
              <p aria-label="Model Year">{year}</p>
              {/* <Divider /> */}
              <p aria-label="Engine size">{engineSize}</p>
            </div>
          </div>
        </div>
        <div > 
            {/* disableSpacing={true} */}
          <button
            onClick={clickFavorite}            
            aria-label="add to favorites"
          >
            {/* <FavorHeart inFavorites={inFavorites} /> */}
          </button>
          <button onClick={clickFavorite}>
            Learn more
          </button>
        </div>
      </li>

      <ModalWindow isOpen={showModal} handleClose={handleButtonClick}>
        {/* <ModalInfoCard onClose={handleButtonClick} car={car} /> */}
      </ModalWindow>
    </>
  );
};



CarGalleryItem.propTypes = {
    advert: PropTypes.string,
    id: PropTypes.string,
    img: PropTypes.string,
    make: PropTypes.string,
    model: PropTypes.string,
    rentalPrice: PropTypes.string,
    address: PropTypes.string,
    rentalCompany: PropTypes.string,
    type: PropTypes.string,
    year: PropTypes.string,
    engineSize: PropTypes.string,
    


  };


  //.split(" ")[1]
  //.split(" ")[2]