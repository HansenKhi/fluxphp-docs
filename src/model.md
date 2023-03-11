---
pageInfo: false
---

# Model

[[toc]]

### Creating a Model

Create a new file inside `app/Model` directory, let's call it `Post.php`, inside `Post.php` write:

```php
namespace FluxPHP\App\Model;

use FluxPHP\Source\Model;

class Post
{
    use Model;

    public function __construct()
    {
        // Replace the 1st argument with table name
        $this->setup("post");
    }
}
```

### Implementing a Model

##### findAll

```php
// routes/main.php

// Use the model classes
use FluxPHP\App\Model\Post;

$route->get("/", function() {
    $post = new Post();
    dd($post->findAll());
});
```

##### findById

It will return data by id

```php
// routes/main.php

// Use the model classes
use FluxPHP\App\Model\Post;

$route->get("/", function() {
    $post = new Post();
    dd($post->findById("1"));
});
```

##### first

Return the first data of table

```php
// routes/main.php

// Use the model classes
use FluxPHP\App\Model\Post;

$route->get("/", function() {
    $post = new Post();
    dd($post->first());
});
```

##### query

:::tip
The ```_``` keyword represents the database name, you can use the query to query all tables in the database
:::

```php
// routes/main.php

// Use the model classes
use FluxPHP\App\Model\Post;

$route->get("/", function() {
    $post = new Post();
    $query = $post->query("INSERT INTO _ (name, description, value) VALUES ('First Post', 'My First Post', 'lorem ipsum...')");
    return $query->execute();
});
```