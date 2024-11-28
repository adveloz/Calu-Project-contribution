import { create } from 'zustand';

const useStore = create((set) => ({
    currentPage: "",
    setCurrentPage: (value) => set((state) => ({
      currentPage: value,
    })),
    selects: {
      action: 'all',
      location: 'all',
      surface: 'all',
      price: 'all',
      type: 'all',
      minPrice: 'all',
      maxPrice: 'all',
      pool: 'all',
      trastero: 'all',
      terraza: 'all',
      elevator: 'all',
      garden: 'all',
      bedrooms: 'all',
      doubleBedrooms: 'all',
      simpleBedrooms: 'all',
      bathrooms: 'all',
      fullBrooms: 'all',
      simpleBrooms: 'all',
      garage: 'all',
      balcon: 'all',
      plazaGarage: 'all',
    },
    setSelect: (key, value) => set((state) => ({
      selects: {
        ...state.selects,
        [key]: value,
      },
    })),

    selectOptions: {
      prices: [],
      bathrooms: [],
      rooms:[],
      surface:[],
      location:[],
      type:[],
      doubleBedrooms:[],
      simpleBedrooms:[],
      fullBrooms: [],
      simpleBrooms: [],
    },
    setSelectOptions: (key, value) => set((state) =>({
      selectOptions: {
        ...state.selectOptions,
        [key]: value,
      }
    })),

    usableSelects: [],

    setUsableSelect: (selectSet) => set((state) => ({
        usableSelects: selectSet
    })),

    filteredPropertys:[], 

    setFilteredPropertys: (filter) =>set((state) =>({
      filteredPropertys: filter
    })),
  }));
  
  export default useStore;