<template>
  <div class="home">
          <h1> Welcome to Metascript </h1>
          <p>
            At the moment this page is just a place where I experiement with some web frameworks and try out new stuff.
            I've a lot of todos and ideas but for now I just want to deploy the site.
          </p>
          <img alt="Me logo" src="../assets/me2.jpg">
          <p>Have fun, Mario</p>
          

          <button @click="showModal = true"><img alt="Laptop" src="../assets/laptop.jpg"></button>

          <vue-final-modal v-model="showModal">
            <button @click="showModal = false">close terminal</button>
            <v-shell
              :banner="banner"
              :shell_input="send_to_terminal"
              :commands="commands"
              @shell_output="prompt"
          ></v-shell>
          </vue-final-modal>
  </div>
</template>

<script>
  import { VueFinalModal } from 'vue-final-modal'
  import Vue from "vue";
  import shell from 'vue-shell'
  Vue.use(shell);

  Vue.use(shell);

  export default {
    components: {
      VueFinalModal
    },
    data() {
    return {
      showModal: false,
      send_to_terminal: "",
      banner: {
        header: "Vue Shell",
        subHeader: "Shell is power just enjoy 🔥",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
            first: "🔅",
            second: "🔆",
            time: 750
        },
        sign: "VueShell $",
        img: {
            align: "left",
            link: "/mylogo.png",
            width: 100,
            height: 100
        }
      },
      commands: [
        { name: "info",
          get() {
            return `<p>With ❤️ By Salah Bentayeb @halasproject.</p>`;
        }
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          }
        }
      ]
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    }
  }
};
</script>
