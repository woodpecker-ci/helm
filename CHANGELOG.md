# Changelog

## [1.0.2](https://github.com/woodpecker-ci/helm/releases/tag/1.0.2) - 2023-12-21

### ❤️ Thanks to all contributors! ❤️

@renovate[bot], @pre-commit-ci[bot], @genofire

### Misc

- chore(deps): update jnorwood/helm-docs docker tag to v1.12.0 [[#137](https://github.com/woodpecker-ci/helm/pull/137)]
- chore(deps): update alpine/helm docker tag to v3.13.3 [[#134](https://github.com/woodpecker-ci/helm/pull/134)]
- [pre-commit.ci] pre-commit autoupdate [[#133](https://github.com/woodpecker-ci/helm/pull/133)]
- chore: speedup make docs (add README.md.gotmpl to charts/agent) [[#103](https://github.com/woodpecker-ci/helm/pull/103)]

## [1.0.1](https://github.com/woodpecker-ci/helm/releases/tag/1.0.1) - 2023-11-29

### ❤️ Thanks to all contributors! ❤️

@pat-s

### 📚 Documentation

- Use dynamic badges [[#128](https://github.com/woodpecker-ci/helm/pull/128)]

### Misc

- Update to main branch for release [[#129](https://github.com/woodpecker-ci/helm/pull/129)]

## [1.0.0](https://github.com/woodpecker-ci/helm/releases/tag/1.0.0) - 2023-11-27

### ❤️ Thanks to all contributors! ❤️

@renovate[bot], @pat-s, @genofire

### 💥 Breaking changes

- Move charts to sub-folder [[#101](https://github.com/woodpecker-ci/helm/pull/101)]
- Remove dind [[#90](https://github.com/woodpecker-ci/helm/pull/90)]

### ✨ Features

- feat(woodpecker-server)!: add monitoring resources and other improvements [[#94](https://github.com/woodpecker-ci/helm/pull/94)]

### 🐛 Bug Fixes

- Correctly condition `volumeMounts` [[#98](https://github.com/woodpecker-ci/helm/pull/98)]

### Misc

- chore(deps): update dependency woodpecker-ci/woodpecker to v2 [[#127](https://github.com/woodpecker-ci/helm/pull/127)]
- chore(deps): update dependency woodpecker-ci/woodpecker to v1.0.5 [[#126](https://github.com/woodpecker-ci/helm/pull/126)]
- Add `helm-unittests` skeleton and assert `extraVolumes` and `extraVolumeMounts` [[#121](https://github.com/woodpecker-ci/helm/pull/121)]
- Add precommit and apply fixes [[#120](https://github.com/woodpecker-ci/helm/pull/120)]
- chore(deps): update woodpeckerci/plugin-ready-release-go docker tag to v1.0.3 [[#124](https://github.com/woodpecker-ci/helm/pull/124)]
- chore(deps): update woodpeckerci/plugin-ready-release-go docker tag to v1.0.2 [[#123](https://github.com/woodpecker-ci/helm/pull/123)]
- fix: image with v version prefix [[#122](https://github.com/woodpecker-ci/helm/pull/122)]
- Prepend 'v' to appVersion [[#117](https://github.com/woodpecker-ci/helm/pull/117)]
- chore(deps): update woodpeckerci/plugin-ready-release-go docker tag to v1 [[#114](https://github.com/woodpecker-ci/helm/pull/114)]
- chore(deps): update alpine/helm docker tag to v3.13.2 [[#115](https://github.com/woodpecker-ci/helm/pull/115)]
- chore(deps): update woodpeckerci/plugin-ready-release-go docker tag to v0.7.0 [[#112](https://github.com/woodpecker-ci/helm/pull/112)]
- chore(deps): update quay.io/helmpack/chart-testing docker tag to v3.10.1 [[#111](https://github.com/woodpecker-ci/helm/pull/111)]
- chore(deps): update quay.io/helmpack/chart-testing docker tag to v3.10.0 [[#109](https://github.com/woodpecker-ci/helm/pull/109)]
- chore(deps): update quay.io/helmpack/chart-releaser docker tag to v1.6.1 [[#108](https://github.com/woodpecker-ci/helm/pull/108)]
- chore(deps): update appleboy/drone-git-push docker tag to v1.0.6 [[#106](https://github.com/woodpecker-ci/helm/pull/106)]
- Update docs and remove OCI WF [[#102](https://github.com/woodpecker-ci/helm/pull/102)]
- chore(deps): update alpine/helm docker tag to v3.13.1 [[#100](https://github.com/woodpecker-ci/helm/pull/100)]

## [0.4.2](https://github.com/woodpecker-ci/helm/releases/tag/0.4.2) - 2023-10-13

### ❤️ Thanks to all contributors! ❤️

@anbraten

### 🐛 Bug Fixes

- Correct username for docker login [[#95](https://github.com/woodpecker-ci/helm/pull/95)]

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
