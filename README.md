# Blog

## Run
```
docker run -d \
-p 2368:2368 \
--name katsuobushi-blog \
-e NODE_ENV=development \
-e database__connection__filename='/var/lib/ghost/content/data/ghost-local.db' \
-v "$(PWD)/content:/var/lib/ghost/content" \
ghost
```

## Dashboard
[http://localhost:2368/ghost](http://localhost:2368/ghost)

## Build
```
make build
```