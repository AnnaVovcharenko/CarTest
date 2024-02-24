import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CarGalleryItem } from "../CarGalleryItem/CarGalleryItem.jsx";
import { fetchCars } from "../../redux/carsOperations.js";
import { selectCars, selectisLoading  } from "../../redux/carsSelectors.js";

export const CarGallery = () => {
    const dispatch = useDispatch();
    const cars = useSelector(selectCars);
    const isLoading = useSelector(selectisLoading);

    const [filter, setFilter] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(fetchCars({page: page}));
    }, [page, dispatch ]);



    const carCatalog = [];
    for (const car of cars) {
        const carAdvert = car.make;
        if (carAdvert) {
            carCatalog.push(carAdvert)
        }
    }
    const filterCar = cars.filter((car) => car.make === filter);

    

const handleSearch = (e) => {
    e.preventDefault();
    setFilter(e.target.adverts.value);//(e.target.cars.value)
    return null;
}

const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };



  return (
    <>
      <div onSubmit={handleSearch}>       
        <input  /> 
        {/* opts={[...new Set(carMakes)]} */}
        <button
          type={"submit"}>
          Search
        </button>
      </div>
      <dev>
        {filter
          ? filterCar.map((car) => <CarGalleryItem key={car.id} car={car} />)
          : cars.map((car) => <CarGalleryItem key={car.id} car={car} />)}
      </dev>
      <button
        onClick={handleLoadMore}
        disabled={isLoading}        
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
      {/* {isLoading && <Loader />} */}
    </>
  );






}