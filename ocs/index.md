---
layout: default
title: OCs
---

<main class="min-h-screen bg-white text-black">
  <div class="mx-6"><b>OCs</b></div>
  <div class="grid grid-cols-4 gap-3">
    {% for oc in site.ocs %}
    <div class="mx-6">
      <a href="/ocs/{{ oc.term }}">
        <img
          class="rounded-lg"
          src="/assets/images/ocs/{{ oc.term }}.png"
          alt=""
          width="120"
      /></a>
      <a href="/ocs/{{ oc.term }}"> {{ oc.name }} ({{ oc.pronouns }})</a>
    </div>
    {% endfor %}
  </div>
</main>
