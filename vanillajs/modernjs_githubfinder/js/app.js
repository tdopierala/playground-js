const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('searchUser');

let delay = null;

searchUser.addEventListener('keyup', (e) => {
	clearInterval(delay);

	delay = setTimeout(() => {
		const userText = e.target.value;

		if (userText !== '') {
			github.getUser(userText).then((data) => {
				console.log(data);

				if (data.profile.message === 'Not Found') {
					// show alert
					ui.showAlert('User not found', 'alert alert-danger');
					ui.clearProfile();
				} else {
					// show profile
					ui.showProfile(data.profile);
					ui.showRepos(data.repos);
				}
			});
		} else {
			// clear profile
			ui.clearProfile();
		}
	}, 1000);
});
