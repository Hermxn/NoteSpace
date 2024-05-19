import axios from "axios";

export default function usePutData(url, title, body) {
  const putData = async () => {
    try {
      await axios.put(url, { author: 1, title, body });
      window.location.href = "/notes";
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };
  return putData;
}
