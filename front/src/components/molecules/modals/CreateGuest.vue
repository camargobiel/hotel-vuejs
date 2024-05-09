<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';
  import { guestValidation } from './validation'
  import { findErrorString } from '../../../utils/find-error-string'
  import { ref } from 'vue'

  let formErrors = ref([])
  const emit = defineEmits(["modal-close"]);

  defineProps({
    isOpen: Boolean,
  })

  async function handleSubmit(e) {
    const elements = e.target.elements
    const name = elements["name"].value
    const email = elements["email"].value
    const cpf = elements["cpf"].value
    const address = elements["address"].value
    const phone = elements["phone"].value

    const data = {
      name,
      email,
      cpf,
      address,
      phone
    }

    try {
      guestValidation.parse(data)
      await fetch("http://localhost:4555/guests", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      })
      emit("modal-close")
    } catch(err) {
      formErrors.value = JSON.parse(err)
    }
  }
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
            id="name"
            label="Nome do cliente"
            placeholder="Gabriel"
            :modelValue="name"
            @update:modelValue="$event => (name = $event)"
            :error="findErrorString('name', formErrors)"
          />
          <div class="flex gap-2 w-full">
            <Input
              id="email"
              label="E-mail"
              placeholder="email@gmail.com"
              :modelValue="email"
              @update:modelValue="$event => (email = $event)"
              :error="findErrorString('email', formErrors)"
            />
            <Input
              id="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              :modelValue="cpf"
              @update:modelValue="$event => (cpf = $event)"
              :error="findErrorString('cpf', formErrors)"
            />
          </div>
          <Input
            id="phone"
            label="Telefone com DDD"
            placeholder="(00) 0000-0000"
            :modelValue="phone"
            @update:modelValue="$event => (phone = $event)"
            :error="findErrorString('phone', formErrors)"
          />
          <Input
            id="address"
            label="Endereço"
            placeholder="Rua das pitangueiras nº 500"
            :modelValue="address"
            @update:modelValue="$event => (address = $event)"
            :error="findErrorString('address', formErrors)"
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
