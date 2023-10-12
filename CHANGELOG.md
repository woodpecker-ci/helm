# Changelog

## [0.4.0](https://github.com/woodpecker-ci/helm/releases/tag/0.4.0) - 2023-10-12

### ❤️ Thanks to all contributors! ❤️

@pat-s, @renovate[bot], @CrimsonFez, @eliasscosta, @ashtonian

### ✨ Features

- add `extraVolumes` and `extraVolumesMounts` to server chart [[#81](https://github.com/woodpecker-ci/helm/pull/81)]
- chore: enabled metrics with pod-monitor for statefulset [[#77](https://github.com/woodpecker-ci/helm/pull/77)]

### 📚 Documentation

- Align README template with current state [[#91](https://github.com/woodpecker-ci/helm/pull/91)]
- add documentation for extra volume mounts in agent [[#78](https://github.com/woodpecker-ci/helm/pull/78)]
- Improve `helm-docs` invocation and clean templates [[#60](https://github.com/woodpecker-ci/helm/pull/60)]

### 📈 Enhancement

- Publish chart to OCI registry (alongside gh-pages) [[#83](https://github.com/woodpecker-ci/helm/pull/83)]
- fix woodpecker_server to work out of the box [[#75](https://github.com/woodpecker-ci/helm/pull/75)]

### 🐛 Bug Fixes

- Fix missing `image.registry` for agent [[#70](https://github.com/woodpecker-ci/helm/pull/70)]

### Misc

- chore(deps): update jnorwood/helm-docs docker tag to v1.11.3 [[#89](https://github.com/woodpecker-ci/helm/pull/89)]
- Automerge renovate updates (excluding major ones) [[#92](https://github.com/woodpecker-ci/helm/pull/92)]
- ignore and remove `index.yaml` [[#80](https://github.com/woodpecker-ci/helm/pull/80)]
- chore(deps): update jnorwood/helm-docs docker tag to v1.11.2 [[#85](https://github.com/woodpecker-ci/helm/pull/85)]
- chore(deps): update docker docker tag to v20.10.24 [[#84](https://github.com/woodpecker-ci/helm/pull/84)]
- Add renovate config and set image versions in workflows [[#82](https://github.com/woodpecker-ci/helm/pull/82)]
- release-helper: update `appVersion` to latest release [[#76](https://github.com/woodpecker-ci/helm/pull/76)]

## [0.3.2](https://github.com/woodpecker-ci/helm/releases/tag/0.3.2) - 2023-09-03

### ❤️ Thanks to all contributors! ❤️

@anbraten

### Misc

- Fix release [[#68](https://github.com/woodpecker-ci/helm/pull/68)]

## [0.3.1](https://github.com/woodpecker-ci/helm/releases/tag/0.3.1) - 2023-09-02

### ❤️ Thanks to all contributors! ❤️

@anbraten, @pat-s

### 🐛 Bug Fixes

- Remove duplicated steps [[#67](https://github.com/woodpecker-ci/helm/pull/67)]
- Don't run release workflow twice [[#63](https://github.com/woodpecker-ci/helm/pull/63)]

## [0.3.0](https://github.com/woodpecker-ci/helm/releases/tag/0.3.0) - 2023-08-30

### ❤️ Thanks to all contributors! ❤️

@eliasscosta, @ymettier, @pat-s

### ✨ Features

- feature: add custom command [[#59](https://github.com/woodpecker-ci/helm/pull/59)]
- Add extraVolumes and extraVolumeMounts [[#47](https://github.com/woodpecker-ci/helm/pull/47)]
- Specify clusterIP or loadBalancerIP [[#48](https://github.com/woodpecker-ci/helm/pull/48)]

### 🐛 Bug Fixes

- Fix test workflow for tags [[#61](https://github.com/woodpecker-ci/helm/pull/61)]
- no unshallow [[#56](https://github.com/woodpecker-ci/helm/pull/56)]

### 📈 Enhancement

- Set chart version with release-helper and don't require PRs to bump it [[#57](https://github.com/woodpecker-ci/helm/pull/57)]

## [0.2.0](https://github.com/woodpecker-ci/helm/releases/tag/0.2.0) - 2023-08-12

### ❤️ Thanks to all contributors! ❤️

@anbraten, @pat-s, @babykart

### ✨ Features

- Update app version to 1.0.0 [[#51](https://github.com/woodpecker-ci/helm/pull/51)]

### 📈 Enhancement

- Add installation instructions for release & next [[#12](https://github.com/woodpecker-ci/helm/pull/12)]
- Improve helm chart compliance [[#37](https://github.com/woodpecker-ci/helm/pull/37)]
- Set WOODPECKER_CONNECT_RETRY_COUNT=1 to the agent environment [[#36](https://github.com/woodpecker-ci/helm/pull/36)]

### Misc

- add release-helper [[#53](https://github.com/woodpecker-ci/helm/pull/53)]
- Don't commit submodule and `cr` assets [[#41](https://github.com/woodpecker-ci/helm/pull/41)]
