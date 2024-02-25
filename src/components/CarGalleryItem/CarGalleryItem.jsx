import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { ModalWindow } from "../Modal/Modal";
import PropTypes from "prop-types";
import { addFavorite, deleteFavorete } from "../../redux/carsSlice";
import {
  FavoriteBtn,
  LearnBtn,
  Container,
  ImageAuto,
  CatalogItem,
  FBtn
} from "./CarGalleryItem.styled";
import { FavorHeart } from "../icons/Heart";

export const CarGalleryItem = ({
  id,
  img,
  make,
  model,
  rentalPrice,
  address,
  rentalCompany,
  type,
  year,
  engineSize,
}) => {
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
      <CatalogItem>
        <Container>
          <ImageAuto src={img} alt="car image" height="268" />
          <div>
            <div>
              <h3>
                {make} <span>{model}</span>, {year}
              </h3>
              <p>{rentalPrice}</p>
            </div>
            <div>
              <div>
                <p aria-label="City">{address}</p>
                <div>|</div>
                <p aria-label="Contry">{address}</p>
                <div>|</div>
                <p aria-label="Rental Company">{rentalCompany}</p>
              </div>
              <div>
                <p aria-label="ID">{id}</p>
                <div>|</div>
                <p aria-label="Car type">{type}</p>
                <div>|</div>
                <p aria-label="Model Year">{year}</p>
                <div>|</div>
                <p aria-label="Engine size">{engineSize}</p>
              </div>
            </div>
          </div>
          <div>
            <FBtn>
              
              <FavoriteBtn
                onClick={clickFavorite}
                aria-label="add to favorites"
              >
                <FavorHeart inFavorites={inFavorites} />
              </FavoriteBtn>
            </FBtn>

            <LearnBtn onClick={handleButtonClick}>Learn more</LearnBtn>
          </div>
        </Container>
      </CatalogItem>
    </>
  );
};

{
  /* <ModalWindow isOpen={showModal} handleClose={handleButtonClick}>
        <ModalInfoCard onClose={handleButtonClick} car={car} />
      </ModalWindow> */
}

CarGalleryItem.propTypes = {
  advert: PropTypes.array,
  id: PropTypes.object,
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
