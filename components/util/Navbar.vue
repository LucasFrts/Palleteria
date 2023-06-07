<template>
    <nav class="navbar navbar-expand-lg bg-pallet">
      <div class="container-fluid d-flex justify-content-between">
        <NuxtLink class="navbar-brand text-white" to="/about">Palleteria</NuxtLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink class="nav-link" :class="{'active' : active == 'home'}" aria-current="page" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :class="{'active' : active == 'subscribe'}" aria-current="page" to="/subscribe">Cadastrar</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :class="{'active' : active == 'subscriptions'}" aria-current="page" to="/subscriptions">Cadastros</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" :class="{'active' : active == 'about'}" aria-current="page" to="/about">Sobre</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
    },
  },
};
</script>
<style scoped>
.bg-pallet {
  background-color: #f2cf63;
}
.nav-link {
  color: #885f12;
}
.nav-link:hover {
  color: #533909;
  background-color: #e3bb72;
  border-radius: 8px;
}
.active {
  color: #442f08 !important;
}
.active:hover {
  color: #533909 !important;
}
a {
  font-weight: bold;
}
.navbar {
  border-bottom: 1px solid #dba6445b;
  position: fixed;
  z-index: 9999;
  width: 100%;
  top:0;
}
.navbar-brand {
  padding: 8px !important;
  font-size: 1.25rem;
}
</style>