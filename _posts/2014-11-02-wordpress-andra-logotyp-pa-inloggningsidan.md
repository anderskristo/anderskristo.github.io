---
layout: post
title: "Wordpress: Ändra logotyp på inloggningsidan"
category: wordpress
tags: [wordpress, php, development]
comments: true
---

För att göra Wordpress lite mer "egen" så kommer här ett tips på hur man byter ut Wordpress egna logotyp mot sin egen.

Lägg in denna kod i filen "functions.php", den hittar du i root katalogen för ditt aktiva tema.

{% highlight php %}
function min_inloggnings_logotyp() { ?>
    <style type="text/css">
        body.login div#login h1 a {
            background-image: url(<?php echo get_stylesheet_directory_uri(); ?>/images/min-inloggnings-logotyp.png);
            padding-bottom: 30px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'min_inloggnings_logotyp' );  
{% endhighlight %}
