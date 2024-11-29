# server

![Version: 2.0.0](https://img.shields.io/badge/Version-2.0.0-informational?style=flat-square) ![Type: application](https://img.shields.io/badge/Type-application-informational?style=flat-square) ![AppVersion: 2.8.0](https://img.shields.io/badge/AppVersion-2.8.0-informational?style=flat-square)

A Helm chart for the Woodpecker server

**Homepage:** <https://woodpecker-ci.org/>

## Maintainers

| Name                   | Email                     | Url                                |
| ---------------------- | ------------------------- | ---------------------------------- |
| Woodpecker Maintainers | <owner@woodpecker-ci.org> | <https://github.com/woodpecker-ci> |

## Creation of agent secret

The server chart automatically creates an agent secret to securely communicate with the agent.
In the following scenarios, you need to take additional action:

- if the agent is deployed to a separate namespace, you need to create the same secret also in the agent namespace
- if you deploy multiple agents (with a different config), you need to create an additional agent secret

## Upgrading

<details>

<summary>To 2.0.0</summary>

- If you have defined the env var `WOODPECKER_AGENT_SECRET` manually, you need to decide whether you want to continue doing so (if yes, set `createAgentSecret: false`) or if you want to make use of the new `createAgentSecret: true` option (new default). This option creates a k8s secret which contains the env var `WOODPECKER_AGENT_SECRET` and can be used to connect agents in the same namespace.

</details>

<details>

<summary>To 1.0.0</summary>

- split `metrics.enabled` and the PodMonitor deployment to `prometheus.podmonitor.enabled`
- move `metrics.interval` to `prometheus.podmonitor.interval`

</details>

## Values

### NetworkPolicy

| Key                           | Type | Default                                                                                                                                                      | Description                                               |
| ----------------------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------- |
| networkPolicy.egress.database | list | `[]`                                                                                                                                                         | rule to access Database                                   |
| networkPolicy.egress.dns      | list | `[{"namespaceSelector":{"matchLabels":{"kubernetes.io/metadata.name":"kube-system"}},"podSelector":{"matchLabels":{"k8s-app":"kube-dns"}}}]`                 | rule to access DNS                                        |
| networkPolicy.egress.enabled  | bool | `true`                                                                                                                                                       | activate egress no networkpolicy                          |
| networkPolicy.egress.extra    | list | `[]`                                                                                                                                                         | rule to access additional                                 |
| networkPolicy.enabled         | bool | `false`                                                                                                                                                      | deploy networkpolicy                                      |
| networkPolicy.ingress.grpc    | list | `[{"podSelector":{"matchLabels":{"app.kubernetes.io/name":"agent"}}}]`                                                                                       | allow to grpc ports should be your woodpecker-agent       |
| networkPolicy.ingress.http    | list | `[]`                                                                                                                                                         | allow to http ports should be your ingress-controller     |
| networkPolicy.ingress.metrics | list | `[{"namespaceSelector":{"matchLabels":{"kubernetes.io/metadata.name":"monitoring"}},"podSelector":{"matchLabels":{"app.kubernetes.io/name":"prometheus"}}}]` | allow to metrics ports should be your prometheus instance |

### Other Values

| Key                              | Type   | Default                                                                       | Description                                                                                                            |
| -------------------------------- | ------ | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| affinity                         | object | `{}`                                                                          | Add affinity                                                                                                           |
| args                             | list   | `[]`                                                                          | Defines a custom args to start the container                                                                           |
| command                          | list   | `[]`                                                                          | Defines a custom command to start the container                                                                        |
| createAgentSecret                | bool   | `true`                                                                        |                                                                                                                        |
| dnsConfig                        | object | `{}`                                                                          | Overrides the default DNS configuration                                                                                |
| env                              | object | `{"WOODPECKER_ADMIN":"woodpecker,admin","WOODPECKER_HOST":"https://xxxxxxx"}` | Add environment variables for the server component                                                                     |
| extraSecretNamesForEnvFrom       | list   | `[]`                                                                          | Add extra environment variables from the secrets list                                                                  |
| extraVolumeMounts                | list   | `[]`                                                                          | Additional volumes that will be attached to the agent container                                                        |
| extraVolumes                     | list   | `[]`                                                                          | Additional volumes that can be mounted in containers                                                                   |
| fullnameOverride                 | string | `""`                                                                          | Overrides the full name of the helm chart of the server component                                                      |
| grafana.dashboards.annotations   | object | `{}`                                                                          | add annotations to configmap (to give config on grafana-sidecar e.g. put in folder)                                    |
| grafana.dashboards.enabled       | bool   | `false`                                                                       | deploy configmap with grafana dashboard (current helm-chart has no dashboards)                                         |
| grafana.dashboards.labels        | object | `{"grafana_dashboard":"1"}`                                                   | add labels to configmap (to be selected by grafana default sidecar)                                                    |
| image.pullPolicy                 | string | `"IfNotPresent"`                                                              | The image pull policy                                                                                                  |
| image.registry                   | string | `"docker.io"`                                                                 | The image registry                                                                                                     |
| image.repository                 | string | `"woodpeckerci/woodpecker-server"`                                            | The image repository                                                                                                   |
| image.tag                        | string | `""`                                                                          | Overrides the image tag whose default is the chart appVersion.                                                         |
| imagePullSecrets                 | list   | `[]`                                                                          | The image pull secrets                                                                                                 |
| ingress.annotations              | string | `nil`                                                                         | Add annotations to the ingress                                                                                         |
| ingress.enabled                  | bool   | `false`                                                                       | Enable the ingress for the server component                                                                            |
| ingress.hosts[0].host            | string | `"chart-example.local"`                                                       |                                                                                                                        |
| ingress.hosts[0].paths[0].path   | string | `"/"`                                                                         |                                                                                                                        |
| ingress.ingressClassName         | string | `""`                                                                          | Defines which ingress controller will implement the resource                                                           |
| ingress.tls                      | list   | `[]`                                                                          |                                                                                                                        |
| initContainers                   | list   | `[]`                                                                          | Add additional init containers to the pod (evaluated as a template)                                                    |
| metrics                          | object | `{"enabled":false,"port":9001}`                                               | Enabled internal metrics endpoint.                                                                                     |
| metrics.enabled                  | bool   | `false`                                                                       | enable metrics in woodpecker                                                                                           |
| nameOverride                     | string | `""`                                                                          | Overrides the name of the helm chart of the server component                                                           |
| nodeSelector                     | object | `{}`                                                                          | Defines the labels of the node where the server component must be running                                              |
| persistentVolume.enabled         | bool   | `true`                                                                        | Enable the creation of the persistent volume                                                                           |
| persistentVolume.mountPath       | string | `"/var/lib/woodpecker"`                                                       | Defines the path where the volume should be mounted                                                                    |
| persistentVolume.size            | string | `"10Gi"`                                                                      | Defines the size of the persistent volume                                                                              |
| persistentVolume.storageClass    | string | `""`                                                                          | Defines the storageClass of the persistent volume                                                                      |
| podAnnotations                   | object | `{}`                                                                          | Add pod annotations                                                                                                    |
| podSecurityContext               | object | `{}`                                                                          | Add pod security context                                                                                               |
| prometheus.podmonitor.enabled    | bool   | `false`                                                                       | deploy podmonitor                                                                                                      |
| prometheus.podmonitor.interval   | string | `nil`                                                                         | scrape interval in prometheus for this podmonitor                                                                      |
| prometheus.podmonitor.labels     | object | `{}`                                                                          | add labels to podmonitor (to be selected by prometheus-operator)                                                       |
| prometheus.rules.additionalRules | list   | `[]`                                                                          | add own prometheus-rules                                                                                               |
| prometheus.rules.alertLabels     | object | `{}`                                                                          | add labels to the prometheus-rule (inside of prometheus / in the alert)                                                |
| prometheus.rules.enabled         | bool   | `false`                                                                       | deploy prometheus-rules                                                                                                |
| prometheus.rules.labels          | object | `{}`                                                                          | add labels to prometheus-rules (to be selected by prometheus-operator)                                                 |
| resources                        | object | `{}`                                                                          | Specifies the ressources for the server component                                                                      |
| secrets                          | list   | `[]`                                                                          | Create a generic secret to store things in, e.g. env values                                                            |
| securityContext                  | object | `{}`                                                                          | Add security context                                                                                                   |
| service.clusterIP                | string | `nil`                                                                         | The cluster IP of the service (optional)                                                                               |
| service.loadBalancerIP           | string | `nil`                                                                         | The loadbalancer IP of the service (optional)                                                                          |
| service.port                     | int    | `80`                                                                          | The port of the service                                                                                                |
| service.type                     | string | `"ClusterIP"`                                                                 | The type of the service                                                                                                |
| serviceAccount.annotations       | object | `{}`                                                                          | Annotations to add to the service account                                                                              |
| serviceAccount.create            | bool   | `false`                                                                       | Specifies whether a service account should be created                                                                  |
| serviceAccount.name              | string | `""`                                                                          | The name of the service account to use. If not set and create is true, a name is generated using the fullname template |
| statefulSet.annotations          | object | `{}`                                                                          | Add annotations to the StatefulSet                                                                                     |
| statefulSet.labels               | object | `{}`                                                                          | Add labels to the StatefulSet                                                                                          |
| statefulSet.replicaCount         | int    | `1`                                                                           | Defines the number of replicas                                                                                         |
| statefulSet.revisionHistoryLimit | int    | `5`                                                                           | The maximum number of revisions that will be maintained in the StatefulSet's revision history Default in 10.           |
| tolerations                      | list   | `[]`                                                                          | Add tolerations rules                                                                                                  |
| updateStrategy.type              | string | `"RollingUpdate"`                                                             | Defines the update strategy of the StatefulSet                                                                         |
