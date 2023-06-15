<template>
    <nav class="navbar navbar-expand-lg bg-pallet">
      <div class="container-fluid d-flex justify-content-between">
        <NuxtLink class="navbar-brand text-white" to="/about">Palleteria</NuxtLink>
        <b-navbar-toggle target="nav-collapse">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
        </b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav class="flex-grow-0">
          <b-navbar-nav class="me-auto mb-2 mb-lg-0">
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
          </b-navbar-nav>
        </b-collapse>

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