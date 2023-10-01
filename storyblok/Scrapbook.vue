<script setup>
const props = defineProps({ blok: Object });

const navId = computed(() => {
  return props.blok.navigation_title
    .replace(" ", "-")
    .replace("-& ", "-")
    .toLowerCase();
});

const images = computed(() => {
  return props.blok.images.map((image) => {
    return image.filename;
  });
});

onMounted(() => {
  const pages = document.getElementsByClassName("page");
  for (let i = 0; i < pages.length; i++) {
    pages[i].pageNum = i + 1;
    pages[i].onclick = function () {
      if (this.pageNum % 2 === 0) {
        this.classList.remove("flipped");
        this.previousElementSibling.classList.remove("flipped");
      } else {
        this.classList.add("flipped");
        this.nextElementSibling.classList.add("flipped");
      }
    };
  }
});
</script>

<template>
  <section
    class="mx-auto text-left mt-44 max-w-11/12"
    v-editable="blok"
    :id="navId"
  >
    <h3 class="text-3xl mb-4 text-center">{{ blok.title }}</h3>

    <div class="book">
      <div id="pages" class="pages">
        <div
          class="page"
          v-for="(image, index) in images"
          :key="image"
          :style="index % 2 === 0 ? `z-index: ${images.length - index}` : ''"
        >
          <NuxtImg
            class="page-image object-cover rounded-sm"
            width="500"
            alt=""
            provider="storyblok"
            loading="eager"
            :src="image"
            sizes="sm:50vw md:600px"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.book {
  --dwidth: 80vw;
  --width: 40vw;
  --height: 40vw;

  transition: opacity 0.4s 0.2s;
}

.page {
  width: var(--width);
  height: var(--height);
  float: left;
  margin-bottom: 0.5em;
}

.page .page-image {
  background: top no-repeat;
  background-size: cover;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  margin: 1rem auto;
}

.page:nth-child(even) {
  clear: both;
}

.book {
  perspective: 250vw;
}

.book .pages {
  width: var(--dwidth);
  height: var(--height);
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 10px;
}

.book .page {
  float: none;
  clear: none;
  margin: 0;
  position: absolute;
  top: 0;
  width: var(--width);
  height: var(--height);
  transform-origin: 0 0;
  transition: transform 1s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;
  background-color: #ccc;
}

.book .page:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: background 0.7s;
  z-index: 2;
}

.book .page:nth-child(odd) {
  pointer-events: all;
  transform: rotateY(0deg);
  right: 0;
  border-radius: 0 10px 10px 0;
}

.book .page:nth-child(odd):hover {
  transform: rotateY(-15deg);
}

.book .page:nth-child(odd):hover:before {
  background: rgba(0, 0, 0, 0.03);
}

.book .page:nth-child(odd):before {
  background: rgba(0, 0, 0, 0);
}

.book .page:nth-child(even) {
  pointer-events: none;
  transform: rotateY(180deg);
  transform-origin: 100% 0;
  left: 0;
  border-radius: 10px 0 0 10px;
  border-color: black;
}

.book .page:nth-child(even):before {
  background: rgba(0, 0, 0, 0.2);
}

.book .page.grabbing {
  transition: none;
}

.book .page.flipped:nth-child(odd) {
  pointer-events: none;
  transform: rotateY(-180deg);
}

.book .page.flipped:nth-child(odd):before {
  background: rgba(0, 0, 0, 0.2);
}

.book .page.flipped:nth-child(even) {
  pointer-events: all;
  transform: rotateY(0deg);
}

.book .page.flipped:nth-child(even):hover {
  transform: rotateY(15deg);
}

.book .page.flipped:nth-child(even):hover:before {
  background: rgba(0, 0, 0, 0.03);
}

.book .page.flipped:nth-child(even):before {
  background: rgba(0, 0, 0, 0);
}

.page:nth-child(odd) .page-image {
  background-position: right top;
}
</style>
