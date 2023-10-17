# Woodpecker Helm Charts

This repository contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

![Version: 0.4.2](https://img.shields.io/badge/Version-0.4.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.0.2](https://img.shields.io/badge/AppVersion-1.0.2-informational?style=flat-square)

**Source Code**: <https://github.com/woodpecker-ci/woodpecker>

## Configuration

Please see the README's of the sub-charts for their configuration options:

- [woodpecker](./charts/woodpecker/charts/woodpecker/README.md)
- [(woodpecker-server)](./charts/woodpecker/charts/woodpecker-server/README.md)
- [(woodpecker-agent)](./charts/woodpecker/charts/woodpecker-agent/README.md)

## Contributing

- The README is generated via [`helm-docs`](https://github.com/norwoodj/helm-docs).
  To generate it, run `make docs` and **do not** run `helm-docs` directly (as the main chart uses a custom template)
- Don't edit `README.md` directly, it will be overwritten by `helm-docs`. Instead, edit the respective `*.gotmpl` files.
