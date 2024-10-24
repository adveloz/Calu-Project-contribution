import { create } from 'zustand';

const useStore = create((set) => ({
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
      bathrooms: 'all',
      garage: 'all',
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