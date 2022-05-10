# TL/DR
## Visit the deployed website:
## https://jones-form.netlify.app/
(The form is under the middle tab of the website.)
<br>
<br>

# Description

A simple form for creating a new lead.
The user is prompted to enter the following information:

- First name
- Last name
- Email
- Phone number

and then the lead is sent to the server side (deployed on Heroku) for processing.
The server side will then create a new lead in the MongoDB database (Hosted on MongoDB Atlas), and send an email (see in the screenshots section) using the
MailTrap API.
(MailTrap is a free email service that allows you to send and receive emails from your own server.))

# Important Note:
## The form is buing validated both on the client side (JavaScript) and on the server side (Node.js), for security reasons.

# Tools that i used to create this project:

- Material UI
- React
- React-router
- express
- mongoose
- monogoDB
- MailTrap API

# How to use this project?

## Development
Open the terminal and run the following command:
```
git clone this_repo_url
cd project_name
cd server
npm install
npm start
```

Open another terminal and run the following command:

```
cd project_name
cd client
npm install
npm start
```

## Production

I deployed the client side on netlify in the following link:
[Netlify](https://jones-form.netlify.app/)
The server side is deployed on heroku in the following link:
[Heroku](https://jones-leads.herokuapp.com)

# Screenshots

![](client%5Cpublic%5Cscreenshots%5C1.png)
![](client%5Cpublic%5Cscreenshots%5C2.png)
![](client%5Cpublic%5Cscreenshots%5C3.png)
![](client%5Cpublic%5Cscreenshots%5C4.png)
![](client%5Cpublic%5Cscreenshots%5C5.png)
![](client%5Cpublic%5Cscreenshots%5C6.png)
![](client%5Cpublic%5Cscreenshots%5C7.png)
