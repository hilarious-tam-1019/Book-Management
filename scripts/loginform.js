const form = document.getElementById('login-form');
        form.addEventListener('submit', loginUser);

	async function loginUser(event) {
		event.preventDefault()
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
		const response = await fetch('/login', {
			method: 'POST',
			credentials:'include',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		}) 
        const data = await response.json()
        if (data.user) {
                alert('Login successful')
                window.location.href = '/'
            } else {
                alert('Please check your username and password')
            }
        }
    