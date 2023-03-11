---
pageInfo: false
---

# View

[[toc]]

### Layouting System

Create a new file inside `app/View/` directory, lets call it with `main.php`, and create another new file, let's call the 2nd file `layout.php` inside layout.php, write:

```php {7}
<!-- layout.php -->

<html>
    <head>
        <title>My Websites</title>
    </head>
    <body>
        <?php $this->yield("mySection") ?>
    </body>
<html>

```

inside `main.php`:

:::tip
When using `$this->extends()` or `view()` function it doesnt require `.php` at the end!
:::

```php
<?= $this->extends("layout"); ?>

<?= $this->block("mySection"); ?>
    <h1>FluxPHP</h1>
<?= $this->endBlock(); ?>
```