export default {
  beforePrepare: async ({ exec, nextVersion }) => {
    await exec(`apk add --no-cache helm`);
    await exec(`sed -i "s/^version:.*$/version: ${nextVersion}/g" Chart.yaml`);
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/agent/Chart.yaml`
    );
    await exec(
      `sed -i '' 's/^version:/version: ${nextVersion}/' charts/server/Chart.yaml`
    );
    await exec("helm dependency update");
    await exec(
      "git add Chart.yaml charts/agent/Chart.yaml charts/server/Chart.yaml"
    );
  },
};
