FROM golang as build-env
RUN go get -u github.com/rakyll/hey

FROM debian:stretch-slim

RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates curl wget && rm -rf /var/lib/apt/lists/*

ENV ENDPOINT -1

WORKDIR /app
COPY --from=build-env /go/bin/hey /app


#/app/hey -z 30s -c 6400 -m GET $ENDPOINT
#CMD ["./hey", "-z", "30s", "-c", "6400", "-m", "GET", "$ENDPOINT" ]