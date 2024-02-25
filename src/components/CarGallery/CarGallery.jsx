import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  Loading  from "../Loader/Loader.jsx";

import { CarGalleryItem } from "../CarGalleryItem/CarGalleryItem.jsx";
import { fetchCars } from "../../redux/carsOperations.js";
import { selectCars, selectisLoading  } from "../../redux/carsSelectors.js";
import { Filter } from "../Filter/Filter.jsx";


import {List, ContainerD } from "../CarGalleryItem/CarGalleryItem.styled.jsx";


export const CarGallery = () => {
    const dispatch = useDispatch();
    const adverts= useSelector(selectCars);
    const isLoading = useSelector(selectisLoading);

    const [filter, setFilter] = useState(null);
    const [page, setPage] = useState(1);
    useEffect(() => {
        dispatch(fetchCars({page: page}));
    }, [page, dispatch ]);



    const carCatalog = [];
    for (const car of adverts) {
        const carAdvert = car.make;
        if (carAdvert) {
            carCatalog.push(carAdvert)
        }
    }
    const filterCar = adverts.filter((advert) => advert.make === filter);

    

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
        <Filter/> 
               
      </div>
      <ContainerD>
      <List>
        {filter
          ? filterCar.map((car) => <CarGalleryItem key={car.id} car={car} />)
          : adverts.map((car) => <CarGalleryItem key={car.id} car={car} />)}
      </List>
      </ContainerD>
      
      <button
        onClick={handleLoadMore}
        disabled={isLoading}        
      >
        {isLoading ? "Loading..." : "Load more"}
      </button>
      {isLoading && <Loading />}
    </>
  );






}