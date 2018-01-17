import * as t from './actionTypes';

export const setText = (text) => ({
    type: t.SET_TEXT,
    payload: text,
});

export const setTransparent = (transparent) => ({
    type: t.SET_TRANSPARENT,
    payload: transparent,
});

export const setFontSize = (fontSize) => ({
    type: t.SET_FONT_SIZE,
    payload: fontSize,
});

export const reset = () => ({
    type: t.RESET,
});