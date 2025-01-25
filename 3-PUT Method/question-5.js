//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */

document.getElementById('updateForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const phone = document.getElementById('phone').value;

    const updatedUser = { firstName: fName, lastName: lName, phone: phone };

    try {
        const response = await fetch('https://your-mockapi-url/users/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('User updated:', data);
    } catch (error) {
        console.error('Error:', error);
    }
});

//*To be continue...