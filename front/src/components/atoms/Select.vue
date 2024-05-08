<script setup>
  const props = defineProps({
    id: String,
    label: String,
    options: Array,
    modelValue: String,
  })
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="id" class="text-sm">{{label}}</label>
    <select
      :id="id"
      :name="id"
      :value="modelValue"
      @change="emit('update:modelValue', $event.target.value)"
      class="p-2 cursor-pointer rounded bg-white border border-zinc-200"
    >
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<style scoped>

</style>
