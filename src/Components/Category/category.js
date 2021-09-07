import axios from "axios";

// list of categories
export const getCategories = async () =>
  await axios.get(`https://localhost:44394/api/category`);

// get a single category
export const getCategory = async () =>
  await axios.get(`https://localhost:44394/api/category`);

// removing the category
// export const removeCategory = async (slug, authtoken) => {
//   return await axios.delete(`https://localhost:44394/api/category`);
//       authtoken: authtoken,
//     },
//   });
// };

// update category
// export const updateCategory = async (slug, category, authtoken) => {
//   return await axios.put(
//     `https://localhost:44394/api/category`,
//     category,
//     {
//       headers: {
//         authtoken: authtoken,
//       },
//     }
//   );
// };

// // create category

// export const createCategory = async (category, authtoken) => {
//   return await axios.post(`${process.env.REACT_APP_API}/category`, category, {
//     headers: {
//       authtoken: authtoken,
//     },
//   });
// };

// // get subcategories
// export const getCategorySubs = async (_id) =>
//   await axios.get(`${process.env.REACT_APP_API}/category/subs/${_id}`);