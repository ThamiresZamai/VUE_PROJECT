<template>
  <div >
    <titulo texto="Aluno" />
    <div>
      <input  
        type="text"
        placeholder="Nome do aluno"
        v-model="nome"
        v-on:keyup.enter="addAluno()"
      />
      <input  
        type="text"
        placeholder="Sobrenome do aluno"
        v-model="sobrenome"
        v-on:keyup.enter="addAluno()"
      />
      <button class="btn btn_inserir" @click="addAluno()">Inserir</button>
    </div>
    <br />
    <br />
    <table>
      <thead>
        <th>Matricula</th>
        <th>Nome</th>
        <th>Opções</th>
      </thead>
      <tbody v-if="alunos.length">
        <tr v-for="(aluno, index) in alunos" :key="index">
          <td>{{ aluno.id }}</td>
          <!-- <td>{{ index + 1 }}</td> -->
          <td>{{ aluno.nome }} {{ aluno.sobrenome }}</td>
          <td>
            <button class="btn btn_remover" @click="remover(aluno)">
              Remover
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Não existe aluno(s) cadastrado(s).
      </tfoot>
    </table>
  </div>
</template>

<script>
import Titulo from "../_share/Titulo";

export default {
  components: {
    Titulo,
  },
  data() {
    return {
      titulo: "Alunos",
      nome: "",
      sobrenome: "",
      alunos: [],
    };
  },
  created() {
    this.$http
      .get("http://localhost:3000/alunos")
      .then((res) => res.json())
      .then((alunos) => (this.alunos = alunos));
  },
  props: {},
  methods: {
    addAluno() {
      let _aluno = {
        nome: this.nome,
        sobrenome: this.sobrenome,
      };
      this.$http
        .post("http://localhost:3000/alunos", _aluno)
        .then((res) => res.json())
        .then((alunoRetornado) => {
          this.alunos.push(alunoRetornado);
          this.nome = "";
          this.sobrenome = "";
        });
    },
    remover(aluno) {
      this.$http.delete(`http://localhost:3000/alunos/${aluno.id}`).then(() => {
        let indice = this.alunos.indexOf(aluno);
        this.alunos.splice(indice, 1);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  color: cadetblue;
  display: inline;
}

.btn_inserir {
  background-color: #9ca09f;
  display: inline;
  border: 0;
  padding: 20px;
  font-size: 1.3em;
}

.btn:hover {
  padding: 20px;
  margin: 0px;
  border: 0px;
}
</style>
