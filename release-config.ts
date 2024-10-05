export default {
  commentOnReleasedPullRequests: false,
  includeContributors: false,
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apt update && apt-get install -y -q git curl`);
    await exec(`curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/woodpecker/Chart.yaml`);
    await exec('helm dependency update charts/woodpecker/');
    await exec(
      'git add charts/woodpecker/Chart.yaml charts/woodpecker/charts/agent/Chart.yaml charts/woodpecker/charts/server/Chart.yaml',
    );
  },
};
