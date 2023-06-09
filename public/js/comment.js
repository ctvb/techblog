const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const post_id = event.target.getAttribute('data-id');
    alert(post_id + comment)
    if (comment) {
        const response = await fetch(`/api/commentRoutes/`, {
            method: 'POST',
            body: JSON.stringify({ post_id, comment }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
};

document
    .querySelector('.add-comment')
    .addEventListener('submit', newFormHandler);