#!/bin/sh

user=acme
pass=acmepass
port=5433

docker run --name acme_postgres -e POSTGRES_PASSWORD=$pass -e POSTGRES_USER=$user -p $port:5432 -d postgres

echo "Done"