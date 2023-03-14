import React, { useState } from 'react';

const TextTranslationDisplay = () => {
  const [translatedText, setTranslatedText] = useState<string>('');
  return (
    <div>
      <div className="text-translation-display">
        <h2>Translation</h2>
        <p>{translatedText}</p>
      </div>
    </div>
  );
};

export default TextTranslationDisplay;
