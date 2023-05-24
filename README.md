# Woodpecker Helm Charts

This Repo contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

## Charts

- [**woodpecker**](./charts/woodpecker/README.md): A Helm chart for the Woodpecker server and agent
- [**woodpecker-agent**](./charts/agent/README.md): A Helm chart for the Woodpecker agent
- [**woodpecker-server**](./charts/server/README.md): A Helm chart for the Woodpecker server

**Source Code**: <https://github.com/woodpecker-ci/woodpecker>

## Installation

To install the latest release of the woodpecker chart:

```sh
helm repo add woodpecker https://woodpecker-ci.org/

helm install woodpecker-agent woodpecker/woodpecker
```

**Note**: The `woodpecker/woodpecker` chart contains both the server and the agent.
If you want to install only the server or agent you can use the [`woodpecker/server`](./charts/server/README.md) or [`woodpecker/agent`](./charts/server/README.md) charts respectively.

### Next version

To install Woodpecker with native Kubernetes support from the latest commit of the `main` branch ([Which version of Woodpecker should I use?](https://woodpecker-ci.org/faq#which-version-of-woodpecker-should-i-use)) use following values:

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

If you're using the helm-release terraform module, the following definition can be used:

```hcl
resource "helm_release" "woodpecker" {
  name  = "woodpecker"
  chart = "woodpecker"
  repository       = "https://woodpecker-ci.org/"
  create_namespace = true
  version          = "1.0.0"
  namespace        = "woodpecker"
```

## Versioning

We use [Semantic Versioning](https://semver.org/) to be able,
to communicate when admins have to do manual migration steps and when they can just bump versions up.
