import { defineConfig } from "astro/config";

const repository = process.env.GITHUB_REPOSITORY;
const repositoryOwner = repository?.split("/")[0];
const repositoryName = repository?.split("/")[1];

const site =
  process.env.SITE ??
  (repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : "https://example.github.io");

const base =
  process.env.BASE_PATH ??
  (repositoryName && repositoryOwner && repositoryName !== `${repositoryOwner}.github.io`
    ? `/${repositoryName}/`
    : "/");

export default defineConfig({
  site,
  base,
});
