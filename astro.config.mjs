// @ts-check
import { defineConfig } from 'astro/config';

// En GitHub Actions, GITHUB_REPOSITORY = "usuario/repo". Local: sin site/base.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.toLowerCase() === `${owner?.toLowerCase()}.github.io`;

// https://astro.build/config
export default defineConfig({
	site: owner ? `https://${owner.toLowerCase()}.github.io` : undefined,
	base: repo && !isUserSite ? `/${repo}` : '/',
});
