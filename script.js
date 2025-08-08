document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const input = document.querySelector('input');
    const resultDiv = document.querySelector('.result');

    let dictionary = {};

    // Load the dictionary JSON file
    fetch('dict.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load dictionary.');
            return response.json();
        })
        .then(data => {
            dictionary = data;
        })
        .catch(error => {
            resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const searchTerm = input.value.trim().toLowerCase();

        if (!searchTerm) {
            resultDiv.innerHTML = '<p>Please enter a word to search.</p>';
            return;
        }

        const meaning = dictionary[searchTerm];

        if (meaning) {
            resultDiv.innerHTML = `
                <h2>Definition of "${searchTerm}":</h2>
                <p>${meaning}</p>
            `;
        } else {
            resultDiv.innerHTML = `<p>No definition found for "<strong>${searchTerm}</strong>".</p>`;
        }
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const form = document.querySelector('form');
//     const input = document.querySelector('input');
//     const resultDiv = document.querySelector('.result');

//     let dictionary = {};

//     // Load the dictionary JSON file
//     fetch('dict.json')
//         .then(response => {
//             if (!response.ok) throw new Error('Failed to load dictionary.');
//             return response.json();
//         })
//         .then(data => {
//             dictionary = data;
//         })
//         .catch(error => {
//             resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
//         });

//     // Handle form submission
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();

//         const searchTerm = input.value.trim().toLowerCase();

//         if (!searchTerm) {
//             resultDiv.innerHTML = '<p>Please enter a word to search.</p>';
//             return;
//         }

//         const meaning = dictionary[searchTerm];

//         if (meaning) {
//             resultDiv.innerHTML = `
//                 <h2>Definition of "${searchTerm}":</h2>
//                 <p>${meaning}</p>
//             `;
//         } else {
//             resultDiv.innerHTML = `<p>No definition found for "<strong>${searchTerm}</strong>".</p>`;
//         }
//     });
// });