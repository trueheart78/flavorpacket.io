---
title: OCs
description: 'Original characters, lore, and more.'
image: /assets/images/ocs/placeholder.png
layout: default
---

<main class="min-h-screen bg-white text-black">
  <div class="mx-6"><b>OCs</b></div>
  <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
    {% for oc in site.ocs %}
    <div class="mx-2 sm:mx-6">
      <a href="/ocs/{{ oc.term }}">
        <img
          class="rounded-lg w-full h-auto"
          src="/assets/images/ocs/{{ oc.term }}.png"
          alt=""
        ></a>
      <a href="/ocs/{{ oc.term }}"> {{ oc.name }} ({{ oc.pronouns }})</a>
    </div>
    {% endfor %}
  </div>
</main>
