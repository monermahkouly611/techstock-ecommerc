## Run with Docker

```bash
cp .env.example .env      # then edit the values
docker compose up --build
```

- Store: http://localhost:3000
- API: http://localhost:3001
- MariaDB 10.4 is created and seeded from `techstockDB.sql` on first run.
