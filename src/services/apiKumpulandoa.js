// services/ApiAsmaulHusna.js

const apiUrl = 'https://doa-doa-api-ahmadramadhan.fly.dev/api';

export const getKumpulandoa = async () => {
  try {
    const response = await fetch(apiUrl);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Gagal mendapatkan data Asmaul Husna.');
    }
  } catch (error) {
    console.error('Ada kesalahan dalam pengambilan data dari API:', error);
    console.log(error);
    throw error;
  }
};
