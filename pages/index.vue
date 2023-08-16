<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <PageWrapper>
    <Header />
    <BodyPage />
    <Footer />
  </PageWrapper>
</template>
<script setup>
import { useEventListener } from '@vueuse/core'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function onScroll() {
  const scrollpos =
    window.top.scrollY /* or: e.target.documentElement.scrollTop */
  const navcontent = document.getElementById('mobile-menu-2')
  const toToggle = document.querySelectorAll('.logo-content')
  const header = document.getElementById('header')
  if (scrollpos > 10) {
    header.classList.add('bg-white')
    toToggle[0].classList.add('text-gray-800')
    toToggle[0].classList.remove('text-white')

    header.classList.add('shadow')
    navcontent.classList.add('text-gray-800')
    navcontent.classList.remove('text-white')
  } else {
    header.classList.remove('bg-white')
    // Use to switch toggleColour colours

    toToggle[0].classList.add('text-white')
    toToggle[0].classList.remove('text-gray-800')
    header.classList.remove('shadow')
    navcontent.classList.remove('text-gray-800')
    navcontent.classList.add('text-white')
  }
}
onMounted(() => {
  useEventListener(window, 'scroll', onScroll)
})
</script>
