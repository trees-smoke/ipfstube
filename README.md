# SmokeTube

Watch Smoke.io videos stored on IPFS

Live at [smoketube.witness.pw](https://smoketube.witness.pw)

[Demo video](https://smoketube.witness.pw/player.html?v=QmTx4XECwfn4kgzMa8KgL932Vc3yk8LbJJ9NgU4ox5yEQf)


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
       
### nginx

1. Install nginx,

       sudo apt install nginx
       
2. Edit /etc/nginx/nginx.conf and /etc/nginx/sites-enabled/default similar to the nginx.conf and /sites-enabled/default here.

