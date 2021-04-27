#### use cluster to manage node cluster yourself

```bash
node index-with-cluster-module.js
```

#### use pm2 to manage node cluster

```bash
pm2 start index.js -i 0 # figure out best number of instances of node
pm2 show index # show details
pm2 monit # monitor all instances in real time
pm2 delete index # delete all instances
```
