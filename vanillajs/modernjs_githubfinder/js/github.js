class GitHub {
    constructor() {
        this.api = 'api.github.com';
        this.client_id = 'f9419048f10c705e';
        this.client_secret = 'b4c4eb066bbe08a0f1c0395d91b3467ed3e911e0';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://${this.api}/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://${this.api}/users/${user}/repos?per_page=10&sort=created:asc&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return { profile, repos }
    }
}