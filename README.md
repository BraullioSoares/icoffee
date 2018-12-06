# icoffee
iCoffee - Orders System


Running Project

    #1 - Inside of backend folder type the following comand on terminal for downloading all the dependecies for this project:
    npm i

    #2 - You need MongDB configured on your computer. After installing it, go to the MongoDB folder instalation inside of /bin and type the comand below:

    ./mongod --port 27017 --dbpath data

    The number of the port must be the same as you set up on your database connection. For default it is 27017.

    #3 - Now run the follwoing comand for the backend folder:
    npm run production

    You can also use pm2 lib to monitor the application by using this comand.
    pm2 status

    #4 - Install the dependecies for the frontend project and run the application by typing this comand:
    npm i
    npm run dev 

    or

    npm start
