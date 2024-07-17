import React, { useContext, useState } from 'react';
import './styles/FilterOptions.css';

import { ApiContext } from '../hooks/ApiContext';
import Button from './UI/Button';

import { speciesList, genderList, statusList } from '../Filter'
import SelectOptions from './UI/Select';

function FilterOptions() {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");

  const { updateFilters } = useContext(ApiContext);

  const handleForm = (e) => {
    e.preventDefault();
    updateFilters({ name, species, status, gender });
  };

  return (
    <div className='filter-container'>
      <form className="filter-options" onSubmit={handleForm}>
        <input
          type="text"
          id="name"
          placeholder="Filter by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          name="species"
          id="species"
          onChange={(e) => setSpecies(e.target.value)}
        >
          <option value="">All Species</option>
          {speciesList.map((option, index) => (
            <SelectOptions key={index} value={option} />
          ))}
        </select>

        <select
          name="gender"
          id="gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">All Genders</option>
          {genderList.map((option, index) => (
            <SelectOptions key={index} value={option} />
          ))}
        </select>

        <select
          name="status"
          id="status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          {statusList.map((option, index) => (
            <SelectOptions key={index} value={option} />
          ))}
        </select>

        <Button type="submit" className="btn-search">Search</Button>
      </form>
    </div>
  );
}

export default FilterOptions;
