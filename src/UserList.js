import React, { useState, useEffect } from 'react';
import axios from 'axios'; //we're here importing the axios library that's facilitate making the HTTP requests


// here's the const where we're holding the list of users
const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);   //this empty brackets [] mean that initially, the list of the users is empty at the begining


  useEffect(() => {
    //the fetch data function used to get the user's data from the internet 
    //the function async means ansynchronous (it means la reference des processus qui se déroule independamment les uns des autres) functions, which mean that the function will operate non-synchronously (concurently) and allows tasks to preform without being blocked other code from running.
    const fetchData = async () => {
    //using the try keyword generalement to try doing something, if everything's good the code inside runs just fine and if it's not the case it's handled with the catch (error)
      try { 
        // The "await" keyword waits for the request to finish before moving on so basically it pauses the execution of the code inside until the request is done
        //we use the GET method to fetch data from the API
        //whereas the axios.get is used to send the request to the URL (the json's url useres in our case) and waits for a response from the server
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        //the following response.data helps to update the list of users with the Data received from the server
        setListOfUsers(response.data);
        //here it comes the catch error, if there's any error during the data fetch proccess, this catch(error) catch it
      } catch (error) {
        console.error('Error fetching user data:', error); //here we can see that it logs this error message next to the details about the error to the browser console
      }
    };

    fetchData();  //the fetchData function is used to bring data when the component starts
  }, []); // these empty braquets (array []) means this one runs only once after the first render

  return (
   //and here it comes the last section that creates the list of user names to show off on the screen
    <ul className="user-list">
     {/*the map function to help us get through each user in the listOfUsers arrays and generate for us the list item for every user's name using the id*/}
      {listOfUsers.map(user => (
        <li key={user.id} className="user-item">{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;





// let’s explain the concepts of using to GET the data with react. When we send a request to an API, it will take some time to find the needed data from its resources and return exactly what we want. Therefore, JavaScript will not block the rest of the operation but it will continue executing the rest of the program and when the API gives us a result of our request, JavaScript will handle it then. This is the asynchronous approach in JavaScript
// For the time being, JavaScript gives us the .then() .catch() methods to deal with asynchronous functions.
// In simpler terms, when calling an API, we tell the browser that the response will take some time so it can go continuing its work and it will notify us when the response gets back.
