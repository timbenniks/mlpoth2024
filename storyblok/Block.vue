<script setup>
const props = defineProps({ blok: Object });
const text = computed(() => renderRichText(props.blok.Text));

const imageposition = computed(() => {
  if (props.blok.imageposition === "left") {
    return `${
      props.blok.image_first_mobile ? "flex-col-reverse" : "flex-col"
    } md:flex-row-reverse`;
  } else if (props.blok.imageposition === "right") {
    return `${
      props.blok.image_first_mobile ? "flex-col-reverse" : "flex-col"
    }  md:flex-row`;
  } else if (props.blok.imageposition === "below") {
    return "flex-col flex-col items-center";
  }
  return "flex-col md:flex-row-reverse"; // default value
});

const polaroidspace = computed(() => {
  if (props.blok.imageposition === "left") {
    return "md:mr-12 md:self-start";
  } else if (props.blok.imageposition === "right") {
    return "md:mr-0 md:self-start";
  } else if (props.blok.imageposition === "below") {
    return "mt-12 mr-0 self-center";
  }
  return "mr-0 self-center"; // default value
});

const copyspace = computed(() => {
  if (props.blok.imageposition === "left") {
    return "md:ml-0";
  } else if (props.blok.imageposition === "right") {
    return "md:mr-12";
  } else if (props.blok.imageposition === "below") {
    return "ml-0";
  }
  return "ml-0"; // default value
});

const offset = computed(() => {
  if (props.blok.offset === "left") {
    return props.blok.imageposition === "left"
      ? "md:justify-end"
      : "md:justify-start";
  } else if (props.blok.offset === "right") {
    return props.blok.imageposition === "left"
      ? "md:justify-start"
      : "md:justify-end";
  }
  return "md:justify-center"; // default value
});

const copywidth = computed(() => {
  return props.blok.media[0] ? "md:w-140" : "md:auto";
});

const navId = computed(() => {
  return props.blok.navigation_title
    .replace(" ", "-")
    .replace("-& ", "-")
    .toLowerCase();
});
</script>

<template>
  <section
    class="mx-auto text-left mt-12 max-w-11/12 pt-12"
    v-editable="blok"
    :id="navId"
  >
    <div class="flex" :class="[imageposition, offset]">
      <article :class="[copyspace, copywidth]">
        <h3 class="text-xl md:text-3xl mb-2">
          {{ blok.Title }}
        </h3>
        <div class="text-base prose xl:text-xl text-left" v-html="text" />
      </article>

      <template v-if="blok.media[0] && blok.media[0].component === 'polaroid'">
        <div class="md:w-140">
          <polaroid :image="blok.media[0].image" :class="polaroidspace" />
        </div>
      </template>

      <template v-if="blok.media[0] && blok.media[0].component === 'carousel'">
        <div class="md:w-140" :class="polaroidspace">
          <carousel :polaroids="blok.media[0].images" />
        </div>
      </template>
    </div>
  </section>
</template>
