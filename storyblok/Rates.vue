<script setup>
const props = defineProps({ blok: Object });
const policy = computed(() => renderRichText(props.blok.policy));

function wordBreaks(copy) {
  const lines = copy.split("\n");
  let result = lines[0];

  if (lines[1]) {
    result = `${lines[0]}<br /><span class="text-xs">${lines[1]}</span>`;
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
    class="mx-auto text-left mt-44 md:max-w-2xl md:justify-center max-w-11/12"
    v-editable="blok"
    :id="navId"
  >
    <h3 class="text-3xl mb-2">{{ blok.title }}</h3>

    <table class="w-full text-xs md:text-xl mb-12">
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
          :class="index === 0 ? 'text-xs' : 'text-md'"
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
    <aside>
      <div
        class="text-base text-gray-500 prose text-md text-left"
        v-html="policy"
      />
    </aside>
  </section>
</template>
