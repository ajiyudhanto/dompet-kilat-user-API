**User Register**
----
  Registering user to database

* **URL**

  /register/

* **Method:**

  `POST`
  
*  **URL Params**

     None

* **Data Params**

   `body:`
   `userName=[string]`
   `email=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 201 <br />
    **Content:** `{
      "message": "registration success"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
        "errors": ["username or email already exists"]
    }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
        "errors": ["email must filled with correct email format",
        "must fill username, email, and password"]
    }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
        "errors": ["must fill username, email, and password"]
    }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
        "errors": ["password must be filled"]
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
        "errors": ["internal server error"] 
      }`

---
**User Login**
----
  Logging in user to app

* **URL**

  /login/

* **Method:**

  `POST`
  
*  **URL Params**

     None

* **Data Params**

   `body:`
   `userName=[string]`
   `password=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "access_token": "string"
    }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{
        "errors": ["invalid username or password"]
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
      "errors": ["internal server error"]
    }`

---
**User GetOne**
----
  Get logged in user details from database

* **URL**

  /user/

* **Method:**

  `GET`
  
*  **URL Params**

    None

* **Data Params**

    `headers:`
    `access_token=[string]`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{
      "userName": "string",
      "email": "string"
    }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{
        "errors": ["token has already expired, must login again to get new token"]
    }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{
        "errors": ["invalid token, must login with correct username and password"]
    }`

  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** `{ 
      "errors": ["internal server error"]
      }`
