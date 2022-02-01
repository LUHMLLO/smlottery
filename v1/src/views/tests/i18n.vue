<script setup lang="ts">
const { t, availableLocales, locale } = useI18n();

const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <min-column class="gap-16">
    <h1>{{ t("hello") }}</h1>
    <p>{{ t("explaining") }}</p>
    <a href="">{{ t("more-info-click-here") }}</a>
    <button @click="toggleLocales">{{ t("toggle-language") }}</button>
  </min-column>
</template>
