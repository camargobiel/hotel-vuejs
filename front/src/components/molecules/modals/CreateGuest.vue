<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';

  function handleSubmit(e) {
    const elements = e.target.elements
    const customerName = elements["customer-name"].value
    const email = elements["email"].value
    const cpf = elements["cpf"].value
    const address = elements["address"].value
  }

  const emit = defineEmits(["modal-close"]);

  defineProps({
    isOpen: Boolean
  })
</script>

<script>
  export default {
    name: 'CreateGuestModal',
    components: {
      ModalComponent,
    },
    methods: {
      closeModal() {
        this.$emit('modal-close');
      }
    }
  };
</script>

<template>
  <ModalComponent :isOpen="isOpen" @close="closeModal">
    <template #header>
      <h2 class="text-blue-600 font-semibold">Novo hóspede</h2>
    </template>
    <template #content>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-5">
          <Input
            id="customer-name"
            label="Nome do cliente"
            placeholder="Gabriel"
            :modelValue="customerName"
            @update:modelValue="$event => (customerName = $event)"
          />
          <div class="flex gap-2 w-full">
            <Input
              id="email"
              label="E-mail"
              placeholder="email@gmail.com"
              :modelValue="email"
              @update:modelValue="$event => (email = $event)"
            />
            <Input
              id="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              :modelValue="cpf"
              @update:modelValue="$event => (cpf = $event)"
            />
          </div>
          <Input
            id="address"
            label="Endereço"
            placeholder="Rua das pitangueiras nº 500"
            :modelValue="address"
            @update:modelValue="$event => (address = $event)"
          />
        </div>
        <div class="flex gap-2 justify-end mt-5">
          <Button>
            <template #button-text>Criar</template>
          </Button>
        </div>
      </form>
    </template>
  </ModalComponent>
</template>

<style scoped>

</style>
