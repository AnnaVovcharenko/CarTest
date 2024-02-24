import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalWindow } from "../Modal/Modal";
import PropTypes from 'prop-types';
import { addFavorite, deleteFavorete } from "../../redux/carsSlice";


export const CarGalleryItem = ({advert})=> {
    

  const [showModal, setShovModal] = useState(false);
  const toggleModal = () => setShovModal(!showModal);



  const handleButtonClick = () => {
    toggleModal();
  };

  const dispatch = useDispatch();
  const inFavorites = useSelector((state) =>
    state.adverts.favorites.includes(advert.id)
  );

  const clickFavorite = () => {
    if (inFavorites) {
      dispatch(deleteFavorete(advert.id));
    } else {
      dispatch(addFavorite(advert.id));
    }
  };


  return (
    <>
      <li>
        <img src={advert.img} alt={"car image"} height="268" />
        <div>
          <div>
            <p>
              {advert.make} <span style={{ color: "#3470FF" }}>{advert.model}</span>, 2019
            </p>
            <p>{advert.rentalPrice}</p>
          </div>
          <div>
            <div>
              <p aria-label="City">{advert.address.split(", ")[1]}</p>
              {/* <Divider /> */}
              <p aria-label="Contry">{advert.address.split(", ")[2]}</p>
              {/* <Divider /> */}
              <p aria-label="Rental Company">{advert.rentalCompany}</p>
            </div>
            <div>
              <p aria-label="ID">{advert.id}</p>
              {/* <Divider /> */}
              <p aria-label="Car type">{advert.type}</p>
              {/* <Divider /> */}
              <p aria-label="Model Year">{advert.year}</p>
              {/* <Divider /> */}
              <p aria-label="Engine size">{advert.engineSize}</p>
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
    advert: PropTypes.string
  };