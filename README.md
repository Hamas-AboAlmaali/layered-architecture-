# Getting Started


To run the application locally, begin by installing the dependencies using `npm install`. Once installed, initiate the application with `npm start`. This will launch the application at `http://localhost:3000`.

## App Entities

### User
```
{
    "userId": uuid(),
    "username": "username",
    "password": "passowrd",
    "deposite": number | null,
    "role": seller | buyer
}
```
### Product Entity 
```
{
    proudctId: uuid(),
    sellerId: uuid(), // related to user 
    productName: "product name",
    cost: 10,
    amountAvailable: 5
}
```


## API endpoints

- `http://localhost:3000/users` [ GET | POST | PATCH | DELETE ]
- `http://localhost:3000/products` [ GET | POST | PATCH | DELETE ]
- `http://localhost:3000/deposite` [ POST ]
- `http://localhost:3000/buy` [ POST ]
- `http://localhost:3000/reset` [ POST ]


## Examples
- ### Create User
Make a POST request on `http://localhost:3000/users` and submit those fields in the request body
```
{
    "username": "Hamas Ahmed",
    "password": "qwerty",
    "deposite": 5,
    "role": "seller"
}
```
the "userId" will be generated automatically.
- ### Update Product
Make a POST request on `http://localhost:3000/products/:productId` and submit those fields in the request body
```
{
  "userId": "f0d201b3-9ad4-4521-a9b5-a0c3e5d429f5",    // for identification purpose (equal to token)
  "productName": "spero-apats",
  "cost": 220,
  "amountAvailable": 3,
}
```
be sure ("userId" & "productId") are existent

- ### Buy Product
Make a POST request on `http://localhost:3000/buy` and submit those fields in the request body
```
{
  "userId": "f0d201b3-9ad4-4521-a9b5-a0c3e5d429f5",    // for identification purpose (equal to token)
  "productId":"4518faef-2c25-4ced-8d53-5b5b3c5634c",
  "productAmount": 1
}
```


# Notes
**Validation,** I have implemented some validations; however, due to time constraints, some validations remain outstanding.

**Authentication & Authorization,** not implemented but when you add a product you must submit the sellerId (exists). And on update/delete you also need to submit the sellerId (auth)

**In cases where the returned change does not consist of denominations [5, 10, 20, 50, 100],** it's important to clarify the expected behavior. Should the system only return changes composed of these denominations, or is it acceptable to return changes that include denominations outside this range?



