const initialState = {
    data: [],
    name: "Bhavesh"
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "updateMovies":
            state.data = action.data;
            return {
                ...state
            }
        case "updateName":
            state.name = action.name;
            return {
                ...state
            }
        default: 
            return {
                ...state
            }
    }
}

export default reducer;

