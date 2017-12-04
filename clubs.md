---
layout: page
title: Clubs
---
<ul>
{% for club in site.data.clubs %}
<li><a href="#{{club.clubid}}">{{club.name}}</a></li>
{% endfor %}
</ul>

{% for club in site.data.clubs %}
<div id="{{club.clubid}}" class="clubinfo">
{% include /clubinfo.html clubid=club.clubid %}
</div>
{% endfor %}

