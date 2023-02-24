import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

const getcart= async () => {
  const response = await axios.get(`${base_url}user/cart/`);

  return response.data;
};
const createcart = async (cart) => {
  const response = await axios.post(`${base_url}user/cart/`, cart, config);

  return response.data;
};

const cartService = {
  getcart,
  createcart,
};

export default cartService;
