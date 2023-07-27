import Constants from "./Constants";

const Endpoints={
    ALL_PRODUCTS:`${Constants.BASE_URL}products`,
    SINGLE_PRODUCT_BY_ID:`${Constants.BASE_URL}products/`,
    ALL_CATEGORIES:`${Constants.BASE_URL}products/categories`,
    ALL_PRODUCTS_SPECIFIC_CATEGORY:`${Constants.BASE_URL}products/category/`,
    REGISTER_USER:`${Constants.BASE_URL}users`,
    USER_LOGIN:`${Constants.BASE_URL}auth/login`,


}

export default Endpoints;