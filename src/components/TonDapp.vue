<template>
  <div class="container mx-auto lg:flex lg:flex-col py-20 space-y-10">
    <TonConnectButton class="mx-auto" />

    <div v-if="!address" class="space-y-2 mx-5 lg:mx-0">
      <h1 class="text-3xl text-[#1E2337] font-bold text-center">
        Connect your web3 wallet to use dApp
      </h1>

      <a href="https://ton.org/en/wallets" target="_blank"
         class="flex justify-center text-xl text-[#0098EA] transition-all hover:scale-brand">
        Get a wallet
      </a>
    </div>

    <div v-if="address" class="flex flex-col mx-5 lg:mx-0 space-y-4">
      <div class="flex flex-col space-y-2">
        <span>from</span>
        <input v-model="address" type="text" class="py-2 px-4 rounded-lg shadow-brand outline-none hover:cursor-not-allowed" disabled>
      </div>

      <div class="flex flex-col space-y-2">
        <span>to</span>
        <input v-model="receiver" type="text" class="py-2 px-4 rounded-lg shadow-brand outline-none" placeholder="EQCThWiDRV_b75uOCH8IUU3Hqf_zKgJx0ONigwtkoYyoWtB8" required>
      </div>

      <div class="flex flex-col space-y-2">
        <span>amount</span>
        <input v-model="amount" type="text" class="py-2 px-4 w-40 rounded-lg shadow-brand outline-none" placeholder="1 TON" required>
      </div>

      <button v-if="address"
              @click="sendTransaction"
              class="border rounded-full py-2 px-4 w-full md:w-1/4 bg-[#0098EA] transition-all hover:scale-brand text-white shadow-brand ml-auto">
        Send transaction
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
import { useNotification } from '@kyvg/vue3-notification'

const address = ref(useTonAddress())
const receiver = ref()
const amount = ref()
const [tonConnectUI, setOptions] = useTonConnectUI()
const { notify }  = useNotification()

const sendTransaction = async () => {
  if (receiver.value && amount.value) {
    await tonConnectUI.sendTransaction({
      validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec

      messages: [
        {
          address: receiver.value,
          amount: amount.value * 10**9 // 1 ton = 1.000.000.000
        }
      ]
    })
  } else if(!receiver.value) {
    notify({
      title: 'Receiver missed',
      type: 'notification',
      speed: 500,
      duration: 1500,
      ignoreDuplicates: true
    })
  } else if(!amount.value) {
    notify({
      title: 'Amount missed',
      type: 'notification',
      speed: 500,
      duration: 1500,
      ignoreDuplicates: true
    })
  }
}
</script>