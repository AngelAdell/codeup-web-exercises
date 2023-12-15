(function () {
    function fetchBlogData() {
        $.ajax({
            url: 'data/blog.json',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                // Handle the data and append it to the #posts div
                const postsDiv = $('#posts');
                postsDiv.empty(); // Clear existing entries

                data.forEach(post => {
                    const postElement = $('<div class="blog-post p-4 mb-4 bg-white rounded"></div>');
                    postElement.append(`<h2 class="text-xl font-bold mb-2">${post.title}</h2>`);
                    postElement.append(`<p class="text-gray-500">${post.content}</p>`);
                    postsDiv.append(postElement);
                });
            },
            error: function (error) {
                console.error('Error fetching blog data:', error);
            }
        });
    }

    // Handle click event on the "Add Entry" button
  document.addEventListener('click', function() {
        const newTitle = $('#newTitle').val();
        const newContent = $('#newContent').val();


        // Send a POST request to update the JSON file on the server
      fetch('/update-blog', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTitle, content: newContent }),
      })
          .then(data => {
              fetchBlogData();
          })
          .catch(error => {
              console.error('Error updating blog data:', error);
          });

        // Clear input fields after adding a new entry
        $('#newTitle').val('');
        $('#newContent').val('');
    });

    // Fetch initial blog data
    fetchBlogData();
})();