import axios from "axios";

interface Album {
  userId: string;
  id: number;
  title: string;
}
async function getFirstAlbumTitle() {
  const response = await axios.get<Album[]>(
    "https://jsonplaceholder.typicode.com/albums"
  );
  return response.data[0].title;
}

module.exports = getFirstAlbumTitle;
