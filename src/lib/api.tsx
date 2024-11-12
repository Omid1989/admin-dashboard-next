const BASE_URL = "https://api.example.com/v1";

export const fetchData = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw for error handling in components
  }
};
// // pages/posts/[id].js
// import { fetchData } from '../utils/api';

// const PostPage = ({ post }) => {
//   // ...
// };

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   const post = await fetchData(`/posts/${id}`);
//   return { props: { post } };
// }
