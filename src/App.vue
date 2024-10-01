<template>
  <div class="bg-[#F7F9FB] h-screen">
    <TonConnectUIProvider :options="options">
      <TonConnect />
    </TonConnectUIProvider>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TonConnect from './components/TonDapp.vue'
import { TonConnectUIProvider } from '@townsquarelabs/ui-vue'

const options = ref({ manifestUrl: window.location.href + 'tonconnect-manifest.json' })
</script>