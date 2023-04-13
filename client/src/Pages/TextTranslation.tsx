import { useState } from 'react';
import { AITranslation } from '../ApiService';
import Select from 'react-select';
import { Button, TextField, Typography, Box } from '@mui/material';

const TextTranslation = () => {
  const [Text, SetText] = useState<string>('');
  const [targetLanguage, SetTargetLanguage] =
    useState<string>('Target Language');
  const [nativeLanguage, setNativeLanguage] =
    useState<string>('Detect language');
  const [translatedText, setTranslatedText] = useState<string>('');
  const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Portuguese', label: 'Portuguese' },
    { value: 'German', label: 'German' },
    { value: 'Dutch', label: 'Dutch' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Korean', label: 'Korean' },
    { value: 'Chinese', label: 'Chinese' },
  ];

  const translateData: dataMap = {
    cs: 'Czech',
    da: 'Danish',
    de: 'German',
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    nb: 'Norwegian',
    nl: 'Dutch',
    pl: 'Polish',
    pt: 'Portuguese',
    ro: 'Romanian',
    ru: 'Russian',
    sv: 'Swedish',
    tr: 'Turkish',
    uk: 'Ukrainian',
    zh: 'Chinese',
  };

  const changeTxt = function (
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    SetText(event.target.value);
  };

  const handleSubmit = async function (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();
    if (Text.length > 0) {
      const textInput = {
        text: Text,
        targetLanguage: targetLanguage,
      };
      const response = await AITranslation(textInput);
      console.log(response.detectedSourceLang);
      setTranslatedText(response.text);
      setNativeLanguage(
        translateData[response.detectedSourceLang] ||
          'Unable to detect language'
      );
    }
  };

  return (
    <Box    style={{
      position: 'absolute',
      left: '55%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    }}>
      <form onSubmit={handleSubmit} className="text-translation-form center">
        <div className="text-translation-column">
          <div className="language-box">
            <Typography
              variant="h6"
              sx={{ fontWeight: 'bold', color: 'white' }}
            >
              {nativeLanguage}
            </Typography>
          </div>
          <TextField
            sx={{
              height: '50vh',
              width: '50vw',
              background: 'white',
              p: '1rem',
              fontWeight: 'bold',
              borderRadius: '0.5rem',
            }}
            multiline
            variant="standard"
            type="text"
            onChange={changeTxt}
            name="text"
            value={Text}
            required={true}
            placeholder="..."
            autoComplete="off"
            InputProps={{
              disableUnderline: true,
            }}
          />
          <Button
            type="submit"
            variant="outlined"
            sx={{
              m: '0.5rem',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              color: '#CCD6F6',
              borderColor: '#035e7b',
            }}
          >
            Translate
          </Button>
        </div>
        <div className="text-translation-column">
          <div className="language-box">
            <Select
              className="language-select"
              onChange={(event) =>
                event?.value && SetTargetLanguage(event.value)
              }
              onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
                SetTargetLanguage((event.target as HTMLSelectElement).value);
              }}
              options={options}
              placeholder="Target Language"
              required={true} // not working
              isSearchable
              noOptionsMessage={() =>
                'Language not supported, please chose another'
              }
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                }),
              }}
            />
          </div>
          <Box className="text-output">{translatedText}</Box>
        </div>
      </form>
    </Box>
  );
};

export default TextTranslation;
