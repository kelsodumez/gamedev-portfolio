<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 5px;">
      The following are some projects I've worked on.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 5px;">
      There is more to see on <a target="_blank" href="https://keslo.itch.io">itch.io</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
