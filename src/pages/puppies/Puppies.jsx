import React, { useState, useEffect } from "react";
import PuppyList from "../../components/puppylist/PuppyList";
import "./Puppies.scss";
import { useLocation } from "react-router-dom";

const Puppies = () => {
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const breedParam = urlSearchParams.get("breed");

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("latest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const resetFilters = () => {
    setFilters({});
    setSort("latest");
  };

  const reSort = (type) => {
    setSort(type);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (breedParam) {
      setFilters({
        ...filters,
        breed: breedParam,
      });
    }
  }, [breedParam]);

  return (
    <>
      <div className="section puppies">
        <div className="container">
          <div className="page-header">
            <span className="breadcrumbs">
              PUPPYLAND &gt; PUPPIES &gt; BREED &gt; HUSKIES
            </span>
            <h1>
              {breedParam
                ? breedParam
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(" ")
                : "Puppies"}
            </h1>
          </div>
          <div className="menu">
            <div className="filters-group">
              <input
                type="number"
                className="filters-input"
                name="age"
                placeholder="Age"
                min="1"
                max="50"
              />
              <select className="filters-input">
                <option value="" disable="disabled" defaultValue>
                  Range
                </option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="junior">Junior</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
              <select
                className="filters-input"
                name="gender"
                onChange={handleFilters}
              >
                <option value="" disable="disabled" defaultValue>
                  Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <select
                className="filters-input"
                name="breed"
                onChange={handleFilters}
              >
                <option disabled defaultValue>
                  Breed
                </option>
                <option value="unknown-nobreed">Unknown</option>
                <option value="cavalier-king-charles">
                  Cavalier King Charles
                </option>
                <option value="cocker-spaniel">Cocker Spanier</option>
                <option value="german-shepherd">German Shepherd</option>
                <option value="golden-retriever">Golden Retriever</option>
                <option value="australian-shepherd">Australian Shepherd</option>
                <option value="doberman">Doberman</option>
                <option value="border-collie">Border Collie</option>
                <option value="rottweiler">Rottweiler</option>
                <option value="french-bulldog">French Bulldog</option>
                <option value="pug">Pug</option>
              </select>
              <select className="filters-input">
                <option value="" disable="disabled" defaultValue>
                  City
                </option>
                <option value="baby">Baby</option>
                <option value="young">Young</option>
                <option value="junior">Junior</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>

              <select
                className="filters-input"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="latest">Latest</option>
                <option value="available">Available</option>
              </select>

              <button onClick={resetFilters}>Reset</button>
            </div>
          </div>
        </div>
      </div>
      <PuppyList
        breed={filters.breed}
        filters={filters}
        sort={sort}
        resetFilters={resetFilters}
      />
    </>
  );
};

export default Puppies;
