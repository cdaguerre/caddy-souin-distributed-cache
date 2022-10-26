# Cache storage implementation benchmark for Souin as Caddy plugin

## Spin up containers for your test case
```sh
$ CACHE=etcd-single-node docker compose up -d
$ CACHE=etcd-cluster docker compose up -d
$ CACHE=redis docker compose up -d
$ CACHE=olric docker compose up -d # External olric
$ CACHE=none docker compose up -d # Embedded olric
```

## Run load performance test
```sh
$ docker compose run --rm test
```

## Results for 100 VUs, 500 iterations, 5 seconds

|                  | Hit ratio |
|------------------|-----------|
| Embedded olric   | 99 %      |
| External olric   | 0 %       |
| Etcd single node | 61 %      |
| Etcd cluster     | 50 %      |
| Redis            | 2 %       |
