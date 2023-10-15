export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" charts/woodpecker/Chart.yaml`);
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/woodpecker/charts/woodpecker-agent/Chart.yaml`
    );
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/woodpecker/charts/woodpecker-server/Chart.yaml`
    );
    await exec(
      `export UPSTREAM_VERSION=$(curl -s https://api.github.com/repos/woodpecker-ci/woodpecker/releases/latest | grep tag_name | grep -Eo "([0-9]+(\.[0-9]+)+)") && sed -i "s/^appVersion:.*$/appVersion: $UPSTREAM_VERSION/g" charts/woodpecker/Chart.yaml charts/woodpecker/charts/woodpecker-agent/Chart.yaml charts/woodpecker/charts/woodpecker-server/Chart.yaml`
    );
    await exec("helm dependency update");
    await exec(
      "git add charts/woodpecker/Chart.yaml charts/woodpecker/charts/woodpecker-agent/Chart.yaml charts/woodpecker/charts/woodpecker-server/Chart.yaml"
    );
  },
};
