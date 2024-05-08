<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';

  async function handleSubmit(e) {
    const elements = e.target.elements
    const name = elements["name"].value
    const email = elements["email"].value
    const cpf = elements["cpf"].value
    const address = elements["address"].value

    try {
      await fetch("http://localhost:4555/guests", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          cpf,
          address
        }),
        headers: { "Content-Type": "application/json" },
      })
      emit("modal-close")
    } catch(err) {
      console.log(err)
    }
  }

  const emit = defineEmits(["modal-close"]);

  defineProps({
    isOpen: Boolean,
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
            id="name"
            label="Nome do cliente"
            placeholder="Gabriel"
            :modelValue="name"
            @update:modelValue="$event => (name = $event)"
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
            id="phone"
            label="Telefone"
            placeholder="(00) 0000-0000"
            :modelValue="phone"
            @update:modelValue="$event => (phone = $event)"
          />
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
