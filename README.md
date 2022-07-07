<!-- How to start the app -->

1. Before starting the app npm packages have to be installed with "npm install" command inside terminal
2. Second and first login details below can be used for testing purposes
3. Any errors during application startup expected to be due to incorrect packages installation or versioning
4. After installation run "npm start" command inside terminal

eimantas_danielevicius_react_darbas

2.  someing@email.com
    someing

<!-- Shape -->

1.  {
    "email": "myemail@email.com",
    "password": "mypassword"
    }

<!-- On server error -->

{
err: message
}

<!-- On server success -->

{
msg: message
token: abcdefg
}

<!-- Highlights -->

API allows to register multiple identical credentials. However, only the first one is used for a successful login.
