import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { updateUser } from '../ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [selectedPicture, setSelectedPicture] = useState<Blob | undefined>();
  const [uploadedPicture, setUploadedPicture] = useState<string | undefined>();
  const { user } = useAuth0();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedPicture) {
      const formData = new FormData();
      formData.append('file', selectedPicture);
      formData.append('upload_preset', 'PolyglotAudio');
      let POST_URL = `https://api.cloudinary.com/v1_1/'${process.env.REACT_APP_CLOUDINARY_NAME}'/auto/upload`;
      const response = await fetch(`${POST_URL}`, {
        method: 'POST',
        body: formData,
      });
      const picture_link = await response.json();
      setUploadedPicture(picture_link.url);
    }

    const userInDB = await updateUser({
      name,
      picture: uploadedPicture,
      email: user?.email,
    });

    dispatch({
      type: 'updateUser',
      payload: {
        name: userInDB.name ? userInDB.name : user?.name,
        email: userInDB.email ? userInDB.email : user?.email,
        picture: userInDB.picture ? userInDB.picture : user?.picture,
      },
    });

    navigate('/dashboard');
  };

  return (
    <div className="center">
      <form className="settings center" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setName(event.target.value)
            }
          />
        </div>
        <div>
          <label>Upload profile picture</label>
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedPicture(event.target.files?.[0])
            }
          />
        </div>
        {/* {image && 
          <div>
            <img src={URL.createObjectURL(picture)} alt="profile" />
          </div>
        } */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Settings;
