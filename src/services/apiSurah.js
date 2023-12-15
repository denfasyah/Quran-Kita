
const apiUrl = 'https://al-quran-8d642.firebaseio.com/data.json';

export const getSurahList = async () => {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Gagal mendapatkan data Surah.');
    }
  } catch (error) {
    console.error('Ada kesalahan dalam pengambilan data dari API:', error);
    throw error;
  }
};
