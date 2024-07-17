import { keepPreviousData, useQuery } from '@tanstack/react-query';
import React, { createContext, useState } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    species: '',
    status: '',
    gender: ''
  });

  const fetchData = async (page = 1, filters = {}) => {
    const query = new URLSearchParams({
      page,
      ...Object.fromEntries(Object.entries(filters).filter(([_, v]) => v))
    }).toString();

    const url = `https://rickandmortyapi.com/api/character?${query}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const { isLoading, isError, error, data, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ['characters', page, filters],
      queryFn: () => fetchData(page, filters),
      placeholderData: keepPreviousData,
    });

  const nextPage = () => {
    if (!isPlaceholderData && data?.info.next) {
      setPage((prev) => prev + 1);
    }
  }

  const prevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1));
  }

  const updateFilters = (newFilters) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }

  return (
    <ApiContext.Provider value={{
      isLoading, isError, error,
      data, isFetching, isPlaceholderData,
      prevPage, nextPage, page, updateFilters
    }} >
      {children}
    </ApiContext.Provider>
  )
}
