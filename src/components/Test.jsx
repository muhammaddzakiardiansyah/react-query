// Import library React dan React Query
import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

// Fungsi untuk mendapatkan daftar data (GET)
const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};

// Fungsi untuk mendapatkan detail data (GET)
const fetchUserById = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
};

// Fungsi untuk menambahkan data baru (POST)
const addUser = async (newUser) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
  const data = await response.json();
  return data;
};

// Fungsi untuk memperbarui data (PATCH)
const updateUser = async (id, updatedUser) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser),
  });
  const data = await response.json();
  return data;
};

// Fungsi untuk menghapus data (DELETE)
const deleteUser = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE',
  });
  const data = await response.json();
  return data;
};

const ExampleComponent = () => {
  // Menggunakan useQuery untuk mendapatkan daftar data (GET)
  const { data: users, isLoading, isError } = useQuery('users', fetchUsers);

  // Menggunakan useMutation untuk menambahkan data baru (POST)
  const queryClient = useQueryClient();
  const addUserMutation = useMutation(addUser, {
    onSuccess: () => {
      // Mengupdate cache untuk query 'users' setelah menambahkan user baru
      queryClient.invalidateQueries('users');
    },
  });

  // Menggunakan useMutation untuk memperbarui data (PATCH)
  const updateUserMutation = useMutation(updateUser, {
    onSuccess: () => {
      // Mengupdate cache untuk query 'users' setelah memperbarui data
      queryClient.invalidateQueries('users');
    },
  });

  // Menggunakan useMutation untuk menghapus data (DELETE)
  const deleteUserMutation = useMutation(deleteUser, {
    onSuccess: () => {
      // Mengupdate cache untuk query 'users' setelah menghapus data
      queryClient.invalidateQueries('users');
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} -{' '}
            <button onClick={() => updateUserMutation.mutate(user.id, { name: 'Updated Name' })}>
              Update
            </button>{' '}
            -{' '}
            <button onClick={() => deleteUserMutation.mutate(user.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add User</h2>
      <button
        onClick={() =>
          addUserMutation.mutate({
            name: 'New User',
            email: 'newuser@example.com',
          })
        }
      >
        Add User
      </button>
    </div>
  );
};

export default ExampleComponent;
