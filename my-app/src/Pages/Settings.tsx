import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { updateUser } from '../ApiService';

const Settings = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState<Blob | undefined>();
  const { user } = useAuth0();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (picture) {
      const formData = new FormData();
      formData.append('file', picture);
      formData.append('upload_preset', 'PolyglotAudio');
      let POST_URL = `https://api.cloudinary.com/v1_1/'${process.env.REACT_APP_CLOUDINARY_NAME}'/auto/upload`;
      const response = await fetch(`${POST_URL}`, {
        method: 'POST',
        body: formData,
      });
      const picture_link = await response.json();
      setPicture(picture_link.url);
    }

    const userInDB = await updateUser({
      name,
      picture,
      email: user?.email,
    });
    console.log(userInDB);
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
              setPicture(event.target.files?.[0])
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
