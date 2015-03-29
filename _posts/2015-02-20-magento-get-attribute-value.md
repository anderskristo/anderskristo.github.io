---
layout: post
title: "Magento: Get attribute value"
category: magento
tags: [magento, php, development, tips]
comments: true
---

This nifty little snippet grabs an value from a attribute in Magento.

{% highlight php %}
<?php
  $productModel = Mage::getModel('catalog/product');
  $int_attr_id = [ID]; // Replace [ID] with your attribute ID
  $attr = Mage::getModel('catalog/resource_eav_attribute')->load($int_attr_id);
  $attributeValue = $_product->getResource()->getAttribute($attr->getAttributeCode())->getFrontend()->getValue($_product);

  var_dump($attributeValue); // Dump the value

  {% endhighlight %}

Gist here: https://gist.github.com/anderskristo/616a741bd60176e7e6be
