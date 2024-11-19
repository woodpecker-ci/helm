# Woodpecker Helm Charts

<img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwoodpecker-ci%2Fhelm%2Fmain%2Fcharts%2Fwoodpecker%2FChart.yaml&query=%24.version&logo=helm&label=Chart%20Version"> <img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwoodpecker-ci%2Fhelm%2Fmain%2Fcharts%2Fwoodpecker%2FChart.yaml&query=%24.appVersion&label=appVersion&link=https%3A%2F%2Fgithub.com%2Fwoodpecker-ci%2Fwoodpecker">

This repository contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

Upstream repository: <https://github.com/woodpecker-ci/woodpecker>

## Configuration

Please check the individual README files of the sub-charts for the respective configuration options:

- [woodpecker](./charts/woodpecker/README.md)
- [(server)](./charts/woodpecker/charts/server/README.md)
- [(agent)](./charts/woodpecker/charts/agent/README.md)

> [!NOTE]
> To install Woodpecker via Helm, you typically only need the `woodpecker` chart.
> The `server` and `agent` charts are sub-charts of the `woodpecker` chart.
> The `agent` chart can be used independently to install agents on multiple clusters with one central server instance.

## Contributing

- The README is generated via [`helm-docs`](https://github.com/norwoodj/helm-docs).
  To generate it, run `make docs` and **do not** run `helm-docs` directly (as the main chart uses a custom template)
- Don't edit `README.md` directly, it will be overwritten by `helm-docs`. Instead, edit the respective `*.gotmpl` files.
- When adding new resources or extending them, please add tests via [`helm-unittest`](https://github.com/helm-unittest/helm-unittest)
