import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtrSlice";
import make from "./make.json";
import rentalPrice from "./rentalPrice.json";

import {
  FilterHeader,
  FilterBlock,
  FilterInput,
  Svg,
  Label,
  DivInput,
  FilterSelectBrands,
  SelBrOption,
  FilterSelect,
  FilSelOption,
  AfterP,
  BefP,
  InputLeft,
  InputRight,
  SpanRight,
  SpanLeft,
  FilterBtn,
  SpanTwo,
  SpanOn
} from "./Filter.styled";

// import PropTypes from "prop-types";
export const Filter = () => {
  const dispatch = useDispatch();

  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileagoTo] = useState("");

  const handleMileageFromChange = (e) => {
    setMileageFrom(e.targen.value);
  };
  const handleMileageToChange = (event) => {
    setMileagoTo(event.target.value);
  };

  const formSubmit = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterHeader onSubmit={formSubmit}>
      <FilterBlock>
        <FilterInput>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
          <Label htmlFor="carBrandInput">Car Brand</Label>
          <FilterSelectBrands
            name="make"
            id="carBrands"
            placeholder="Enter the text"
          >
            <SelBrOption key="0" value={""} hidden>
              Enter the text
            </SelBrOption>
            {make.map((brand, index) => (
              <SelBrOption key={index} value={brand}>
                {" "}
                {brand}
              </SelBrOption>
            ))}
          </FilterSelectBrands>
          {/* <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 30 2"
            fill="none"
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke="#121417"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg> */}
        </FilterInput>
        <FilterInput>
          <Label htmlFor="carPriceInput">Price/ 1 hour</Label>
          <FilterSelect id="carPriceInput">
            <FilSelOption value={""}> </FilSelOption>
            {rentalPrice.map((price, index) => (
              <FilSelOption key={index} value={price}>
                {price}
              </FilSelOption>
            ))}
          </FilterSelect>
          <BefP>To</BefP>
          <AfterP>$</AfterP>
          {/* <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 12.5L10 7.5L15 12.5"
              stroke="#121417"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg> */}
        </FilterInput>
      </FilterBlock>
      <FilterInput>
        <Label htmlFor="mileageFromInput">Сar mileage / km</Label>
        <DivInput>
          <InputLeft
            type="number"
            id="mileageFromInput"
            value={mileageFrom}
            onChange={handleMileageFromChange}
          />
          <SpanLeft>From:</SpanLeft>

          <InputRight
            type="number"
            id="mileageFromInput"
            value={mileageTo}
            onChange={handleMileageToChange}
          />
          <SpanRight>To:</SpanRight>

          <FilterBtn type="submit">
            <SpanOn>Search</SpanOn>
            {/* <SpanTwo >Go!</SpanTwo> */}
          </FilterBtn>
        </DivInput>
      </FilterInput>
    </FilterHeader>
  );
};
