FROM caddy:2-builder-alpine AS caddy_builder

RUN set -e; xcaddy build \
    --with github.com/darkweak/souin/plugins/caddy

FROM caddy:2-alpine AS app_caddy

WORKDIR /var/www/html

COPY --from=caddy_builder /usr/bin/caddy /usr/bin/caddy
