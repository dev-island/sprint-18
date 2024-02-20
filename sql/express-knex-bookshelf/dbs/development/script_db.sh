#!/bin/bash
echo "Script to construct Database!"
export PGPASSWORD=admin
psql -h localhost -d postgres -U postgres -p 5432 -a -q -f ./dbs/development/db.sql
