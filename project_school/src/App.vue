<template>
  <div id="app">
    <Alunos />
  </div>
</template>

<script>
import Alunos from './components/Aluno/Alunos.vue'

export default {
  name: 'App',
  components: {
    Alunos
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  justify-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}
#app {
}

.btn_remover{
 background-color: #b6c8d4;
}

.btn {
  text-align: center;
  padding: 10px 15px;
  border: 1px solid black;
  border-radius: 6px;
  border-bottom: 3px solid black;
  font-size: 18px;
  cursor: pointer;
  display: inline;
}

.btn:hover {
  text-shadow: 1px 1px 1px black;
  border-bottom: 1px solid black;
  margin-top: 1px;
}

table {
  margin: 1px;
  padding: 1px;
  list-style-type: none;
  width: 100%;
  /* display: inline; */
}
table tr td {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}
table thead th {
  background-color: rgb(184, 208, 216) !important;
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}
.colPequeno {
  width: 5%;
}
</style>
