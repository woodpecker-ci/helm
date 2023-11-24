export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    // This updates the 'version' in Chart.yaml, inferred from the version which is supposed to be released
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/woodpecker/Chart.yaml`);
    // This updates the appVersion in Chart.yaml with the latest Woodpecker version from woodpecker-ci/woodpecker
    await exec(
      `export UPSTREAM_VERSION=$(curl -s https://api.github.com/repos/woodpecker-ci/woodpecker/releases/latest | grep tag_name | grep -Eo "([0-9]+(\.[0-9]+)+)") && sed -i "s/^appVersion:.*$/appVersion: $UPSTREAM_VERSION/g" charts/woodpecker/Chart.yaml charts/woodpecker/charts/agent/Chart.yaml charts/woodpecker/charts/server/Chart.yaml`,
    );
    await exec('helm dependency update');
    await exec(
      'git add charts/woodpecker/Chart.yaml charts/woodpecker/charts/agent/Chart.yaml charts/woodpecker/charts/server/Chart.yaml',
    );
  },
};
