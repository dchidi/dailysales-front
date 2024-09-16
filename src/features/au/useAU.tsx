import {
  useQuery,
  // , useMutation, useQueryClient
} from "react-query";
import {
  fetchAUSalesGraphAllProd,
  // fetchItemById,
  // createItem,
  // updateItem,
  // deleteItem,
} from "../../api/au_crud";

// Fetch all items
export const useAUGraphData = () => {
  return useQuery("graph", fetchAUSalesGraphAllProd);
};

// // Fetch single item by ID
// export const useItem = (id: number) => {
//   return useQuery(["item", id], () => fetchItemById(id));
// };

// // Create a new item
// export const useCreateItem = () => {
//   const queryClient = useQueryClient();
//   return useMutation(createItem, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("items");
//     },
//   });
// };

// // Update an item
// export const useUpdateItem = () => {
//   const queryClient = useQueryClient();
//   return useMutation(
//     ({ id, data }: { id: number; data: any }) => updateItem(id, data),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("items");
//       },
//     }
//   );
// };

// // Delete an item
// export const useDeleteItem = () => {
//   const queryClient = useQueryClient();
//   return useMutation((id: number) => deleteItem(id), {
//     onSuccess: () => {
//       queryClient.invalidateQueries("items");
//     },
//   });
// };

// *********************************************************************************************************
// *********************************  Sample code to consume the hooks *************************************
// *********************************************************************************************************
// // src/components/ItemList.tsx
// import React from 'react';
// import { useItems, useDeleteItem } from '../hooks/useItems';

// const ItemList: React.FC = () => {
//   const { data: items, isLoading, error } = useItems();
//   const deleteItem = useDeleteItem();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching items</div>;

//   return (
//     <div>
//       <h1>Items</h1>
//       <ul>
//         {items?.map((item: any) => (
//           <li key={item.id}>
//             {item.name}
//             <button onClick={() => deleteItem.mutate(item.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ItemList;

// // src/components/CreateItem.tsx
// import React, { useState } from 'react';
// import { useCreateItem } from '../hooks/useItems';

// const CreateItem: React.FC = () => {
//   const [name, setName] = useState('');
//   const createItem = useCreateItem();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     createItem.mutate({ name });
//     setName('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Item name" />
//       <button type="submit">Create</button>
//     </form>
//   );
// };

// export default CreateItem;
