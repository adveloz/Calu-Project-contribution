import { create } from 'zustand';

const useStore = create((set) => ({
    selects: {
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
  }));
  
  export default useStore;