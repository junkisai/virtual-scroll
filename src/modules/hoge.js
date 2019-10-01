// action type
const GET_HOGE = 'get_hoge';

// initial state
const initialState = {
  hoge: 'hogehoge',
  huga: 'hugahuga',
};

// reducer
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case GET_HOGE:
      const { hoge } = action.payload;
      return {
        ...state,
        hoge,
      };
    default:
      return state;
  }
}

// action creator
const getHoge = hoge => {
  return {
    type: GET_HOGE,
    payload: {
      hoge,
    },
  };
};

export {
  getHoge,
};
