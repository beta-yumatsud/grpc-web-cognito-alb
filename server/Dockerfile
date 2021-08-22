FROM alpine:3.12

RUN apk update \
    && apk upgrade \
    && apk add --update-cache --no-cache --virtual .create-user shadow \
    && groupadd -g 1000 greeter-server \
    && useradd -u 1000 -g 1000 greeter-server \
    && apk del .create-user \
    && apk add tzdata ca-certificates \
    && rm -rf /var/cache/apk/*

ENV TZ=Asia/Tokyo

USER greeter-server
WORKDIR /app
COPY ./.artifacts/greeter-server-linux-amd64 .

CMD ["./greeter-server-linux-amd64"]
