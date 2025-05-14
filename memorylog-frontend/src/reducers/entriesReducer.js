export const entriesReducer = (entries, action) => {
    switch(action.type) {
        case "SET_ENTRY":
            return action.payload;
        case 'ADD_ENTRY':
            return [action.payload, ...entries];
        case 'UPDATE_ENTRY':
            return entries.map(entry => entry._id === action.payload._id ? action.payload : entry);
        case 'DELETE_ENTRY':
            return entries.filter(entry => entry._id !== action.payload);
        default:
            return entries;
    }
}