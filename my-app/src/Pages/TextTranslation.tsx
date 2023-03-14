import { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { AITranslation } from '../ApiService';
import Select from 'react-select';

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
    'en-GB': 'English',
    es: 'Spanish',
    fr: 'French',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    ko: 'Korean',
    nb: 'Norwegian',
    nl: 'Dutch',
    pl: 'Polish',
    'pt-PT': 'Portuguese',
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
      setTranslatedText(response.text);
      setNativeLanguage(
        translateData[response.detectedSourceLang] ||
          'Unable to detect language'
      );
    }
  };

  return (
    <div className="text-translation-display">
      <div className="center">
        <h2>Translation</h2>
      </div>
      <form onSubmit={handleSubmit} className="text-translation-form">
        <div className="text-translation-column">
          <div className="language-box">{nativeLanguage}</div>
          <input
            className="text-input"
            type="text"
            onChange={changeTxt}
            name="text"
            value={Text}
            required={true}
            placeholder="..."
            autoComplete="off"
          />
          <button
            type="submit"
            className="send"
            style={{ border: 'none', background: 'none' }}
          >
            Translate
          </button>
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
          <div className="text-output">{translatedText}</div>
        </div>
      </form>
    </div>
  );
};

export default TextTranslation;
