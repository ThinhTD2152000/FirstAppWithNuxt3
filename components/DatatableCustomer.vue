<template>
  <div v-if="pending">Loading ...</div>
  <div v-else>
    <div class="grid">
      <p>Thông điệp ban đầu: "{{ test }}"</p>
      <p>A + 20 = {{ addA() }}</p>
      <p>B + 20 = {{ addB() }}</p>
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-auto"
        @click="changeValue()"
      >
        {{ test }}
      </button>
    </div>
    <div id="app" class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <a-table :data-source="dataSource" :columns="columns" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import fecth from '../composables/fetch.js'
const url = 'https://64d5b6dd613ee4426d978af1.mockapi.io/datatable'
// const dataSource = computed(() => {
//   return data.value || []
// })
// const { data: t } = await useFetch(url)
// console.log(t)
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
  },
]

const { pending, data: customer } = useFetch(url, {
  lazy: true,
})
const dataSource = customer._rawValue
const te = ref(1)
const a = ref(0)
const b = ref(1)
function addA() {
  return a.value + 20
}
function addB() {
  return b.value + 20
}
// const datas = async function asyncData() {
//   const { data } = await axios.get(url)
//   console.log(data)
//   return data
// }
const { dataAPI } = fetch()
console.log(dataSource)
const test = computed(() => {
  return te.value === 1 ? 'Good' : 'Bad'
})

console.log(test)
function changeValue() {
  te.value = 3
  console.log('tr,', te)
}
console.log(dataAPI, 'dataAPI')
//
const question = ref('dj')
const answer = ref('Questions usually contain a question mark. ;-)')

watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    console.log(oldQuestion, 'oldQuestion')
    console.log(newQuestion, 'newQuestion')
    console.log(question, 'question')
    answer.value = 'Thinking...'
    try {
      const res = await fetch('https://yesno.wtf/api')
      answer.value = (await res.json()).answer
      console.log(answer)
    } catch (error) {
      answer.value = 'Error! Could not reach the API. ' + error
    }
  }
})
</script>
<!-- <script>
export default {
  setup() {
    return {
      dataSource: [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ],

      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ],
    }
  },
}
</script> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 25px;
}
</style>
