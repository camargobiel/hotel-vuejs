<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';
  import Select from '../../atoms/Select.vue'

  async function handleSubmit(e) {
    const elements = e.target.elements
    const identifier = elements["identifier"].value
    const startDate = elements["startDate"].value
    const endDate = elements["endDate"].value
    const guest = elements["guest"].value
    const status = elements["status"].value

    try {
      await fetch("http://localhost:4555/booking", {
        method: "POST",
        body: JSON.stringify({
          identifier,
          startDate,
          endDate,
          guest,
          status
        }),
        headers: { "Content-Type": "application/json" },
      })
      emit("modal-close")
    } catch(err) {
      console.log(err)
    }
  }

  const emit = defineEmits(["modal-close"]);

  const { guests } = defineProps({
    isOpen: Boolean,
    guests: Array
  })
  const options = guests.map((guest) => ({
    value: guest.id,
    label: guest.name
  }))
  const statusOptions = [
    {
      label: "Agendado",
      value: "scheduled"
    },
    {
      label: "Concluído",
      value: "done"
    },
    {
      label: "Em andamento",
      value: "in-progress"
    },
  ]

</script>

<script>
  export default {
    name: 'CreateBookingModal',
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
      <h2 class="text-blue-600 font-semibold">Nova reserva</h2>
    </template>
    <template #content>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-5">
          <Input
            id="identifier"
            label="Número da reserva"
            placeholder="12345"
            :modelValue="identifier"
            @update:modelValue="$event => (identifier = $event)"
          />
          <div class="flex gap-2 w-full">
            <Input
              id="startDate"
              label="Data de entrada"
              placeholder="23/12/2023"
              type="date"
              :modelValue="startDate"
              @update:modelValue="$event => (startDate = $event)"
            />
            <Input
              id="endDate"
              label="Data de saída"
              type="date"
              placeholder="25/12/2023"
              :modelValue="endDate"
              @update:modelValue="$event => (endDate = $event)"
            />
          </div>
          <Select
            id="guest"
            label="Hóspede"
            :options="options"
            :modelValue="guest"
            @update:modelValue="$event => (guest = $event)"
          />
          <Select
            id="status"
            label="Status"
            :options="statusOptions"
            :modelValue="status"
            @update:modelValue="$event => (status = $event)"
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
