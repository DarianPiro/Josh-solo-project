import { useState } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { AITranslation } from '../../ApiService';
import Select from 'react-select';

const TextTranslationForm = () => {
  const [Text, SetText] = useState('');
  const [targetLanguage, SetTargetLanguage] = useState<string>('English');
  const options = [
    'English',
    'French',
    'Spanish',
    'Portuguese',
    'German',
    'Dutch',
    'Japanese',
    'Korean',
    'Chinese',
  ];

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
      console.log(response);
      SetText('');
    }
  };

  return (
    <div>
      <form className="text-translation" onSubmit={handleSubmit}>
        <Select
          // onChange={(event) => (event?.value && SetTargetLanguage(event.value))}
          onChange={(event) => (console.log(event))}
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
            SetTargetLanguage((event.target as HTMLSelectElement).value);
          }}
          options={options}
          value={targetLanguage}
          isSearchable
          noOptionsMessage={() =>
            'Language not supported, please chose another'
          }
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: 365,
            }),
          }}
        />
        <input
          className="text-input"
          type="text"
          onChange={changeTxt}
          name="text"
          value={Text}
          required={true}
          placeholder="Input text"
          autoComplete="off"
        />
        <button
          type="submit"
          className="send"
          style={{ border: 'none', background: 'none' }}
        >
          <FontAwesomeIcon icon={faPaperPlane as IconDefinition} />
        </button>
      </form>
    </div>
  );
};

export default TextTranslationForm;
