// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */
async function addFamilyMembers() {
    const apiUrl = 'https://mockapi.io/'; 

    for (const user of users) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Added user:', data);
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    }
}

addFamilyMembers();

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */
document.getElementById('signupForm').addEventListener('submit', async function(event) {
    event.preventDefault(); 
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;
    const phoneNumber = document.getElementById('phone').value;
    const user = {
        firstName: firstName,
        lastName: lastName,
        phone: phoneNumber
    };
    const apiUrl = 'https://mockapi.io/'; 
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log('User signed up:', data);
        document.getElementById('signupForm').reset();
    } catch (error) {
        console.error('Failed to sign up:', error);
    }
});
//*To be continue...
 


 



    