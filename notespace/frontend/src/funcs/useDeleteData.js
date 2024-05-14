import axios from "axios";

export default function useDeleteData(url, redirect, refresh) {
  const deleteData = async () => {
    try {
      await axios.delete(url);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return deleteData;
}
