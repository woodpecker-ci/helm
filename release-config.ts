export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    // This updates the 'version' in Chart.yaml, inferred from the version which is supposed to be released
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/woodpecker/Chart.yaml`);
    await exec('helm dependency update');
    await exec(
      'git add charts/woodpecker/Chart.yaml charts/woodpecker/charts/agent/Chart.yaml charts/woodpecker/charts/server/Chart.yaml',
    );
  },
};
