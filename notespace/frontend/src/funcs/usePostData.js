import axios from "axios";

export default function usePostData(url, title, body) {
  const postData = async () => {
    try {
      await axios.post(url, { author: 1, title, body });
      window.location.href = "/notes";
    } catch (error) {
      console.error("Failed to update note:", error);
    }
  };
  return postData;
}
