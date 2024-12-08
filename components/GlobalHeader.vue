<script setup>
const props = defineProps({ nav: Array, logo: Object });
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 49;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="sticky top-0 z-30 w-full bg-white h-20">
    <div
      class="mx-auto w-full max-w-screen-xl relative bg-white z-20 border-b border-gray-200"
    >
      <nuxt-link
        to="mailto:info@mylittleplaceonthehill.com"
        class="md:hidden absolute top-4 right-4 w-[109px] px-4 py-2 border underline bg-black text-white border-black hover:bg-white hover:text-black"
      >
        Book now
      </nuxt-link>
      <nav
        role="navigation"
        class="flex flex-col lg:flex-row justify-start lg:justify-center py-3 ml-8 lg:ml-0"
      >
        <navigation :nav="nav" />
      </nav>
    </div>

    <div
      id="logo"
      class="w-full bg-white/95 border-b border-gray-200 absolute left-0 right-0 z-10 transition-transform duration-300 ease-in-out transform"
      :class="isScrolled ? 'translate-y-0' : '-translate-y-full'"
    >
      <nuxt-img
        width="1391"
        height="298"
        fit="in"
        class="block mx-auto w-72 py-2"
        :src="logo.filename"
        :alt="logo.alt"
      />
    </div>
  </div>
</template>
