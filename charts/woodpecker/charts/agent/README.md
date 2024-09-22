# agent

![Version: 0.4.0](https://img.shields.io/badge/Version-0.4.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.7.1](https://img.shields.io/badge/AppVersion-2.7.1-informational?style=flat-square)

A Helm chart for the Woodpecker agent

**Homepage:** <https://woodpecker-ci.org/>

## Maintainers

| Name | Email | Url |
| ---- | ------ | --- |
| Woodpecker Maintainers | <owner@woodpecker-ci.org> | <https://github.com/woodpecker-ci> |

## Values

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| affinity | object | `{}` | Specifies the affinity |
| args | list | `[]` | Defines a custom args to start the container |
| command | list | `[]` | Defines a custom command to start the container |
| dnsConfig | object | `{}` | Overrides the default DNS configuration |
| env.WOODPECKER_BACKEND | string | `"kubernetes"` |  |
| env.WOODPECKER_BACKEND_K8S_NAMESPACE | string | `"woodpecker"` |  |
| env.WOODPECKER_BACKEND_K8S_POD_ANNOTATIONS | string | `""` |  |
| env.WOODPECKER_BACKEND_K8S_POD_LABELS | string | `""` |  |
| env.WOODPECKER_BACKEND_K8S_STORAGE_CLASS | string | `""` |  |
| env.WOODPECKER_BACKEND_K8S_STORAGE_RWX | bool | `true` |  |
| env.WOODPECKER_BACKEND_K8S_VOLUME_SIZE | string | `"10G"` |  |
| env.WOODPECKER_CONNECT_RETRY_COUNT | string | `"1"` |  |
| env.WOODPECKER_SERVER | string | `"woodpecker-server:9000"` | Add the environment variables for the agent component |
| extraSecretNamesForEnvFrom | list | `["woodpecker-secret"]` | Add extra secret that is contains environment variables |
| extraVolumeMounts | list | `[]` | Additional volumes that will be attached to the agent container |
| extraVolumes | list | `[]` | Additional volumes that can be mounted in containers |
| fullnameOverride | string | `""` | Overrides the full name of the chart of the agent component |
| image.pullPolicy | string | `"IfNotPresent"` | The pull policy for the image |
| image.registry | string | `"docker.io"` | The image registry |
| image.repository | string | `"woodpeckerci/woodpecker-agent"` | The image repository |
| image.tag | string | `""` | Overrides the image tag whose default is the chart appVersion. |
| imagePullSecrets | list | `[]` | The image pull secrets |
| initContainers | list | `[]` | Add additional init containers to the pod (evaluated as a template) |
| nameOverride | string | `""` | Overrides the name of the chart of the agent component |
| nodeSelector | object | `{}` | Specifies the labels of the nodes that the agent component must be running |
| persistence.accessModes | list | `["ReadWriteOnce"]` | Defines the access mode of the persistent volume |
| persistence.enabled | bool | `true` | Enable the creation of the persistent volume |
| persistence.existingClaim | string | `nil` | Defines an existing claim to use |
| persistence.mountPath | string | `"/etc/woodpecker"` | Defines the path where the volume should be mounted |
| persistence.size | string | `"1Gi"` | Defines the size of the persistent volume |
| persistence.storageClass | string | `""` | Defines the storageClass of the persistent volume |
| podAnnotations | object | `{}` | Add pod annotations for the agent component |
| podSecurityContext | object | `{}` | Add pod security context |
| replicaCount | int | `2` | The number of replicas for the deployment |
| resources | object | `{}` | Specifies the resources for the agent component |
| secrets | object | `{}` | Create an agent secret |
| securityContext | object | `{}` | Add security context |
| serviceAccount.annotations | object | `{}` | Annotations to add to the service account |
| serviceAccount.create | bool | `true` | Specifies whether a service account should be created (also see RBAC subsection) |
| serviceAccount.name | string | `""` | The name of the service account to use. If not set and create is true, a name is generated using the fullname template |
| serviceAccount.rbac.create | bool | `true` | If your cluster has RBAC enabled and you're using the Kubernetes agent- backend you'll need this. (this is true for almost all production clusters) only change this if you have a non CNCF compliant cluster, missing the RBAC endpoints the Role and RoleBinding are only created if serviceAccount.create is also true |
| serviceAccount.rbac.role.annotations | object | `{}` |  |
| serviceAccount.rbac.role.labels | object | `{}` |  |
| serviceAccount.rbac.roleBinding.annotations | object | `{}` |  |
| serviceAccount.rbac.roleBinding.labels | object | `{}` |  |
| tolerations | list | `[]` | Specifies the tolerations |
| topologySpreadConstraints | list | `[]` | Using topology spread constraints, you can ensure that there is at least one agent pod for each topology zone, e.g. one per arch for multi-architecture clusters or one for each region for geographically distributed cloud-hosted clusters. Ref: <https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/> |
