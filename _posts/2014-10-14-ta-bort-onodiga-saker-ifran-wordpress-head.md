---
layout: post
title: "Ta bort onödiga saker ifrån Wordpress head"
category: wordpress
tags: [wordpress, php, development]
comments: true
---

En sak med WordPress jag inte gillar är att "head" är fullproppat med vad jag tycker är onödiga saker.

Med [remove_action](http://codex.wordpress.org/Function_Reference/remove_action) funktionen så kan man ta bort eller rensa upp sin "head". Här har ni några exempel på vad man skulle kunna ta bort.


{% highlight php %}
  // Tar bort "Really Simple Discovery" länk
  remove_action('wp_head', 'rsd_link');
  // Tar bort WordPress versionen
  remove_action('wp_head', 'wp_generator');

  // Tar bort RSS feeds(onödigt om man icke använder)
  remove_action('wp_head', 'feed_links', 2);
  remove_action('wp_head', 'feed_links_extra', 3);

  // Tar bort post länkar samt nästa/föregående länkar
  remove_action('wp_head', 'start_post_rel_link', 10, 0);
  remove_action('wp_head', 'parent_post_rel_link', 10, 0);
  remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
  remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );

  // Tar bort länk till index
  remove_action('wp_head', 'index_rel_link');
  // Tar bort wlwmanifest.xml, används för att stödja Window Live Writer
  remove_action('wp_head', 'wlwmanifest_link');

  remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0 );
{% endhighlight %}
