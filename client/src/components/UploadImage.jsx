import React from 'react'

const UploadImage = () => {

    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
    
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
    
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };
    
      function uploadSingleImage(base64) {
        setLoading(true);
        axios
          .post("http://localhost:3000/upload", { image: base64 })
          .then((res) => {
            setUrl(res.data);
            alert("Image uploaded Succesfully");
          })
          .then(() => setLoading(false))
          .catch(console.log);
      }
    
      const uploadImage = async (event) => {
        const files = event.target.files;
        console.log(files.length);
    
        if (files.length === 1) {
          const base64 = await convertBase64(files[0]);
          uploadSingleImage(base64);
          return;
        }
    }

  return (
    <div><h1>UserForm</h1>
    <form onSubmit={(e) => e.preventDefault()} encType="multipart/form-data">
      <div className="flex flex-col">
        <input
          type="file"
          name="image"
        />
        <button
          onClick={uploadImage}
          type="submit"
          value="Regístrate"
          className="hover:cursor-pointer bg-green-400 hover:bg-green-600 font-medium rounded-xl text-white p-4 mt-5 hover:scale-[1.02] ease-in-out duration-300"
        ></button>
      </div>
    </form></div>
  )
}

export default UploadImage