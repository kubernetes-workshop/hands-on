# Prerequisites

## How to install Kubernetes kubectl command line utility by leveraging Chocolatey installer

open PowerShell as administrator:

```
# install chocolatey
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

# install kubectl
choco install kubernetes-cli

# troubleshoot docker/kubectl installation
where docker.exe
cd "C:\Program Files\Docker\Docker\Resources\bin"
"C:\Program Files\Docker\Docker\Resources\bin\kubectl" get nodes
```