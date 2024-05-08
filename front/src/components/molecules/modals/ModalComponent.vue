<script setup>
  const props = defineProps({
    isOpen: Boolean,
  });
</script>

<script>
  import { defineProps, defineEmits, ref } from "vue";
  import { onClickOutside } from '@vueuse/core'

  const emit = defineEmits(["modal-close"]);

  const target = ref(null)
  onClickOutside(target, () => emit('modal-close'))

  export default {
    name: 'ModalComponent',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<template>
  <div v-if="isOpen" class="fixed z-[9999] top-0 left-0 w-full h-full bg-black/20">
    <div class="modal-wrapper h-full">
      <div class="translate-y-[-50%] translate-x-[-50%] fixed w-[500px] bg-white mx-auto top-[50%] left-[50%] rounded-lg p-3 flex flex-col gap-5" ref="target">
        <div class="modal-header flex justify-between">
          <slot name="header"> default header </slot>
          <button @click="close">x</button>
        </div>
        <div class="modal-body">
          <slot name="content"> default content </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
