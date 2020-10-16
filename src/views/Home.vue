<template>
  <div class="home">
    
        <h1> Welcome to Metascript </h1>
        <p>
          At the moment this page is just a place where I experiement with some web frameworks and try out new stuff.
          I've a lot of todos and ideas but for now I just want to deploy the site.<br/>
          Have fun, Mario
        </p>
       <img alt="nerd logo" src="../assets/Nerdnetwork.svg" height="60%" width="60%">
        <br/>
        <!-- <button class="vfm-btn" @click="showModal = true">Open modal</button>
        <div>
          <vue-final-modal
            v-model="showModal"
            classes="modal-container"
            content-class="modal-content"
          >
            <span class="modal__title">Hello, vue-final-modal</span>
          </vue-final-modal>
          
        </div> -->
        <img src="../assets/terminal.png" @click="toggleShell();">
        <div id="shell" align="left" style="display: none;">
          <v-shell
            :banner="banner"
            :shell_input="send_to_terminal"
            :commands="commands"
            @shell_output="prompt"
        ></v-shell>
        </div>
  </div>
</template>

<script>
  //import { VueFinalModal } from 'vue-final-modal'
  import Vue from "vue";
  import shell from 'vue-shell'
  Vue.use(shell);

  export default {
    components: {
      //VueFinalModal
    },
    data() {
    return {
      showModal: false,
      send_to_terminal: "",
      banner: {
        header: "Metascript Bash 9000",
        subHeader: "In the midst of chaos, there is also opportunity",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
            first: "+",
            second: "-",
            time: 750
        },
        sign: "mgross~$",
      },
      commands: [
        { name: "info",
          get() {
            return `<p>no meaningfull comments are written in this code.</p>`;
        }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        },
        {
        name: "status",
        get(){
          return `kubectl get pods
          NAME                                        READY     STATUS    RESTARTS   AGE
          neo4j-deployment-1006230814-6winp           1/1       Running   0          53d
          kafka-deployment-1006230814-fmgu3           1/1       Running   0          7d
          spark-3.0.1-deployment-1370807587-6ekbw     1/1       Running   0          4d
          nginx-deployment-1370807587-fg172           0/1       Pending   0          4m
          rootkit-deployment-1370807587-fz9sd         0/1       Pending   4          1m
          
          `
        }      
      }]
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    },
    toggleShell() {
      var sh = document.getElementById("shell");
      var nav = document.getElementById("nav");
      if (sh.style.display === "none") {
        sh.style.display = "block";
        sh.scrollIntoView();
      } else {
        sh.style.display = "none";
        nav.scrollIntoView();
      }
    }
  }
  
}
</script>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>