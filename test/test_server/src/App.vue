<template>
  <div id="app">
    <h1>{{ m_status }}</h1>
  </div>
</template>

<script>
import * as server from "./server.js"
console.log("status=")
console.log(server.status)
console.log(status)

export default {
  name: 'app',
  data () {
    return {
      msg: 'Disconnected'
    }
  },
  computed: {
	m_status: function() {
		return server.status
	}
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
