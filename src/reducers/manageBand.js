export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        name: action.name,
        id: Math.floor((Math.random() * 10000) + 1)
      }
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':

      const bands = state.bands.filter(band => band.id !== action.id)
      
      return {bands}

    default:
      return state;
  }
};
