<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.Text));
const offset = ref("md:justify-center");
const imageposition = ref("flex-col md:flex-row-reverse");
const polaroidspace = ref("mr-0 self-center");
const copyspace = ref("ml-0");

if (props.blok.offset === "left") {
  offset.value =
    props.blok.imageposition === "left" ? "md:justify-end" : "md:justify-start";
}

if (props.blok.offset === "right") {
  offset.value =
    props.blok.imageposition === "left" ? "md:justify-start" : "md:justify-end";
}

if (props.blok.imageposition === "left") {
  imageposition.value = "flex-col md:flex-row-reverse";
  polaroidspace.value = "md:mr-12 md:self-start";
  copyspace.value = "md:ml-0";
}

if (props.blok.imageposition === "right") {
  imageposition.value = "flex-col md:flex-row";
  polaroidspace.value = "md:mr-0 md:self-start";
  copyspace.value = "md:mr-12";
}

if (props.blok.imageposition === "below") {
  imageposition.value = "flex-col flex-col items-center";
  polaroidspace.value = "mt-12 mr-0 self-center";
  copyspace.value = "ml-0";
}

const navId = computed(() => {
  return props.blok.navigation_title
    .replace(" ", "-")
    .replace("-& ", "-")
    .toLowerCase();
});
</script>

<template>
  <section
    class="mx-auto text-left mt-12 max-w-11/12 pt-18"
    v-editable="blok"
    :id="navId"
  >
    <div class="flex" :class="[imageposition, offset]">
      <article :class="copyspace" class="md:w-140">
        <h3 class="text-xl md:text-3xl mb-2">{{ blok.Title }}</h3>
        <div class="text-base prose xl:text-xl text-left" v-html="text" />
      </article>

      <template v-if="blok.media[0].component === 'polaroid'">
        <div class="md:w-140">
          <polaroid :image="blok.media[0].image" :class="polaroidspace" />
        </div>
      </template>

      <template v-if="blok.media[0].component === 'carousel'">
        <div class="md:w-140" :class="polaroidspace">
          <carousel :polaroids="blok.media[0].images" />
        </div>
      </template>
    </div>
  </section>
</template>
