import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE,
} from "../actions";

const initialState = {
  characters: [],
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isFetching: false,
        error: "",
      };

    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
