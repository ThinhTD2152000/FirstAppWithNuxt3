<!-- eslint-disable vue/no-multiple-template-root -->
<template>
  <PageWrapper>
  <Header />
  <Body />
  <Footer />
</PageWrapper>
</template>
<script>
export default {
  name: 'IndexPage',
  mounted() {
  window.addEventListener("scroll", this.onScroll)
},
beforeDestroy() {
  window.removeEventListener("scroll", this.onScroll)
},
methods: {
  onScroll(e) {
    const scrollpos = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    const navcontent = ;
    const header = document.getElementById("header");
    if (scrollpos > 10) {
          header.classList.add("bg-white");
          navaction.classList.remove("bg-white");
          navaction.classList.add("gradient");
          navaction.classList.remove("text-gray-800");
          navaction.classList.add("text-white");

           toToggle[0].classList.add("text-gray-800");
          toToggle[0].classList.remove("text-white");
        
          header.classList.add("shadow");
          navcontent.classList.remove("bg-gray-100");
          navcontent.classList.add("bg-white");
        } else {
          header.classList.remove("bg-white");
          navaction.classList.remove("gradient");
          navaction.classList.add("bg-white");
          navaction.classList.remove("text-white");
          navaction.classList.add("text-gray-800");
          //Use to switch toggleColour colours

            toToggle[0].classList.add("text-white");
          toToggle[0].classList.remove("text-gray-800");

          header.classList.remove("shadow");
          navcontent.classList.remove("bg-white");
          navcontent.classList.add("bg-gray-100");
        }
  }
}
}
</script>
