import { useDispatch, useSelector } from "react-redux";
import {
  selectCars,
  selectisLoading,
  selectFavorites,
} from "../redux/carsSelectors";
import { CarGalleryItem } from "../components/CarGalleryItem/CarGalleryItem";
import { useEffect} from "react";

import { filterCars } from "../redux/carsOperations";
// import { fetchCars } from '../redux/carsOperations';

import Loading from "../components/Loader/Loader";
// import { Modal } from "../components/Modal/ModalWindow";
// import { DetailedCard } from '../Catalog/DetailedCard/DetailedCard';
// import img_empty from '../../images/favorite-empty-picture.jpg';

export const Favorites = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectisLoading);
  const cars = useSelector(selectCars);
  const favorites = useSelector(selectFavorites);
  const favorCars = cars.filter((car) => favorites.includes(car.id));

  useEffect(() => {
    dispatch(filterCars());
  }, [dispatch]);

  //   const [showModal, setShowModal] = useState(false);
  //   const toggleModal = () => setShowModal(prevShowModal => !prevShowModal);
  //   let [loading, setLoading] = useState(false);

  //   const [cardToOpen, setCardToOpen] = useState([]);
  // //   const [favorites, setFavorites] = useState([]);

  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       dispatch(fetchCars());
  //     }, 1000);
  //   }, [dispatch]);

  //   useEffect(() => {}, [favorites]);

  //   let savedFavorites = JSON.parse(localStorage.getItem('favoriteCars'));
  //   const list = useSelector(CarGalleryItem);
  //   if (!savedFavorites) {
  //     savedFavorites = [];
  //   }
  //   let cardList = list.filter(card => savedFavorites.includes(card.id));

  //   const setFavorite = id => {
  //     setFavorites('id');
  //   };

  //   const openModal = card => {
  //     setCardToOpen(card);
  //     setShowModal(true);
  //   };
  //   const closeModal = () => {
  //     setShowModal(false);
  //   };

  return (
    <div>
      <div>
        {favorCars.map((car) => (
          <CarGalleryItem key={car.id} car={car} />
        ))}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};
