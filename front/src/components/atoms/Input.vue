<script setup>
  const props = defineProps({
    id: String,
    label: String,
    placeholder: String,
    modelValue: String
  })
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="id" class="text-sm">{{label}}</label>
    <input
      :id="id"
      type="text"
      :name="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      class="border border-zinc-200 rounded h-10 pl-2 focus:outline-none focus:border-zinc-600 text-sm"
    />
  </div>
</template>

<style scoped>

</style>
