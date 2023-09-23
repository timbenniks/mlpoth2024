<template>
  <button
    class="nav-toggle relative h-12 w-12 bg-white lg:hidden mt-6"
    onclick="this.classList.toggle('open')"
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
  <ul class="hidden lg:flex text-md space-x-12 navigation">
    <li><a href="/#home" rel="noopener" title="Home">home</a></li>
    <li>
      <a href="/#little-info" rel="noopener" title="little info"
        >little info
      </a>
    </li>
    <li>
      <a href="/#accomodation" rel="noopener" title="accommodation"
        >accommodation
      </a>
    </li>
    <li>
      <a
        href="/#location-directions"
        rel="noopener"
        title="location & directions"
        >location & directions
      </a>
    </li>
    <li><a href="/#rates" rel="noopener" title="rates">rates</a></li>
    <li>
      <a href="/#little-scrapbook" rel="noopener" title="little scrapbook"
        >little scrapbook
      </a>
    </li>
    <li>
      <a href="/#contact-us" rel="noopener" title="contact us">contact us</a>
    </li>
  </ul>
</template>

<style lang="postcss" scoped>
.nav-toggle.open + ul {
  @apply block;
}

.nav-toggle.open .line-1 {
  @apply rotate-45 translate-y-0;
}

.nav-toggle.open .line-2 {
  @apply opacity-0;
}

.nav-toggle.open .line-3 {
  @apply -rotate-45 translate-y-0;
}
</style>
