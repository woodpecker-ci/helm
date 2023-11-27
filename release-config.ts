export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/woodpecker/Chart.yaml`);
    await exec('helm dependency update');
    await exec(
      'git add charts/woodpecker/Chart.yaml charts/woodpecker/charts/agent/Chart.yaml charts/woodpecker/charts/server/Chart.yaml',
    );
  },
};
