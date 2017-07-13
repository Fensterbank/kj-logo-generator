import * as t from './actionTypes';

const initialState = {
    text: 'Kolpingjugend Deutschland',
    transparent: true,
    fontSize: 90
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;

        case t.SET_TEXT:
            return { ...state, text: action.payload };

        case t.SET_TRANSPARENT:
            return { ...state, transparent: action.payload };

        case t.SET_FONT_SIZE:
            return { ...state, fontSize: action.payload };

        case t.RESET:
            return initialState;
    }
}