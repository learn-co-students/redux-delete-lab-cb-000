export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        name: action.name,
        id: Math.random()*1000000000
      }
      
      return { 
        ...state,
        bands: [...state.bands, newBand]
      }
    
    case 'DELETE_BAND':
      const filteredBands = state.bands.filter(band => band.id !== action.id)
      
      return { bands: filteredBands };
      
    default:
      return state;
  }
};
