import React, { useEffect, useState } from "react";
import PuppyCard from "../../components/puppycard/PuppyCard";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./PuppyList.scss";

const PuppyList = ({ breed, filters, sort, resetFilters }) => {
  const [puppies, setPuppies] = useState([]);
  const [filteredPuppies, setFilteredPuppies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getPuppies = async () => {
      try {
        const query = breed ? `?breed=${breed}` : "";
        const res = await axios.get(
          `http://localhost:8800/api/puppies${query}`
        );
        setPuppies(res.data.puppies);
      } catch (err) {
        console.error(err);
      }
    };
    getPuppies();
  }, [breed]);

  useEffect(() => {
    const filtered = puppies.filter((item) => {
      if (filters) {
        return Object.entries(filters).every(([key, value]) => {
          if (key === "breed") {
            // Format the breed value from the URL parameter
            const formattedValue = value.toLowerCase().replace(/ /g, "-");

            // Format the item's breed value from the database
            const formattedItemBreed = item[key]
              .toLowerCase()
              .replace(/ /g, "-");

            // Check if the formatted values match
            return formattedValue === formattedItemBreed;
          }
          // For other filters, perform an exact match
          return item[key] === value;
        });
      }
      return true; // Return true if filters are not defined
    });

    setFilteredPuppies(filtered);
  }, [puppies, filters]);

  const fetchMorePuppies = async () => {
    try {
      const query = breed ? `?breed=${breed}` : "";
      const res = await axios.get(
        `http://localhost:8800/api/puppies${query}&page=${page + 1}`
      );

      if (res.data.puppies.length > 0) {
        setPage((prevPage) => prevPage + 1);
        setPuppies((prevPuppies) => [...prevPuppies, ...res.data.puppies]);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="section puppies">
      <div className="container">
        {filteredPuppies && filteredPuppies.length === 0 ? (
          <h1>No puppies to show here!</h1>
        ) : (
          <InfiniteScroll
            dataLength={filteredPuppies.length}
            next={fetchMorePuppies}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <div className="puppy-cards">
              {filteredPuppies.map((item) => (
                <div className="puppy-item" key={item._id}>
                  <PuppyCard item={item} />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};

export default PuppyList;
