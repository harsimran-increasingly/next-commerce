const BASE_URL = "https://fakestoreapi.com/";

export const fetchData = async (endpoint: string, options: RequestInit) => {

   const response = await fetch(`${BASE_URL}${endpoint}`,options)

   if (!response.ok){
      throw new Error(`Request failed with status ${response.status}`)
   }

   return response.json()

}