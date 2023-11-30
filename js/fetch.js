const url = 'https://api.github.com/users/USERNAME/events/public';  // API endpoint
const token = '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'; // Token

const fetchData = async () => {
    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `token ${token}`,
            },
        });

        if (response.ok) {
            const userData = await response.json();
            console.log('User Data:', userData);
        } else {
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// Call the function
fetchData();




