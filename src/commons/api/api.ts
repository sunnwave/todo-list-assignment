import axios from 'axios';

export const BASE_URL="https://assignment-todolist-api.vercel.app/api/sun/items";

export async function fetchLists(){
  const res= await axios.get(`${BASE_URL}`)
  // console.log(res.data)
  return res.data
}