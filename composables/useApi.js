export default function () {
  const dataAPI = ref({})
  const fetchData = async () => {
    const response = await fetch(
      'https://64d5b6dd613ee4426d978af1.mockapi.io/datatable',
    )
    dataAPI.value = await response.json()
  }
  fetchData()
  return { dataAPI, fetchData }
}
