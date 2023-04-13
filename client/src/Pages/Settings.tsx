import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { updateUser } from '../ApiService';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';

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
      _id: user?._id,
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
    <Box
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#CCD6F6',
        padding: '2rem',
        borderRadius: '0.5rem',
        border: '1px solid #035e7b',
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id='outlined-basic'
          placeholder='Change Name'
          variant='outlined'
          type='text'
          name='name'
          value={name}
          size='small'
          sx={{
            m: 1,
            borderRadius: '0.5rem',
            fieldset: { borderColor: '#035e7b' },
            color: '#CCD6F6',
          }}
          InputProps={{
            style: {
              color: '#CCD6F6',
              borderColor: '#035e7b',
            },
          }}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <br />

        <Button
          variant='outlined'
          component='label'
          sx={{
            m: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#CCD6F6',
            borderColor: '#035e7b',
          }}
        >
          <input
            type='file'
            hidden
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSelectedPicture(event.target.files?.[0])
            }
          />
          Upload Image
        </Button>
        <br />

        {/* {image && 
          <div>
            <img src={URL.createObjectURL(picture)} alt="profile" />
          </div>
        } */}
        <Button
          type='submit'
          variant='outlined'
          sx={{
            m: '0.5rem',
            fontSize: '0.8rem',
            fontWeight: 'bold',
            color: '#CCD6F6',
            borderColor: '#035e7b',
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Settings;
