JWT Token

JWT is for Authorization and NOT Authentication
    -Authentication
        Means that the username and password are verified and are allowed to log in

    -Authorization
        Means according to the User logged in what all the Privileges are to be authorized to the user

    Authentication is done before the Authorization part

    LINK ->> https://www.geeksforgeeks.org/difference-between-authentication-and-authorization/
   
1.	In this method user makes the request to the server , server respond the user request and send the cookie or the session ID to the user and at the same time that ID is stored at the server also for catering further request

2.	 in Second step when the user make the new request the client will send the same cookie with the request now sever has already stored the cookie or session id it will check with the id that client has sent if it matches in the server the server respond back with the request

Problem With traditional method is that 
a.	The server has to store the information so memory is consumed 
b.	Searching time at server is increased
c.	If that particular server which has stored the information goes down the request form client will not be validated and client has to make new request





JWT (Token based Authentication)

 

Here the client make the request but the server make a unique key that can be only opend with the private key with server 
Now server is not storing any ID with it simply send it the user the key
User in next request will send the key and server can unlock

Now if one server goes down other server can take up as private key is with server
