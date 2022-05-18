<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Home from './components/pages/Home.vue'
import NotFound from './components/pages/NotFound.vue'

const routes = {
  '/': Home,
}

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
</script>

<template>
  <Navbar />
  <component :is="currentView" />
  <Footer />
</template>
