# Woodpecker Helm Charts

<img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwoodpecker-ci%2Fhelm%2Fmain%2Fcharts%2Fwoodpecker%2FChart.yaml&query=%24.version&logo=helm&label=Chart%20Version">
<img alt="Dynamic YAML Badge" src="https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fwoodpecker-ci%2Fhelm%2Fmain%2Fcharts%2Fwoodpecker%2FChart.yaml&query=%24.appVersion&label=appVersion&link=https%3A%2F%2Fgithub.com%2Fwoodpecker-ci%2Fwoodpecker">

This repository contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

**Source Code**: <https://github.com/woodpecker-ci/woodpecker>

## Configuration

Please see the README's of the sub-charts for their configuration options:

- [woodpecker](./charts/woodpecker/charts/woodpecker/README.md)
- [(server)](./charts/woodpecker/charts/server/README.md)
- [(agent)](./charts/woodpecker/charts/agent/README.md)

> [!NOTE]
> You only need the `woodpecker` chart if you want to install a functional instance of Woodpecker.
> The `server` and `agent` charts are used as sub-charts by the `woodpecker` umbrella chart.
> They can be used independently but this is usually not needed.

## Contributing

- The README is generated via [`helm-docs`](https://github.com/norwoodj/helm-docs).
  To generate it, run `make docs` and **do not** run `helm-docs` directly (as the main chart uses a custom template)
- Don't edit `README.md` directly, it will be overwritten by `helm-docs`. Instead, edit the respective `*.gotmpl` files.
