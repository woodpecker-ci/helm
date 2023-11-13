export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm curl`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" Chart.yaml`);
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/agent/Chart.yaml`
    );
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/server/Chart.yaml`
    );
    await exec(
      `export UPSTREAM_VERSION=$(curl -s https://api.github.com/repos/woodpecker-ci/woodpecker/releases/latest | grep tag_name | grep -Eo "([0-9]+(\.[0-9]+)+)") && sed -i "s/^appVersion:.*$/appVersion: v$UPSTREAM_VERSION/g" Chart.yaml charts/agent/Chart.yaml charts/server/Chart.yaml`
    );
    await exec("helm dependency update");
    await exec(
      "git add Chart.yaml charts/agent/Chart.yaml charts/server/Chart.yaml"
    );
  },
};
