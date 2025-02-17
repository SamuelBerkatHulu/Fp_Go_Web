function updateNavbar() {
    fetch('/user')
      .then(response => response.json())
      .then(data => {
        const authLinks = document.getElementById('auth-links');
        if (data.user) {
          authLinks.innerHTML = `
            <p class="text-light m-2">Welcome, <a href="/profile">${data.user}</a>!</p>
            <a class="btn btn-outline-light justify-content-end" id="logoutLink" href="/logout">Logout</a>
          `;

        } else {
          authLinks.innerHTML = `
            <a class="btn btn-outline-light" href="/login">Login</a>
          `;
        }
      })
      .catch(error => {
            console.error('Error fetching user data:', error);
        });
  }

  updateNavbar();