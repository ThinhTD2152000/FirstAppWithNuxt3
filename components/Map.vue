<!-- eslint-disable require-await -->
<template>
  <div id="viewDiv"></div>
</template>

<script setup>
import { loadModules, setDefaultOptions } from 'esri-loader'
import '@arcgis/core/assets/esri/themes/light/main.css'
// eslint-disable-next-line require-await
const loadMap = async () => {
  // Load a specific version of the ArcGIS JS API:
  setDefaultOptions({ version: '4.22', css: true })
  loadModules(['esri/Map', 'esri/views/MapView']).then(
    // eslint-disable-next-line require-await
    async ([Map, MapView]) => {
      const map = new Map({
        basemap: 'topo-vector',
      })

      // 2D:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const view = new MapView({
        container: 'viewDiv',
        map,
        center: [-95.7, 37],
        zoom: 16,
      })
    },
  )
}
onMounted(() => {
  loadMap()
})
useHead({
  title: 'Trang bản đồ',
})
</script>

<style>
#viewDiv {
  height: calc(100vh - 105px);
  width: 100%;
  margin: 0px;
}
.esri-view .esri-view-surface--inset-outline:focus::after {
  outline: none !important;
}
</style>
