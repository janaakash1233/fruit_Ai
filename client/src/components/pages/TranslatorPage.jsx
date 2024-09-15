import React, { useState } from 'react';
import axios from 'axios';

const TranslatorPage = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLang, setSourceLang] = useState('en');
  const [targetLang, setTargetLang] = useState('es');

  const languages = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    it: 'Italian',
    zh: 'Chinese',
    hi: 'Hindi',
    bn: 'Bengali',
  };

  const translateText = async () => {
    if (inputText.trim() === '') {
      console.error('Input text is empty');
      return;
    }

    try {
      const apiKey = `${import.meta.env.VITE_TRANSLATOR_API}`;
      const endpoint = `${import.meta.env.VITE_TRANSLATOR_ENDPOINT}`;

      const response = await axios.post(
        `${endpoint}&from=${sourceLang}&to=${targetLang}`,
        [{ text: inputText }],
        {
          headers: {
            'Ocp-Apim-Subscription-Key': apiKey,
            'Ocp-Apim-Subscription-Region': 'southeastasia',
            'Content-Type': 'application/json',
          },
        }
      );

      setTranslatedText(response.data[0].translations[0].text);
    } catch (error) {
      console.error('Error translating text:', error);
      setTranslatedText('Error translating text. Please try again.');
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setTranslatedText('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-amber-100">
      <div className="bg-gradient-to-b from-cyan-200 to-purple-100 shadow-lg rounded-lg p-6 max-w-lg w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-3xl text-blue-500 font-bold mb-4 text-center">Translator</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Source Language</label>
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(languages).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSwapLanguages}
          className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-lg mb-4 hover:bg-cyan-600 transition-colors"
        >
          Swap Languages
        </button>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Target Language</label>
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {Object.entries(languages).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter text to translate"
          rows="4"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <button
          onClick={translateText}
          className="w-full bg-cyan-500 text-white font-semibold py-2 rounded-lg mb-4 hover:bg-cyan-600 transition-colors"
        >
          Translate
        </button>

        {translatedText && (
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Translated text"
            rows="4"
            value={translatedText}
            readOnly
          />
        )}
      </div>
    </div>
  );
};

export default TranslatorPage;
