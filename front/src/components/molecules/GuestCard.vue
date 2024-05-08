<script setup>
  defineProps({})
</script>

<template>
  <div class="p-3 border rounded-lg border-zinc-200 flex flex-col gap-5">
    <div class="flex gap-4 items-center border-b border-b-zinc-200 pb-3">
      <img
        src="../../assets/svgs/profile-pic.svg"
        alt="profile picture"
        class="w-7"
      >
      <div>
        <p class="text-zinc-900 text-base">Gabriel Nunes Camargo</p>
        <p class="text-zinc-400 text-sm">Nascimento: 23/12/2003</p>
      </div>
    </div>
    <div>
      <p class="text-zinc-600 text-sm">E-mail: camargoobiel@gmail.com</p>
      <p class="text-zinc-600 text-sm">CPF: 000.000.000-00</p>
      <p class="text-zinc-600 text-sm">Telefone: (17) 99215-1281</p>
      <p class="text-zinc-600 text-sm">Endereço: Rua XYZ da silva, São Paulo</p>
    </div>
  </div>
</template>

<style scoped>

</style>
