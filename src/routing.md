---
pageInfo: false
---

# Routing

[[toc]]

### Simple Routing

```php {3,4,5}
// routes/main.php

$route->get("/", function() {
    return "Hello, World!";
});
```

### Render View Files

There is a function called ``view($fileName, $data)`` when you call ``view`` function it will search file in directoty ``app/View/`` here's some examples

```php {4}
// routes/main.php

$route->get("/", function() {
    view("index");
});
```

### Routing with Parameters

```php {3,4,5}
// routes/main.php

$route->get("/info/{param}", function($param) {
    return "Hello, $param!";
});
```

### Using Controllers

First you need to create a file inside directory ``app/Controller/`` let's call it ``HomeController``, here's some example code:

```php
// app/Controller/HomeController.php

namespace FluxPHP\App\Controller;

class HomeController
{
    public function index()
    {
        view("index");
    }
}

```