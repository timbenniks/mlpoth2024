<script setup>
defineProps({ nav: Array });
const open = ref(false);

function setActiveLink() {
  document.querySelectorAll(".navigation a").forEach((link) => {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(
    '.navigation a[href^="/' + window.location.hash + '"]'
  );

  activeLink && activeLink.classList.add("active");
}

onMounted(() => {
  window.addEventListener("hashchange", setActiveLink);
  setActiveLink();
});

function toggle() {
  open.value = !open.value;
}
</script>

<template>
  <button
    class="nav-toggle relative h-12 w-12 bg-white lg:hidden"
    :class="open ? 'open' : ''"
    @click="toggle()"
  >
    <span class="sr-only">Open main menu</span>
    <div
      class="absolute left-1/2 top-1/2 block w-6 -translate-x-1/2 -translate-y-1/2 transform"
    >
      <span
        class="line-1 -translate-y-1.5 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
      <span
        class="line-2 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
      <span
        class="line-3 translate-y-1.5 absolute block h-0.5 w-6 transform bg-black transition duration-500 ease-in-out"
      ></span>
    </div>
  </button>
  <ul
    class="ml-4 lg:ml-0 lg:flex text-md space-y-2 lg:space-y-0 lg:space-x-12 navigation"
    :class="open ? 'block' : 'hidden'"
  >
    <li v-for="link in nav" :key="link.id">
      <a
        :href="`/#${link.id}`"
        rel="noopener"
        :title="link.name"
        @click="toggle()"
        >{{ link.name }}</a
      >
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.nav-toggle.open .line-1 {
  transform: rotate(45deg) translateY(0px);
}

.nav-toggle.open .line-2 {
  opacity: 0;
}

.nav-toggle.open .line-3 {
  transform: rotate(-45deg) translateY(0px);
}

.navigation a.active {
  text-decoration: underline;
}
</style>
