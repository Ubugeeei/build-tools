<template>
  <div>
    <p>Hello, World!</p>
    <Button @click="onClick"/>
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
  },
  methods: {
    onClick() {
      console.log('Button clicked!')
    }
  }
}
</script>