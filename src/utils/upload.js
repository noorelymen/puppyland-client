import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "puppyland");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/noorelymen/image/upload",
      data
    ); //import.meta.env.VITE_UPLOAD_LINK

    const { url } = res.data;
    return url;
  } catch (err) {
    setError(err.response.data);
    toast.error(err.response.data.message);
  }
};

export default upload;
