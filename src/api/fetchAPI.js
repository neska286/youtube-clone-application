import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchData = async(url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
  }
//   function getAllCustomers(params?: { page?: number; pageSize?: number; GeneralSearch?: string, type?: number, status?: number, gender?: number }) {
//     return axiosInstance.get('Customer/GetAll', {
//       params,
//     });
//   }


