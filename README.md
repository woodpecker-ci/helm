# Woodpecker Helm Charts

This Repo contains the helm charts of the [Woodpecker](https://woodpecker-ci.org) project.

# woodpecker

![Version: 0.1.5](https://img.shields.io/badge/Version-0.1.5-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: v0.15.9](https://img.shields.io/badge/AppVersion-v0.15.9-informational?style=flat-square)

**Homepage:** <https://woodpecker-ci.org/>

A Helm chart for Woodpecker CI

## Versioning

We use [Semantic Versioning](https://semver.org/) to be able,
to communicate when admins have to do manual migration steps and when they can just bump versions up.

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| Woodpecker Maintainers | <owner@woodpecker-ci.org> | <https://github.com/woodpecker-ci> |

## Source Code

* <https://github.com/woodpecker-ci/woodpecker.git>
* <https://github.com/woodpecker-ci/helm.git>

## Requirements

| Repository | Name | Version |
|------------|------|---------|
|  | agent | 0.1.5 |
|  | server | 0.1.5 |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| agent.affinity | object | `{}` | Specifies the affinity |
| agent.dind.enabled | bool | `false` | Docker-in-Docker is normally not needed as Woodpecker natively supports Kubernetes |
| agent.dind.env.DOCKER_DRIVER | string | `"overlay2"` | Defines the docker driver for Docker-in-Docker |
| agent.dind.image | string | `"docker:20.10.12-dind"` | Specifies the image for Docker-in-Docker |
| agent.dind.resources | object | `{}` | Defines the resources for Docker-in-Docker |
| agent.dnsConfig | object | `{}` | Overrides the default DNS configuration |
| agent.enabled | bool | `true` | Enable the agent component |
| agent.env.WOODPECKER_BACKEND | string | `"kubernetes"` |  |
| agent.env.WOODPECKER_BACKEND_K8S_NAMESPACE | string | `"woodpecker"` |  |
| agent.env.WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS | string | `""` |  |
| agent.env.WOODPECKER_BACKEND_K8S_POD_LABELS | string | `""` |  |
| agent.env.WOODPECKER_BACKEND_K8S_STORAGE_CLASS | string | `""` |  |
| agent.env.WOODPECKER_BACKEND_K8S_STORAGE_RWX | bool | `true` |  |
| agent.env.WOODPECKER_BACKEND_K8S_VOLUME_SIZE | string | `"10G"` |  |
| agent.env.WOODPECKER_SERVER | string | `"woodpecker-server.<namespace>.svc.cluster.local:9000"` | Add the environment variables for the agent component |
| agent.extraSecretNamesForEnvFrom | list | `["woodpecker-secret"]` | Add extra secret that is contains environment variables |
| agent.fullnameOverride | string | `""` | Overrides the full name of the chart of the agent component |
| agent.image.pullPolicy | string | `"Always"` | The pull policy for the image |
| agent.image.registry | string | `"docker.io"` | The image registry |
| agent.image.repository | string | `"woodpeckerci/woodpecker-agent"` | The image repository |
| agent.image.tag | string | `""` | Overrides the image tag whose default is the chart appVersion. |
| agent.imagePullSecrets | list | `[]` | The image pull secrets |
| agent.nameOverride | string | `""` | Overrides the name of the chart of the agent component |
| agent.nodeSelector | object | `{}` | Specifies the labels of the nodes that the agent component must be running |
| agent.podAnnotations | object | `{}` | Add pod annotations for the agent component |
| agent.podSecurityContext | object | `{}` | Add pod security context |
| agent.replicaCount | int | `2` | The number of replicas for the deployment |
| agent.resources | object | `{}` | Specifies the resources for the agent component |
| agent.securityContext | object | `{}` | Add security context |
| agent.serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| agent.serviceAccount.create | bool | `true` | Specifies whether a service account should be created (also see RBAC subsection) |
| agent.serviceAccount.name | string | `""` | The name of the service account to use. If not set and create is true, a name is generated using the fullname template |
| agent.serviceAccount.rbac.create | bool | `true` | If your cluster has RBAC enabled and you're using the Kubernetes agent- backend you'll need this. (this is true for almost all production clusters) only change this if you have a non CNCF compliant cluster, missing the RBAC endpoints the Role and RoleBinding are only created if serviceAccount.create is also true |
| agent.serviceAccount.rbac.role.annotations | object | `{}` |  |
| agent.serviceAccount.rbac.role.labels | object | `{}` |  |
| agent.serviceAccount.rbac.roleBinding.annotations | object | `{}` |  |
| agent.serviceAccount.rbac.roleBinding.labels | object | `{}` |  |
| agent.tolerations | list | `[]` | Specifies the tolerations |
| agent.topologySpreadConstraints | list | `[]` | Using topology spread constraints, you can ensure that there is at least one agent pod for each topology zone, e.g. one per arch for multi-architecture clusters or one for each region for geographically distributed cloud-hosted clusters. Ref: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/ |
| server.affinity | object | `{}` | Add affinity |
| server.dnsConfig | object | `{}` | Overrides the default DNS configuration |
| server.enabled | bool | `true` | Enable the server component |
| server.env | object | `{"WOODPECKER_ADMIN":"woodpecker,admin","WOODPECKER_HOST":"https://xxxxxxx"}` | Add environment variables for the server component |
| server.extraSecretNamesForEnvFrom | list | `["woodpecker-secret"]` | Add extra environment variables from the secrets list |
| server.fullnameOverride | string | `""` | Overrides the full name of the helm chart of the server component |
| server.image.pullPolicy | string | `"Always"` | The image pull policy |
| server.image.registry | string | `"docker.io"` | The image registry |
| server.image.repository | string | `"woodpeckerci/woodpecker-server"` | The image repository |
| server.image.tag | string | `""` | Overrides the image tag whose default is the chart appVersion. |
| server.imagePullSecrets | list | `[]` | The image pull secrets |
| server.ingress.annotations | string | `nil` | Add annotations to the ingress |
| server.ingress.enabled | bool | `false` | Enable the ingress for the server component |
| server.ingress.hosts[0].host | string | `"chart-example.local"` |  |
| server.ingress.hosts[0].paths[0].backend.serviceName | string | `"chart-example.local"` |  |
| server.ingress.hosts[0].paths[0].backend.servicePort | int | `80` |  |
| server.ingress.hosts[0].paths[0].path | string | `"/"` |  |
| server.ingress.ingressClassName | string | `""` | Defines which ingress controller will implement the resource |
| server.ingress.tls | list | `[]` |  |
| server.nameOverride | string | `""` | Overrides the name of the helm chart of the server component |
| server.nodeSelector | object | `{}` | Defines the labels of the node where the server component must be running |
| server.persistentVolume.enabled | bool | `true` | Enable the creation of the persistent volume |
| server.persistentVolume.mountPath | string | `"/var/lib/woodpecker"` | Defines the path where the volume should be mounted |
| server.persistentVolume.size | string | `"10Gi"` | Defines the size of the persistent volume |
| server.persistentVolume.storageClass | string | `""` | Defines the storageClass of the persistent volume |
| server.podAnnotations | object | `{}` | Add pod annotations |
| server.podSecurityContext | object | `{}` | Add pod security context |
| server.resources | object | `{}` | Specifies the ressources for the server component |
| server.securityContext | object | `{}` | Add security context |
| server.service.port | int | `80` | The port of the service |
| server.service.type | string | `"ClusterIP"` | The type of the service |
| server.serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| server.serviceAccount.create | bool | `true` | Specifies whether a service account should be created |
| server.serviceAccount.name | string | `""` | The name of the service account to use. If not set and create is true, a name is generated using the fullname template |
| server.statefulSet.annotations | object | `{}` | Add annotations to the StatefulSet |
| server.statefulSet.labels | object | `{}` | Add labels to the StatefulSet |
| server.statefulSet.replicaCount | int | `1` | Defines the number of replicas |
| server.statefulSet.revisionHistoryLimit | int | `5` | The maximum number of revisions that will be maintained in the StatefulSet's revision history Default in 10. |
| server.tolerations | list | `[]` | Add tolerations rules |
| server.updateStrategy.type | string | `"RollingUpdate"` | Defines the update strategy of the StatefulSet |
