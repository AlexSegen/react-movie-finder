export const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case "LOADING":
            console.log(action.payload)
            return state = action.payload
        default:
            return state
    }
}