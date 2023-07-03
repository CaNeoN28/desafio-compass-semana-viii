# VetClinic 2.0
Hi! I'm Carlos Felipe, and welcome to the version 2.0 of the VetClinic API!
<br>
<br>
## What is the VetClinic API?
VetClinic is an express API where you can create tutors and save their pets. As a tutor you can update your pet and your account too.

## What changes between 1.0 and 2.0?
While the first version saved all handled content in memory, which disappears after restarting the project, the second version uses an actual database, the MongoDB with an atlas database. The version 2.0 also has authentication, which is now required to create and edit pets.

## How can I run it locally?

First, make sure to have installed in your machine NodeJS, required to run express apps and other Javascript apps. You can find it here https://nodejs.org/en.

If you have git installed in your machine, you can open the command line and run the following command: 

```
git clone https://github.com/CaNeoN28/desafio-compass-semana-viii.git
```

If you do not have git installed, you can also download the zip file containing the project folder.

![Where to find the zip file](image.png)

After downloading it, you can extract it to any folder you want.

### Project configuration

In the project the folder, open the command line and paste the following command

```
npm install
```

Aditionally, you have to set up a .env file inside the directory, the file contains hash keys and the database url for the project.
For security reasons, .env files should never be uploaded to Github.

To continue, create a .env file and paste the following data into it.

```
PORT = 3000
MONGO_URL = mongodb+srv://vetclinictest:vetclinic4254@vetclinic.rpirpcz.mongodb.net/
JWT_SECRET = UQthakC8Lzmj9B0KPByxPE2c3uOjcxkH
```

The JWT_SECRET can be whatever you want, as it is only used for token cryptography.
The PORT is configurable, but you need to be sure that there are no services using that port.

After configuration, you just need to run:
```
npm run dev
```

By default, the project should be listening at: http://localhost:3000