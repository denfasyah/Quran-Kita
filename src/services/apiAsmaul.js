// services/ApiAsmaulHusna.js

const apiUrl = 'https://raw.githubusercontent.com/mikqi/dzikir-counter/master/www/asmaul-husna.json';

export const getAsmaulHusna = async () => {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Gagal mendapatkan data Asmaul Husna.');
    }
  } catch (error) {
    console.error('Ada kesalahan dalam pengambilan data dari API:', error);
    throw error;
  }
};
