<template>
  <nav class="navbar navbar-light">
    <div class="container-fluid">
      <button
        class="btn-menu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="d-flex">
        <router-link to="/" class="navbar-brand"
          ><img alt="Vue logo" src="../../assets/Zone-IT-Logo.png" class="logo"
        /></router-link>
      </div>
    </div>
  </nav>

  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasExampleLabel">App</h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link active"
            aria-current="page"
            data-bs-dismiss="offcanvas"
            >Home</router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" data-bs-dismiss="offcanvas"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/contact-us"
            class="nav-link"
            data-bs-dismiss="offcanvas"
            >Contact us</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            to="/services"
            class="nav-link"
            data-bs-dismiss="offcanvas"
            >Services</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  width: 80px;
}

.btn-menu {
  border-radius: 50px;
  padding: 10px;
  border: 2px solid rgb(31, 133, 11);
  background: white;
}

.nav-link {
  color: #064204;
  font-size: 2rem;
}
.nav-link:hover {
  color: #064204;
  text-shadow: 0 0 20px #073a00;
}
</style>