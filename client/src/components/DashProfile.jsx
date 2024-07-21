import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import { Alert } from "flowbite-react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadProgressError, setImageUploadProgressError] = useState(null);

  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
      setImageFile(e.target.files[0]);
      setImageFileUrl(URL.createObjectURL(file));
    }
  }
  useEffect(()=>{
    if(imageFile){
      uploadImage();
    }
  },[imageFile]);
  const uploadImage = async () => {
    setImageUploadProgressError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageUploadProgressError('Could not upload image (File must be greater than 2MB)');
        setImageUploadProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageFileUrl(downloadURL);
        })
      },
    );
  }
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="text-3xl font-bold my-3 text-center">Profile</h1>
      <form className="flex flex-col">
        <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} ref={filePickerRef}/>
        <div className="relative w-32 h-32 border-4 border-solid border-gray-300 rounded-full shadow-md self-center mb-4">
          {imageUploadProgress && (
            <CircularProgressbar value={imageUploadProgress} text={`${imageUploadProgress}%`} strokeWidth={5} styles={{
              root:{
                width:'100%',
                height:'100%',
                position:'absolute',
                top:0,
                left:0,
              },
              path:{
                stroke:`rgba(0,0,0,${imageUploadProgress / 100})`,
              },
              text: {
                fill: '#000000'
              }
            }}/>
          )}
          <img
            src={imageFileUrl ||currentUser?.profilePicture}
            alt="user"
            className={`rounded-full w-full h-full ${imageUploadProgress && imageUploadProgress<100 && "opacity-60"}`}
            onClick={() => filePickerRef.current.click()}
          />
        </div>
        {imageUploadProgressError ? (
          <Alert color="failure" className="mb-2">
            {imageUploadProgressError}
          </Alert>
        ): null}
        <label htmlFor="username" className="font-semibold mb-1">Username:</label>
        <input type="text" id="username" placeholder="Username" defaultValue={currentUser?.username} className="border border-gray-300 py-2 px-4 mb-2 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <label htmlFor="email" className="font-semibold mb-1">Email:</label>
        <input type="email" id="email" placeholder="Email" defaultValue={currentUser?.email} className="border border-gray-300 py-2 px-4 mb-2 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <label htmlFor="password" className="font-semibold mb-1">Password:</label>
        <input type="password" id="password" placeholder="Password" className="border border-gray-300 py-2 px-4 mb-4 rounded-md bg-gray-100 font-medium focus:outline-none"/>
        <button type="submit" className="bg-gradient-to-r from-[#EF233D] to-[#F48F2A] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-l py-2 px-4 rounded-md font-semibold">Update</button>
      </form>
      <div className="text-red-700 font-semibold hover:text-red-500 flex justify-between mt-4">
        <span className="cursor-pointer">Delete Account</span>
        <span className="cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
