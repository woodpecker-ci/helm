# Woodpecker Helm Charts

This repository contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

![Version: 0.4.2](https://img.shields.io/badge/Version-0.4.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.0.2](https://img.shields.io/badge/AppVersion-1.0.2-informational?style=flat-square)

**Source Code**: <https://github.com/woodpecker-ci/woodpecker>

## Installation

To install the latest release of the chart:

```sh
helm repo add woodpecker https://woodpecker-ci.org/
helm install woodpecker woodpecker/woodpecker
```

**Note**: The `woodpecker/woodpecker` chart contains both the server and the agent as sub-charts.
If you want to install the server or agent independently, you can use the [`woodpecker-server`](./charts/woodpecker/charts/woodpecker-server/README.md) or [`woodpecker-agent`](./charts/woodpecker/charts/woodpecker-agent/README.md) charts respectively.

### `Next` version

To install the chart from the latest commit of the `main` branch ([Which version of Woodpecker should I use?](https://woodpecker-ci.org/faq#which-version-of-woodpecker-should-i-use)) use the following settings in `values.yml`:

```yml
# values.yml

agent:
  image:
    tag: "next"

server:
  image:
    tag: "next"
```

### Terraform

If you're using the `helm-release` terraform module, the following definition can be used:

```hcl
resource "helm_release" "woodpecker" {
  name             = "woodpecker"
  chart            = "woodpecker"
  repository       = "https://woodpecker-ci.org/"
  create_namespace = true # optional
  version          = 0.4.2
  namespace        = "woodpecker"
  count            = 1 # optional
  timeout          = 90 # optional
```

## Configuration

Please see the README's of the sub-charts for their configuration options:

- [woodpecker](./charts/woodpecker/charts/woodpecker/README.md)
- [(woodpecker-server)](./charts/woodpecker/charts/woodpecker-server/README.md)
- [(woodpecker-agent)](./charts/woodpecker/charts/woodpecker-agent/README.md)
