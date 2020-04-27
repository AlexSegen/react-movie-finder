export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case "LOADING":
            return state = action.payload
        default:
            return state
    }
}