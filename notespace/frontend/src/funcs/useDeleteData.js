import axios from "axios";

export default function useDeleteData(url, redirect, refresh) {
  const deleteData = async () => {
    try {
      await axios.delete(url);
      if (window.location.pathname === "/notes") {
        window.location.reload();
      } else {
        window.location.href = "/notes";
      }
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return deleteData;
}
