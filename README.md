# Woodpecker Helm Charts

This Repo contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

## Versioning

We use [Semantic Versioning](https://semver.org/) to be able,
to communicate when admins have to do manual migration steps and when they can just bump versions up.

## Installation

### Latest Release

To install the latest release of the chart:

```sh
helm repo add woodpecker https://woodpecker-ci.org/

helm install woodpecker-agent woodpecker/woodpecker-agent --version=0.15.6
helm install woodpecker-server woodpecker/woodpecker-server --version=0.15.6
```

**Note**: The latest release differs highly from the most recent HEAD version (called "next").
It is therefore recommended to install the latest git version as of now, especially when running with the Kubernetes backend (which most people will do when going with helm).

### Latest Git Version / "Next"

To install from git, the [helm-git](https://github.com/aslafy-z/helm-git) plugin is required.
Then, the chart can be installed like this:

```sh
helm repo add woodpecker-agent-git git+https://github.com/woodpecker-ci/helm@woodpecker-agent?ref=main
helm repo add woodpecker-server-git git+https://github.com/woodpecker-ci/helm@woodpecker-server?ref=main

helm install woodpecker-agent woodpecker-agent-git/woodpecker-agent
helm install woodpecker-server woodpecker-server-git/woodpecker-server
```

In addition, make sure to use the `"next"` tag for the images as well:

Agent:

```yml
image:
  registry: docker.io
  repository: woodpeckerci/woodpecker-agent
  pullPolicy: Always
  tag: "next-alpine"
```

Server:

```yml
image:
  registry: docker.io
  repository: woodpeckerci/woodpecker-server
  pullPolicy: Always
  tag: "next-alpine"
```

#### Installing "next" with terraform

If you're using the helm-release terraform module, the following definition can be used:

```hcl
resource "helm_release" "woodpecker-agent" {
  name  = "woodpecker-agent"
  chart = "woodpecker-agent"
  repository       = "git+https://github.com/woodpecker-ci/helm@woodpecker-agent?ref=main"
  create_namespace = true
  version          = "1.0.0"
  namespace        = "woodpecker-agent"
```

Note however, that you're runners must also have the `helm-git` plugin installed.
