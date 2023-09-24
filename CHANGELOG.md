# Changelog

## [0.4.0](https://github.com/woodpecker-ci/helm/releases/tag/0.4.0) - 2023-09-24

### ❤️ Thanks to all contributors! ❤️

@eliasscosta, @pat-s, @ashtonian

### 🐛 Bug Fixes

- Fix missing `image.registry` for agent [[#70](https://github.com/woodpecker-ci/helm/pull/70)]

### 📈 Enhancement

- fix woodpecker_server to work out of the box [[#75](https://github.com/woodpecker-ci/helm/pull/75)]

### 📚 Documentation

- Improve `helm-docs` invocation and clean templates [[#60](https://github.com/woodpecker-ci/helm/pull/60)]

### Misc

- chore: enabled metrics with pod-monitor for statefulset [[#77](https://github.com/woodpecker-ci/helm/pull/77)]
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
