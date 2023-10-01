<script setup>
const props = defineProps({ blok: Object });

const navId = computed(() => {
  return props.blok.navigation_title
    .replace(" ", "-")
    .replace("-& ", "-")
    .toLowerCase();
});
</script>

<template>
  <section
    class="max-w-screen-2xl mx-auto text-center"
    v-editable="blok"
    :id="navId"
  >
    <img
      :src="blok.Logo.filename"
      :alt="blok.Logo.alt"
      loading="eager"
      width="1391"
      height="298"
      class="mx-auto mt-12 block max-w-3xl w-10/12"
    />
    <address class="md:hidden mb-14 not-italic underline">
      <a href="mailto:info@mylittleplaceonthehill.com">
        info@mylittleplaceonthehill.com
      </a>
    </address>
    <h1 class="text-base md:text-lg max-w-3xl w-11/12 mt-12 mx-auto mb-24">
      {{ blok.headline }}
    </h1>

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 lg:px-0 max-w-5xl mx-auto"
    >
      <polaroid
        :image="polaroid"
        v-for="polaroid in blok.images"
        :key="polaroid._uid"
        loading="eager"
      />
    </div>

    <ul
      v-if="blok.icons"
      class="my-8 flex flex-row space-x-4 justify-center max-w-xl mx-auto"
    >
      <li v-for="icon in blok.icons" :key="icon._uid">
        <nuxt-link
          :to="icon.url.url || `/${icon.url.cached_url}`"
          target="_blank"
        >
          <nuxt-img
            provider="storyblok"
            :src="icon.icon.filename"
            :alt="icon.name"
            width="40"
          />
        </nuxt-link>
      </li>
    </ul>

    <nuxt-img
      v-if="blok.greek_banner"
      :src="blok.greek_banner.filename"
      class="mx-auto max-w-11/12"
      alt="Greek Mandatory Banner"
      loading="lazy"
      width="601"
      height="82"
    />
  </section>
</template>
