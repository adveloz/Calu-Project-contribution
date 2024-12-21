#!/bin/sh

# Wait for PostgreSQL to be ready
until pg_isready -h postgres -U postgres; do
  echo "Waiting for Postgres to be ready..."
  sleep 2
done

# Make migrations
python manage.py makemigrations

# Migrate
python manage.py migrate

# Collect statics
python manage.py collectstatic --noinput

# Start the Gunicorn server
exec gunicorn --bind 0.0.0.0:8000 rest_api.wsgi:application
