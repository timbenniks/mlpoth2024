<script setup>
const props = defineProps({ blok: Object });
const policy = computed(() => renderRichText(props.blok.policy));

function wordBreaks(copy) {
  const lines = copy.split("\n");
  let result = lines[0];

  if (lines[1]) {
    result = `${lines[0]}<br /><span class="text-xs md:text-lg">${lines[1]}</span>`;
  }

  return result;
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
    class="mx-auto text-left mt-12 md:max-w-4xl md:justify-center max-w-full pt-18"
    v-editable="blok"
    :id="navId"
  >
    <div class="bg-black text-white p-2">
      <h3 class="text-xl md:text-3xl mb-2">{{ blok.title }}</h3>
      <p class="mb-4" v-if="blok.sub_title">{{ blok.sub_title }}</p>

      <table class="w-full text-md md:text-xl mb-12 font-[arial] md:font-sans">
        <thead>
          <tr>
            <th class="text-center" v-for="th in blok.table.thead">
              {{ th.value }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(tr, index) in blok.table.tbody"
            :class="index === 0 ? 'text-xs md:text-lg' : 'text-lg md:text-2xl'"
            class="text-center"
          >
            <td
              class="py-2"
              v-for="(td, index) in tr.body"
              :class="index === 0 ? 'text-left' : 'text-center'"
              v-html="wordBreaks(td.value)"
            />
          </tr>
        </tbody>
      </table>
    </div>
    <aside>
      <div class="text-base prose text-md text-left" v-html="policy" />
    </aside>
  </section>
</template>
