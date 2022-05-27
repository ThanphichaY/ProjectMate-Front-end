<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { faker } from "@faker-js/faker";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      projects: [],
      colleagues: [],
    };
  },
  methods: {
    generateFakeProjects() {
      for (let i = 0; i < 9; i++) {
        this.projects.push({
          id: i,
          image: faker.image.business(640, 480, true),
          title: faker.name.jobTitle(),
          description: faker.lorem.paragraph(),
          qualification: faker.lorem.lines(),
          positions: faker.lorem.sentence(),
          company: faker.company.companyName(),
          project_contact: faker.phone.phoneNumber(),
          project_password: faker.internet.password(),
        });
      }
    },
    generateFakeColleagues() {
      for (let i = 0; i < 9; i++) {
        this.colleagues.push({
          id: i,
          image: faker.image.people(640, 480, true),
          name: faker.name.findName(),
          capability: faker.lorem.paragraph(),
          int_pos: faker.lorem.sentence(),
          resume: faker.image.nature(640, 480, true),
          portfolio: faker.image.nature(640, 480, true),
          colleague_contact: faker.phone.phoneNumber(),
          colleague_password: faker.internet.password(),
        });
      }
    },
    addProject(project) {
      const id = this.projects.length;
      const newProject = { id, ...project };
      this.projects.push(newProject);
    },
    addColleague(colleague) {
      const id = this.colleagues.length;
      const newColleague = { id, ...colleague };
      this.colleagues.push(newColleague);
    },
    deleteProject(id) {
      this.projects = this.projects.filter((project) => project.id !== id);
    },
    deleteColleague(id) {
      this.colleagues = this.colleagues.filter(
        (colleague) => colleague.id !== id
      );
    },
    editProject(edit_project) {
      const objIndex = this.projects.findIndex(
        (project) => project.id == edit_project.id
      );
      this.projects[objIndex] = edit_project;
    },
    editColleague(edit_colleague) {
      const objIndex = this.colleagues.findIndex(
        (colleague) => colleague.id == edit_colleague.id
      );
      this.colleagues[objIndex] = edit_colleague;
    },
  },
  mounted() {
    this.generateFakeProjects();
    this.generateFakeColleagues();
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view
      :projects="projects"
      :colleagues="colleagues"
      :onAddProject="addProject"
      :onAddColleague="addColleague"
      :onDeleteProject="deleteProject"
      :onDeleteColleague="deleteColleague"
      :onEditProject="editProject"
      :onEditColleague="editColleague"
    />
    <Footer />
  </div>
</template>

<style lang="scss">
@use "sass:map";

@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&family=Roboto&display=swap");
$font-family-base: "Noto Sans Thai", "Roboto", sans-serif;

$primary: #150095;
$secondary: #ffd912;

@import "bootstrap/scss/bootstrap";
@import "bootstrap-icons/font/bootstrap-icons";

#app {
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
}
</style>
