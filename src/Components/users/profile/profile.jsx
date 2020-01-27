<div class="container home wrapper  my-md-5 pl-md-5">
    <div class="profile home-text col-md-6 text-center col-lg">
        <img class="profile-img" src="./images/user.png" />
        <div class="profile-info">
            <p>Username: <small>{{ username }}</small></p>
            <p class="infoType">{{ ideas }}</p>
            {{#if ideas}}
            {{#each}}
            <p>{{ ideas.name }}</p>
            <p>{{ ideas.description }}</p>
            {{/each}}
            {{else}}
            <p>No ideas yet</p>
            {{/if}}
        </div>
    </div>
</div>