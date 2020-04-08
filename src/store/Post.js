export const SET_PROP = 'SET_PROP';

const initialState = {
    categoriesList: [
        { chName: 'مدیریت محصول' },
        { chName: 'طراحی محصول' },
        { chName: 'هنر' },
    ],
    chSelectedCategory: "",
    chTitle: "",
    chDescription: "",
    Images: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        //--------------SET_PROP-----------------//
        case SET_PROP:
            return {
                ...state,
                [Object.keys(action.payload)[0]]: Object.values(action.payload)[0],
            }
        default:
            return state;
    }

}

//--------------SET_PROP-----------------//
export const SetProp = (name, value) => {
    return {
        type: SET_PROP,
        payload: {
            [name]: value
        }
    }
}