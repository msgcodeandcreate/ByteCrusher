# ByteCom 

## Rollenverteilung

### Frontend
 
- Yavuz aaaaaaaa committed
- Nina
- Akil --Test Test Akil

### Backend

- Joseph
- Svea
- Florian

### Variable names from the backend API

Property of User instance from API.

FirstName, is required
LastName, is required
Password, is required
E_Mail, is required
Bio, is optional
Birthday, is optional

### Current public api routes

Get: .../api/User
returns all User instances from the database

Get: .../api/User/SomeId
returns one user instance which has the given id

Post: .../api/User
Creates one user instance in the database if all required properties are given in the request body.
