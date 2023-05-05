const newFormHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#postTitle').value.trim();
    const content = document.querySelector('#content').value.trim();
    const id = event.target.getAttribute('data-id');
    alert(id + postTitle + content)
    if (postTitle && content) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ postTitle, content }),
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
    .querySelector('.save-post')
    .addEventListener('submit', newFormHandler);