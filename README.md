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
![1](https://user-images.githubusercontent.com/48846533/167588308-f297e073-053e-45d6-8f3a-6fb97877387b.png)
![2](https://user-images.githubusercontent.com/48846533/167588312-99cbc582-a56a-49f8-b4f6-854fc74c2378.png)
![3](https://user-images.githubusercontent.com/48846533/167588315-944a77db-aeb7-45c5-b337-2d34cc1e2795.png)
![4](https://user-images.githubusercontent.com/48846533/167588316-5ceab0b5-aacb-4f34-a184-9bae12cba084.png)
![5](https://user-images.githubusercontent.com/48846533/167588293-77e14a83-b476-460a-95cf-812802d3643c.png)
![6](https://user-images.githubusercontent.com/48846533/167588300-5cd9a7d1-738d-4491-9c67-82186db7ffc5.png)
![7](https://user-images.githubusercontent.com/48846533/167588306-c64493f5-4825-4b3b-a914-0768343990d4.png)
