#!/bin/sh

user=acme
pass=acmepass
port=5433
table_name=logs

query="do \$\$
begin
IF NOT(EXISTS(SELECT * FROM information_schema.tables WHERE table_schema='public' AND table_name='$table_name')) THEN
    CREATE TABLE public.$table_name
    (
      created_at TIMESTAMP DEFAULT now() NOT NULL,
      level VARCHAR(20) NOT NULL,
      message TEXT NOT NULL
    );
END IF;
end
\$\$"

PGPASSWORD=$pass psql -h localhost -p $port -U $user -c "${query}" > /dev/null

echo "Done"