
let user = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";
let token = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser")).accessToken
    : "";

export const initialState = {
    isAuthenticated: false,
    userDetails: "" || user,
    token: "" || token,
    loading: false,
    errorMessage: null
};

export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                isAuthenticated: true,
                user: action.payload,
                token: action.payload.accessToken,
                loading: true,
            };
        case "LOGOUT":
            return {
                ...initialState,
                user: "",
                token: "",
            };

        case "LOGIN_ERROR":
            return {
                ...initialState,
                loading: false,
                errorMessage: action.error
            };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};
export const RegUser = {
    isSubmitting: false,
    email:"",
    password:"",
    cnfpass:"",
    loading: false,
    errorMessage: null
};

export const RegReducer = (RegUser, action) => {
    switch (action.type) {
        case "REG_SUCCESS":
            return {
                ...RegUser,
                email: action.payload.email,
                password: action.payload.password,
                cnfpass: action.payload.cnfpass,
                isSubmitting:true,
                loading:true
            };
            case "REG_ERROR":
                return {
                    ...RegUser,
                    loading: false,
                    errorMessage: action.error
                };

        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};