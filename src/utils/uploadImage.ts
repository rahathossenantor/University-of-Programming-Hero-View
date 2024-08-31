import axios from "axios";

const imgApiKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imgApi = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;

const uploadImage = async (image: any) => {
    const imageFile = { image };
    try {
        if (image) {
            const res = await axios.post(imgApi, imageFile, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (res?.data?.success) {
                return res?.data?.data?.display_url;
            } else {
                throw new Error("Image upload failed!");
            };
        }
        return null;
    } catch (err: any) {
        throw new Error(err.message);
    };
};

export default uploadImage;
