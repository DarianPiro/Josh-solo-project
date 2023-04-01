# Polyglot

Polyglot an app for intermediate language learners to practice their target language through text and voice conversations with an advanced AI chat bot or connect with other learners for real-life practice. 

With Polyglot, language learners can enjoy a seamless chat experience that's more interactive and engaging than ever before. Our app is perfect for remote language learning, allowing users to communicate with others from anywhere in the world.

Polyglot utilizes a tech stack comprising of React, TypeScript, OpenAI Whisper, Python, Flask, Redux, Google Cloud Text-to-Speech, Cloudinary, Express, Deepl, MongoDB. 

# Features

- AI chat bot
- Text to speech
- Speech to text
- Translation
- Grammar correction
- User-to-user chat

# Tech Stack

Frontend: [![React](https://img.shields.io/badge/React-blue?logo=react&logoColor=white)](https://reactjs.org/) [![Redux](https://img.shields.io/badge/Redux-purple?logo=redux&logoColor=white)](https://redux.js.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Backend: [![Python](https://img.shields.io/badge/Python-blue?logo=python&logoColor=white)](https://www.python.org/) [![Flask](https://img.shields.io/badge/Flask-black?logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/2.1.x/) [![Express.js](https://img.shields.io/badge/Express.js-grey?logo=express&logoColor=white)](https://expressjs.com/) [![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

Database: [![MongoDB](https://img.shields.io/badge/MongoDB-green?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

AI Chatbot: [![OpenAI Whisper](https://img.shields.io/badge/OpenAI%20Whisper-white)](https://openai.com/whisper/)

Text Translation: [![DeepL](https://img.shields.io/badge/DeepL-blue?logo=deepl&logoColor=white)](https://www.deepl.com/translator)

Text-to-Speech: [![Google Cloud Text-to-Speech](https://img.shields.io/badge/Google%20Cloud%20Text--to--Speech-blue?logo=google-cloud&logoColor=white)](https://cloud.google.com/text-to-speech)

Image and Video Hosting: [![Cloudinary](https://img.shields.io/badge/Cloudinary-blueviolet?logo=cloudinary&logoColor=white)](https://cloudinary.com/)


# Getting Started

## Prerequisites
Cloudinary
Set up Cloudinary account, create an upload preset and get your cloud name, api key and api secret.

Deepl API
Set up Deepl API account and get your API key.

Create google cloud account and follow this to create credentials for text to speech api.
https://cloud.google.com/iam/docs/keys-create-delete

Create google-service-account.json file in express folder with the credentials like this:
```bash
{
"type":
"project_id":
"private_key_id":
"private_key":
"client_email":
"client_id":
"auth_uri":
"token_uri":
"auth_provider_x509_cert_url":
"client_x509_cert_url":
}
```

## Installation
Clone this repo

```bash
git clone https://github.com/DarianPiro/Josh-solo-project
```

Create .env files in both the server/python and server/exp folders.
Copy each .env.sample and add your data.

### Python server setup

Install Python 3.8-3.10 and pip for package management

```bash
brew install ffmpeg

pip install pipenv flask requests
```

Inside the python folder:

```bash
pipenv shell

pip install -U openai-whisper

pip install -U flask-cors

pip install python-dotenv cloudinary

```

Activate the virtual environment and start the flask server:

```bash
pipenv shell
python Whisper.py
```


### Express server setup

Inside the exp folder install dependencies and start the express server:
```bash
npm i
nodemon index.js
```

### React front end setup

Install dependencies and start the react app:
```bash
npm i
npm start
```


# Authors
Josh Thomas - [Github](https://github.com/josht28)

David Chamberlain - [Github](https://github.com/DRC222)

Darian Pirowhedayati - [Github](https://github.com/DarianPiro)

