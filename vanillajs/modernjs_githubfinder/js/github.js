class GitHub {
	constructor() {
		this.api = 'api.github.com';
		this.client_id = '';
		this.client_secret = '';
	}

	async getUser(user) {
		const profileResponse = await fetch(`https://${this.api}/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

		const repoResponse = await fetch(
			`https://${this.api}/users/${user}/repos?per_page=10&sort=created:asc&client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profile = await profileResponse.json();

		const repos = await repoResponse.json();

		return { profile, repos };
	}
}
