---
layout: page
title: Spirou Sailors
bigimg: /img/pages/sailors.jpg
---
# Juniors 2017
<ul>
{% for sailor in site.sailors %}
  {% if sailor.junior == 2017 %}
    <li>
    <a href="{{ sailor.url }}">{{ sailor.firstname }} {{ sailor.lastname }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>

# Our more experienced Sailors
<ul>
{% for sailor in site.sailors %}
  {% if sailor.junior <> 2017 %}
    <li>
    <a href="{{ sailor.url }}">{{ sailor.firstname }} {{ sailor.lastname }}</a>
    </li>
  {% endif %}
{% endfor %}
</ul>