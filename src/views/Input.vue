<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <p class="card-title float-left"><b>Data Input Pelanggaran Tatib</b></p>
              <p class="card-description float-right">
                <b-button variant="success" v-b-modal.modalTatib v-on:click="Add"><i class="mdi mdi-plus btn-icon-prepend"></i> Tambah</b-button>
              </p>
              <div class="table-responsive">

                <b-table striped hover :items="data_pelanggaran" :fields="fields">
                  <template v-slot:cell(poin)="data">
                    <h5><b-badge variant="warning">{{ data.item.poin }}</b-badge></h5>
                  </template>
                  <template v-slot:cell(Aksi)="data">
                    <b-button size="sm" variant="info" v-on:click="Edit(data.item)" v-b-modal.modalTatib><i class="mdi mdi-pencil btn-icon-prepend"></i> Ubah</b-button>&nbsp;
                    <b-button size="sm" variant="danger" v-on:click="Drop(data.item.id)"><i class="mdi mdi-delete btn-icon-prepend"></i> Hapus</b-button>
                  </template>
                </b-table>
                <b-pagination
                  v-model="currentPage"
                  :per-page="perPage"
                  :total-rows="rows"
                  align="center"
                  v-on:input="pagination">
                </b-pagination>

                <b-toast id="loadingToast" title="Processing Data" no-auto-hide>
                  <b-spinner label="Spinning" variant="success"></b-spinner>
                  <strong class="text-success">Loading...</strong>
                </b-toast>

                <!-- toast untuk tampilan message box -->
                <b-toast id="message" title="Message">
                  <strong class="text-success">{{ message }}</strong>
                </b-toast>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal 
      id="modalTatib"
      @ok="Save"
    >
      <template v-slot:modal-title>
        Form Input Pelanggaran
      </template>
        <form ref="form">
          <div class="form-group">
              <label for="tanggal" class="col-form-label">Tgl.Melanggar</label>
              <b-form-input type="date" v-model="tanggal"></b-form-input>
          </div>
          <div class="form-group">
            <label for="nama_siswa" class="col-form-label">Nama Siswa</label>
            <b-form-select id="id_siswa" v-model="id_siswa" :options="nama_siswa"></b-form-select>
          </div>
          <div class="form-group">
            <label for="id_pelanggaran" class="col-form-label">Pelanggaran</label>
            <b-form-select id="id_pelanggaran" v-model="id_pelanggaran" :options="nama_pelanggaran"></b-form-select>
          </div>
          <div class="form-group">
            <label for="keterangan" class="col-form-label">Keterangan</label>
            <b-form-input type="text" v-model="keterangan" placeholder="Keterangan"></b-form-input>
          </div>
        </form>
    </b-modal>

  </div>
</template>

<script>
module.exports = {
  data : function(){
    return {
      search: "",
      id: "",
      id_petugas: "",
      id_siswa: "",
      id_pelanggaran: "",
      keterangan: "",
      tanggal: "",
      action: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
      data_pelanggaran: [],
      fields: ["tanggal", "nama_siswa", "kelas", "kategori", "nama_pelanggaran", "poin", "Aksi"],
      nama_siswa: [],
      nama_pelanggaran: []
    }
  },

  methods: {
    getData : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      let offset = (this.currentPage - 1) * this.perPage;
      this.$bvToast.show("loadingToast");
      this.axios.get("/poin/" + this.perPage + "/" + offset, conf)
      .then(response => {
        if(response.data.status == 1){
          this.$bvToast.hide("loadingToast");
          this.data_pelanggaran = response.data.poin;
          this.rows = response.data.count;
        } else {
          this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data poin pelanggaran semua siswa."
          this.$bvToast.show("message");
          this.$router.push({name: "login"})
        }
        
      })
      .catch(error => {
        console.log(error);
      });
    },

    getSiswaDropdown: function(){
        //ambil data siswa untuk dropdown
        let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
        this.axios.get("/siswa", conf)
        .then(response => {
            let json_siswa = response.data.siswa;
            let list_siswa = []
            json_siswa.forEach(element => {
                list_siswa.push({value: element.id, text: element.nama_siswa})
            });
            this.nama_siswa = list_siswa
        })
    },

    getPelanggaranDropdown: function(){
        //ambil data pelanggaran untuk dropdown
        let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
        this.axios.get("/pelanggaran", conf)
        .then(response => {
            let json_pelanggaran = response.data.pelanggaran;
            let list_pelanggaran = []
            json_pelanggaran.forEach(element => {
                list_pelanggaran.push({value: element.id, text: element.nama_pelanggaran})
            });
            this.nama_pelanggaran = list_pelanggaran
        })
    },

    pagination : function(){
      if(this.search == ""){
        this.getData();
      } else {
        this.searching();
      }
    },

    Add : function(){
      this.action = "insert"
      this.id = ""
      this.id_petugas = this.$store.getters.userDetail.id
      this.id_siswa = ""
      this.id_pelanggaran = ""
      this.keterangan = ""
      this.tanggal = ""
      this.getSiswaDropdown()
      this.getPelanggaranDropdown()
    },

    Edit : function(item){
      this.getSiswaDropdown()
      this.getPelanggaranDropdown()
      this.action = "update";
      this.id = item.id
      this.id_petugas = this.$store.getters.userDetail.id
      this.id_siswa = item.id_siswa;
      this.id_pelanggaran = item.id_pelanggaran;
      this.keterangan = item.keterangan;
      this.tanggal = item.tanggal
    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");

      if(this.action === "insert"){
        let form = new FormData();
        //get id petugas
        this.axios.get("/login/check", conf)
        .then(response => {
          if(response.data.auth == false || response.data.status == 0){
            this.$store.commit('logout')
          }
        })

        form.append("id_petugas", this.id_petugas);
        form.append("id_siswa", this.id_siswa);
        form.append("id_pelanggaran", this.id_pelanggaran);
        form.append("keterangan", this.keterangan);
        form.append("tanggal", this.tanggal);
        this.axios.post("/poin", form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      } else {
        let form = {
          id_petugas: this.id_petugas,
          id_pelanggaran: this.id_pelanggaran,
          id_siswa: this.id_siswa,
          keterangan: this.keterangan,
          tanggal: this.tanggal
        }
        this.axios.put("/poin/" + this.id, form, conf)
        .then(response => {
          this.$bvToast.hide("loadingToast");
          if(this.search == ""){
            this.getData();
          } else {
            this.searching();
          }
          this.message = response.data.message;
          this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },

    Drop : function(id){
      let conf = { headers: { "Authorization" : "Bearer " + this.key} };
      if(confirm('Apakah anda yakin ingin menghapus data ini?')){
        this.$bvToast.show("loadingToast");
        this.axios.delete("/poin/" + id, conf)
        .then(response => {
            this.getData();
            this.$bvToast.hide("loadingToast");
            this.message = response.data.message;
            this.$bvToast.show("message");
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
  },
  mounted(){
    this.key = localStorage.getItem("Authorization");
    this.getData();
  }
}
</script>