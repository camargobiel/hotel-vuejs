<script setup>
  import ErrorMessage from './ErrorMessage.vue'

  const props = defineProps({
    id: String,
    label: String,
    placeholder: String,
    modelValue: String,
    type: String,
    error: String
  })
  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="id" class="text-sm">{{label}}</label>
    <input
      :id="id"
      :type="type || 'text'"
      :name="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
      :class="`border rounded h-10 px-2 focus:outline-none focus:border-zinc-600 text-sm ${error ? 'border-red-500' : 'border-zinc-200'}`"
    />
    <ErrorMessage>
      <template #error-message>{{ error }}</template>
    </ErrorMessage>
  </div>
</template>

<style scoped>

</style>
