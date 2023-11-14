# woodpecker

![Version: 0.4.2](https://img.shields.io/badge/Version-0.4.2-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 1.0.2](https://img.shields.io/badge/AppVersion-1.0.2-informational?style=flat-square)

**Source Code**: <https://github.com/woodpecker-ci/woodpecker>

## Installation

To install the latest release of the chart:

```sh
helm repo add woodpecker https://woodpecker-ci.org/
helm install woodpecker woodpecker/woodpecker

# alternatively via OCI
helm install woodpecker oci://registry-1.docker.io/woodpeckerci/helm
```

**Note**: The `woodpecker/woodpecker` chart contains both the server and the agent.
If you want to install only the server or agent you can use the [`woodpecker/server`](./charts/server/README.md) or [`woodpecker/agent`](./charts/server/README.md) charts respectively.

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

## Upgrading

<details>

<summary>To 1.0.0</summary>

- split `metrics.enabled` and the PodMonitor deployment to `prometheus.podmonitor.enabled`
- move `metrics.interval` to `prometheus.podmonitor.interval`

</details>
