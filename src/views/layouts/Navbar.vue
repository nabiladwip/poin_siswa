<template>
<div class="container-scroller" v-if="isLoggedIn">
    <!-- partial:partials/_horizontal-navbar.html -->
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="nav-top flex-grow-1">
          <div class="container d-flex flex-row h-100 align-items-center">
            <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a class="navbar-brand brand-logo" href="index.html"><img src="../../assets/logo.svg"></a>
              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="../../assets/logo.svg"></a>
            </div>
            <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end flex-grow-1">
              <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item">
                  <a @click="logout">Logout</a>
                </li>
              </ul>
              <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
                <span class="mdi mdi-menu"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
              <a class="nav-link" href="/">
                <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                <span class="menu-title">Beranda</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/petugas">
                <i class="mdi mdi-account-settings menu-icon"></i>
                <span class="menu-title">Petugas Tatib</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/datasiswa">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                <span class="menu-title">Data Siswa</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/pelanggaran" class="nav-link">
                <i class="mdi mdi-codepen menu-icon"></i>
                <span class="menu-title">Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/input" class="nav-link">
                <i class="mdi mdi-puzzle-outline menu-icon"></i>
                <span class="menu-title">Input Pelanggaran</span>
              </a>
            </li>
            <li class="nav-item">
              <a href="/poin" class="nav-link">
                <i class="mdi mdi-image-filter menu-icon"></i>
                <span class="menu-title">Poin Siswa</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</div>
</template>

<script>
export default {
    name: 'navbar',
    computed : {
        isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    methods:{
      logout:function(){
          let conf = { headers : {"Authorization" : "Bearer " + localStorage.getItem("Authorization")} };
          let form = new FormData();
          this.axios.post('/logout', form, conf).then(response => {
            if (response.data.logged === false || response.data.status === 0) {
                this.$store.commit('logout')
                localStorage.removeItem("Authorization")
                this.$router.push({name: 'login'})
            }
          }).catch(error => {

        });
      },
  },
}
</script>