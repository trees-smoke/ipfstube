# SmokeTube

Watch Smoke.io videos stored on IPFS

Live at [smoketube.witness.pw](https://smoketube.witness.pw)

[Demo video](https://smoketube.witness.pw/player.html?v=QmTx4XECwfn4kgzMa8KgL932Vc3yk8LbJJ9NgU4ox5yEQf)

Users can upload videos that will be 'pinned' or saved across several servers in order to be better available for download.

If one sets up a SmokeTube clone and joins the network, they can help decentralize and strengthen the system.


## Requirements

- ipfs
- ipfs-cluster
- nginx or apache2

## Setup

### IPFS

1. [Download IPFS](https://dist.ipfs.io/#go-ipfs)

2. Install,

       tar xzf go-ipfs_v0.4.18_linux-amd64.tar.gz
       cd go-ipfs/
       sudo ./install.sh
       
3. Initialize IPFS,

       ipfs init
       
4. Begin IPFS daemon, with garbage-collection on.

       ipfs daemon --enable-gc
       
 ### IPFS-cluster
 
 1. [Download IPFS-cluster](https://dist.ipfs.io/#ipfs-cluster-service)
 
 2. Install,
 
        tar xzf ipfs-cluster-service_v0.7.0_linux-amd64.tar.gz
        cd ipfs-cluster-service/
        sudo cp ipfs-cluster-service /usr/local/bin/
        
3.  Initialize ipfs-cluster-service,

        export CLUSTER_SECRET=<Contact @trees on Discord https://discord.gg/n6YUeuA for Cluster Secret>
        ipfs-cluster-service init
        ipfs-cluster-service daemon --bootstrap <Contact @trees on Discord https://discord.gg/n6YUeuA for bootstrap address>
        
### 'Storage Nodes' could stop here to not be a public gateway and only act as backend storage, fetched by the public gateways as needed.

### nginx / apache2

If you already have either of these installed, refer to the configuration for that server.  It can be added alongside existing domains.

If you're not currently running either and have no preference between the two, nginx is likely the suggested option.

1. Install,

       sudo apt install nginx
       
If you want to turn off access logs you can edit /etc/nginx/nginx.conf setting to,

       access_log off;

2. Edit /etc/nginx/sites-enabled/default to include the configuration options for nginx.

3. Contact @trees on [Discord](https://discord.gg/n6YUeuA) for the TLS certificates.

4. Reload nginx,

       sudo service nginx reload
       
5. Contact @trees on [Discord](https://discord.gg/n6YUeuA) with your IP address(es) to be added to the DNS record.  The node should begin to send and receive traffic.
