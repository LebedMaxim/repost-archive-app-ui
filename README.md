# Project's primary goal:
Create an application to send only new content for your friends and acquaintances: pictures, music, videos.
## Key features:
- Ability to store and view your reposts' history, content and addressees.
- Ability to set and correct a list of addressees and their reposts.
- Ability to track and warn the same sent content immediately.
# Set up:
Initial Set Up:
- Run all services via `docker-compose.yml`
- Open the Keycloak Administration Console: http://127.0.0.1:30001/admin/
- Log in using credentials from the docker-compose file:
  - `KEYCLOAK_ADMIN: root`
  - `KEYCLOAK_ADMIN_PASSWORD: sudo`
* Select the `repost-archive` realm
- Create a new user and set a password for them
* Open the UI: http://localhost:4202/
- Log in using credentials from the previous step
- Enjoy the app! :)
# Useful commands:
- Install dependencies: `npm install`
- Type-Check, Compile and Minify for Production: `npm run build`
- Run Unit Tests with [Karma](https://karma-runner.github.io/latest/index.html): `ng test --karma-config karma.conf.js`
