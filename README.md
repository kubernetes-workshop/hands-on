# Hands-On Kubernetes Basics

prerequisites:

* git
* docker
* kubectl
* docker hub account (2min)
([for more details on prerequisites](./prerequisites.md))

## Download .kube\config

```
# 1) clean up local configuration files before creating a new cluster
del $HOME\.kube\config
del $HOME\.azure\aksServicePrincipal.json

# 2) download .kube\config
mkdir $HOME\.kube\config
Invoke-WebRequest 'https://kubalibre.blob.core.windows.net/kube/config' -OutFile $HOME\.kube\config

# 3) test connection to cluster
kubectl get nodes
```

## Exercises

```
# depending on your team please checkout the corresponding branch :-)
git checkout team1
git checkout team2
git checkout team3
git checkout team4
```

please refer to your workbook

