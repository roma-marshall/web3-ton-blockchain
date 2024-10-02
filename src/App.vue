<template>
  <div class="bg-[#F7F9FB] h-screen flex flex-col justify-between">
    <TonConnectUIProvider :options="options">
      <TonConnect/>
    </TonConnectUIProvider>
    <Footer />
    <notifications position="top right"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TonConnect from './components/TonDapp.vue'
import Footer from './components/Footer.vue'
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'

const options = ref({manifestUrl: 'https://raw.githubusercontent.com/roma-marshall/web3-ton-dapp/refs/heads/main/tonconnect-manifest.json'})
</script>