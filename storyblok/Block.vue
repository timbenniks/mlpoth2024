<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.Text));
const offset = ref("");
const imageposition = ref("flex-col md:flex-row-reverse");
const polaroidspace = ref("mt-12 mr-0 self-center");
const copyspace = ref("ml-0");

if (props.blok.Offset[0] === "left") {
  offset.value = "relative md:left-20";
}

if (props.blok.Offset[0] === "right") {
  offset.value = "relative md:-left-20";
}

if (props.blok.imageposition[0] === "left") {
  imageposition.value = "flex-col md:flex-row-reverse md:justify-center";
  polaroidspace.value = "mt-12 md:mr-12 md:self-start";
  copyspace.value = "md:ml-0";
}

if (props.blok.imageposition[0] === "right") {
  imageposition.value = "flex-col md:flex-row md:justify-center";
  polaroidspace.value = "mt-12 md:mr-0 md:self-start";
  copyspace.value = "md:mr-12";
}

if (props.blok.imageposition[0] === "below") {
  imageposition.value = "flex-col flex-col items-center";
  polaroidspace.value = "mt-12 mr-0 self-center";
  copyspace.value = "ml-0";
}
</script>

<template>
  <section
    class="mx-auto text-left mt-44 max-w-11/12"
    :class="offset"
    v-editable="blok"
  >
    <div class="flex" :class="imageposition">
      <article :class="copyspace" class="md:w-140">
        <h3 class="text-3xl mb-2">{{ blok.Title }}</h3>
        <div class="text-base prose xl:text-xl text-left" v-html="text" />
      </article>

      <template v-if="blok.media[0].component === 'Polaroid'">
        <div class="md:w-140">
          <polaroid :image="blok.media[0].image" :class="polaroidspace" />
        </div>
      </template>

      <template v-if="blok.media[0].component === 'Carousel'">
        <div class="md:w-140" :class="polaroidspace">
          <carousel :polaroids="blok.media[0].polaroids" />
        </div>
      </template>
    </div>
  </section>
</template>
