---
pageInfo: false
---

# Database

[[toc]]

### Migration

Database migration is the process of migrating data from one or more source databases to one or more target databases by using a database migration service.

from [Google Cloud](https://cloud.google.com/architecture/database-migration-concepts-principles-part-1)

### Applying Migration

Open terminal and execute

:::tip
You can use `php flux migrate:up` too, its the same as `php flux migrate`
:::

```bash
php flux migrate
```

When you execute ```php flux migrate``` it will connect to the database, if the database isnt exists on the localhost, it will create sending error message, its will create a new table `migrations` is the default table from migrations, and `users` from `app/Database/Migration/m001_create_users_table.php/`

### Down Migration

Down migration used for execute down function & delete table `migrations`, here's the command

```bash
php flux migrate:down
```