# NPM Trusted Publishing Setup

This template is wired for npm trusted publishing with provenance.

Before the first release:

1. Create the package on npm or publish the first version manually.
2. Configure the repository as a trusted publisher on npm.
3. Keep `publishConfig.provenance` enabled in `package.json`.

The included `release.yml` workflow already sets the required `id-token: write` permission and publishes with provenance enabled.
