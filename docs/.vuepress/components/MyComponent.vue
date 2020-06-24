<template>
  <div>
    <input type="text" v-model="message">
    <p>
      {{message}}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'MyComponent!!'
    }
  },
  mounted () {
    console.log("test")
  }
}
</script>
