<script setup>
  import ModalComponent from './ModalComponent.vue';
  import Input from '../../atoms/Input.vue';
  import Button from '../../atoms/Button.vue';
  import Select from '../../atoms/Select.vue'

  const { guests, booking } = defineProps({
    isOpen: Boolean,
    guests: Array,
    booking: Object
  })

  const emit = defineEmits(["modal-close"]);

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


  async function handleSubmit(e) {
    const elements = e.target.elements
    const id = booking.id
    const identifier = elements["identifier"].value
    const startDate = elements["startDate"].value
    const endDate = elements["endDate"].value
    const guest = elements["guest"].value
    const status = elements["status"].value

    const data = {
      id,
      identifier,
      startDate,
      endDate,
      guest,
      status
    }

    try {
      await fetch("http://localhost:4555/booking", {
        method: "PUT",
        body: JSON.stringify(data),
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
      <h2 class="text-blue-600 font-semibold">Editar reserva</h2>
    </template>
    <template #content>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col gap-5">
          <Input
            id="identifier"
            label="Número da reserva"
            placeholder="12345"
            :modelValue="booking.identifier"
            @update:modelValue="$event => (identifier = $event)"
          />
          <div class="flex gap-2 w-full">
            <Input
              id="startDate"
              label="Data de entrada"
              placeholder="23/12/2023"
              type="date"
              :modelValue="booking.startDate"
              @update:modelValue="$event => (startDate = $event)"
            />
            <Input
              id="endDate"
              label="Data de saída"
              type="date"
              placeholder="25/12/2023"
              :modelValue="booking.endDate"
              @update:modelValue="$event => (endDate = $event)"
            />
          </div>
          <Select
            id="guest"
            label="Hóspede"
            :options="options"
            :modelValue="booking.guestId.toString()"
            @update:modelValue="$event => (guest = $event)"
          />
          <Select
            id="status"
            label="Status"
            :options="statusOptions"
            :modelValue="booking.status"
            @update:modelValue="$event => (status = $event)"
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
