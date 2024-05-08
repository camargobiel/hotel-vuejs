<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';

  const emit = defineEmits(["modal-close"]);

  const { guest } = defineProps({
    isOpen: Boolean,
    guest: Object
  })

  async function handleSubmit(e) {
    const elements = e.target.elements
    const id = guest.id
    const name = elements["name"].value
    const email = elements["email"].value
    const cpf = elements["cpf"].value
    const address = elements["address"].value

    try {
      await fetch("http://localhost:4555/guests", {
        method: "PUT",
        body: JSON.stringify({
          id,
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
      <h2 class="text-blue-600 font-semibold">Editar hóspede</h2>
    </template>
    <template #content>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-5">
          <Input
            id="name"
            label="Nome do cliente"
            placeholder="Gabriel"
            :modelValue="guest.name"
            @update:modelValue="$event => (name = $event)"
          />
          <div class="flex gap-2 w-full">
            <Input
              id="email"
              label="E-mail"
              placeholder="email@gmail.com"
              :modelValue="guest.email"
              @update:modelValue="$event => (email = $event)"
            />
            <Input
              id="cpf"
              label="CPF"
              placeholder="000.000.000-00"
              :modelValue="guest.cpf"
              @update:modelValue="$event => (cpf = $event)"
            />
          </div>
          <Input
            id="phone"
            label="Telefone"
            placeholder="(00) 0000-0000"
            :modelValue="guest.phone"
            @update:modelValue="$event => (phone = $event)"
          />
          <Input
            id="address"
            label="Endereço"
            placeholder="Rua das pitangueiras nº 500"
            :modelValue="guest.address"
            @update:modelValue="$event => (address = $event)"
          />
        </div>
        <div class="flex gap-2 justify-end mt-5">
          <Button>
            <template #button-text>Salvar</template>
          </Button>
        </div>
      </form>
    </template>
  </ModalComponent>
</template>

<style scoped>

</style>
