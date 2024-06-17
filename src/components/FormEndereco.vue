<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="row-nome">
        <div class="cont-nome">
          <label class="label" for="nome">Nome</label>
          <input
            v-model="formData.nome"
            placeholder="Nome"
            class="input-nome"
            type="text"
            name="nome"
            id="nome"
          />
        </div>
        <div class="cont-sobrenome">
          <label class="label" for="sobrenome">Sobrenome</label>
          <input
            v-model="formData.sobrenome"
            placeholder="Sobrenome"
            class="input-nome"
            type="text"
            name="sobrenome"
            id="sobrenome"
          />
        </div>
      </div>
      <div class="row-rua">
        <div class="cont-rua">
          <label class="label" for="nomeRua">Nome da Rua</label>
          <input
            v-model="formData.nomeRua"
            placeholder="Nome da Rua"
            class="input-rua"
            type="text"
            name="nomeRua"
            id="nomeRua"
          />
        </div>
      </div>
      <div class="row-bairro">
        <div class="cont-bairro">
          <label class="label" for="nomeBairro">Nome do Bairro</label>
          <input
            v-model="formData.nomeBairro"
            placeholder="Nome do Bairro"
            class="input-bairro"
            type="text"
            name="nomeBairro"
            id="nomeBairro"
          />
        </div>
      </div>
      <div class="row-cidade">
        <div class="cont-cidade">
          <label class="label" for="nomeCidade">Cidade</label>
          <input
            v-model="formData.nomeCidade"
            placeholder="Cidade"
            class="input-cidade"
            type="text"
            name="nomeCidade"
            id="nomeCidade"
          />
        </div>
      </div>
      <div class="row-estado">
        <div class="cont-nome">
          <label class="label" for="estado">Estado</label>
          <input
            v-model="formData.estado"
            placeholder="Estado"
            class="input-nome"
            type="text"
            name="estado"
            id="estado"
          />
        </div>
        <div class="cont-sobrenome">
          <label class="label" for="numero">Numero</label>
          <input
            v-model="formData.numero"
            placeholder="Numero"
            class="input-nome"
            type="text"
            name="numero"
            id="numero"
          />
        </div>

        
          <button type="submit">Cadastrar Endereco</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: [],
        nome: "",
        sobrenome: "",
        nomeRua: "",
        nomeBairro: "",
        nomeCidade: "",
        estado: "",
        numero: "",

    };
  },
  methods: {
    async handleSubmit() {
      const formData = this.formData

      const novoEndereco = {
        id: formData.nome,
        nome: formData.sobrenome,
        nomeRua: formData.nomeRua,
        nomeBairro: formData.nomeBairro,
        nomeCidade: formData.nomeCidade,
        estado: formData.estado,
        numero: formData.numero,
      };

      console.log(novoEndereco);

      const reqGet = await fetch("http://localhost:3000/endereco");
      let enderecoAtual = await reqGet.json();

      if (
        enderecoAtual &&
        enderecoAtual.endereco &&
        Array.isArray(enderecoAtual.endereco)
      ) {
        enderecoAtual.endereco.push(novoEndereco);
      } else {
        enderecoAtual = {
          endereco: [novoEndereco],
        };
      }

      const dataJson = JSON.stringify(enderecoAtual);

      const req = await fetch("http://localhost:3000/endereco", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();

      console.log(res);


      
      this.$emit("endereco-submetido", novoEndereco);
    },
  },
};
</script>

<style scoped>
.row-nome {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
}

.cont-nome {
  width: 50%;
  height: 70px;
  display: flex;
  flex-direction: column;
}

.cont-sobrenome {
  width: 50%;
  height: 70px;
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.input-nome {
  height: 38px;
  width: 90%;
  border-radius: 5px;
  border: 2px solid #ced4da;
}

.row-rua,
.row-bairro,
.row-cidade {
  width: 100%;
  height: 70px;
  margin-top: 16px;
}
.cont-rua,
.cont-bairro,
.cont-cidade {
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
}

.input-rua,
.input-bairro,
.input-cidade {
  height: 38px;
  width: 95%;
  border-radius: 5px;
  border: 2px solid #ced4da;
}

.row-estado {
  width: 100%;
  margin-top: 16px;
  height: 70px;
  display: flex;
  flex-direction: row;
}

input {
  font-size: 15px;
}
</style>
