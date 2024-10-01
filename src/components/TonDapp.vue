<template>
  <div class="container mx-auto lg:flex lg:flex-col py-20 space-y-10">
    <TonConnectButton class="mx-auto" />

    <div v-if="address"
         class="flex flex-col mx-5 lg:mx-0 space-y-4">
      <div class="flex flex-col w-full space-y-2">
        <span>from</span>
        <input type="text" v-model="address" class="py-2 px-4 rounded-lg shadow-brand outline-none">
      </div>

      <div class="flex flex-col w-full space-y-2">
        <span>to</span>
        <input type="text" class="py-2 px-4 rounded-lg shadow-brand outline-none">
      </div>
      <button v-if="address"
              @click="sendTransaction"
              class="border rounded-full py-2 px-4 w-1/2 lg:w-1/4 bg-[#0098EA] transition-all hover:scale-brand text-white shadow-brand ml-auto">
        Send
      </button>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TonConnectButton,
  useTonAddress,
  useTonConnectUI,
} from '@townsquarelabs/ui-vue'

const address = ref(useTonAddress())
const [tonConnectUI, setOptions] = useTonConnectUI()

const sendTransaction = () => {

}
</script>