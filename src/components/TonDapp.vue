<template>
  <div class="container mx-auto flex flex-col justify-start py-20 space-y-10">
    <TonConnectButton />
    <button v-if="!address"
            @click="sendTransaction"
            class="border rounded-full py-2 px-4 w-1/2 bg-[#0098EA] transition-all hover:scale-brand text-white shadow-brand">
      Send
    </button>
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