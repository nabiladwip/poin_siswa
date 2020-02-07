<template>
  <div>
    <div class="container mt-3">
      <div class="row">
        <div class="col-lg-12 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <p class="card-title float-left"><b>Data Pelanggaran</b></p>
              <p class="card-description float-right">
                <b-button variant="success" v-b-modal.modalPelanggaran v-on:click="Add"><i class="mdi mdi-plus btn-icon-prepend"></i> Tambah</b-button>
              </p>
              <div class="table-responsive">
                <b-table striped hover :items="pelanggaran" :fields="fields">
                  <template v-slot:cell(role)="data">
                    <b-badge variant="warning">{{ data.item.role }}</b-badge>
                  </template>
                  <template v-slot:cell(Aksi)="data">
                    <b-button size="sm" variant="info" v-on:click="Edit(data.item)" v-b-modal.modalPelanggaran><i class="mdi mdi-pencil btn-icon-prepend"></i> Ubah</b-button>&nbsp;
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
      id="modalPelanggaran"
      @ok="Save"
    >
      <template v-slot:modal-title>
        Form Data Pelanggaran
      </template>
        <form ref="form">
          <!-- <div class="form-group">
            <label for="nama" class="col-form-label">Nis</label>
            <input type="text" name="Nis" class="form-control" id="name" placeholder="Nis" v-model="nis">
          </div>
          <div class="form-group">
            <label for="nis" class="col-form-label">Nama Siswa</label>
            <input type="text" name="name" class="form-control" id="email" placeholder="Nama Siswa" v-model="nama_siswa">
          </div>
          <div class="form-group">
            <label for="nama" class="col-form-label">Kelas</label>
            <input type="text" name="Kelas" class="form-control" id="password" placeholder="Kelas" v-model="kelas">
          </div> -->
          
          <div class="form-group">
            <label for="role" class="col-form-label"> Nama Pelanggaran</label>
            <select class="form-control" name="nama_pelanggran" id="nama_pelanggaran" v-model="nama_pelanggaran">
              <option value="Telat" checked>Telat</option>
              <option value="Atribut tidak lengkap">Atribut tidak lengkap</option>
            </select>
          </div>
          <div class="form-group">
            <label for="role" class="col-form-label">Kategori</label>
            <select class="form-control" name="nama_pelanggran" id="nama_pelanggaran" v-model="kategori">
              <option value="Kedisiplinan" checked>Kedisiplinan</option>
              <option value="Kerapian">Kerapian</option>
            </select>
          </div>
          <div class="form-group">
            <label for="role" class="col-form-label">poin</label>
            <select class="form-control" name="poin" id="poin" v-model="poin">
              <option value="30" checked>30</option>
              <option value="40">40</option>
            </select>
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
      nama_pelanggaran: "",
      kategori: "",
      poin: "",
      action: "",
      message: "",
      currentPage: 1,
      rows: 0,
      perPage: 10,
      key: "",
      pelanggaran: [],
      fields: [ "nama_pelanggaran", "kategori", "poin", "Aksi"],
    }
  },

  methods: {
    getData : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      let offset = (this.currentPage - 1) * this.perPage;
      this.$bvToast.show("loadingToast");
      this.axios.get("/pelanggaran/" + this.perPage + "/" + offset, conf)
      .then(response => {
        if(response.data.status == 1){
          this.$bvToast.hide("loadingToast");
          this.pelanggaran = response.data.pelanggaran;
          this.rows = response.data.count;
        } else {
          this.$bvToast.hide("loadingToast");
          this.message = "Gagal menampilkan data pelanggaran."
          this.$bvToast.show("message");
          this.$router.push({name: "login"})
        }
        
      })
      .catch(error => {
        console.log(error);
      });
    },

    pagination : function(){
      if(this.search == ""){
        this.getData();
      } else {
        this.searching();
      }
    },

    Add : function(){
      this.action = "insert";
      this.id = "";
      this.nama_pelanggaran = "";
      this.kategori = "";
      this.poin = ""; 
    },

    Edit : function(item){
      this.action = "update";
      this.id = item.id;
      this.nama_pelanggaran = item.nama_pelanggaran;
      this.kategori = item.kategori;
      this.poin = item.poin;
    },

    Save : function(){
      let conf = { headers: { "Authorization" : 'Bearer ' + this.key } };
      this.$bvToast.show("loadingToast");
      if(this.action === "insert"){
        let form = new FormData();
        form.append("id", this.id);
        form.append("nama_pelanggaran",  this.nama_pelanggaran);
        form.append("kategori", this.kategori);
        form.append("poin", this.poin);
       

        this.axios.post("/pelanggaran", form, conf)
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
          nama_pelanggaran: this.nama_pelanggaran,
          kategori: this.kategori,
          poin: this.poin,
          
        }
        this.axios.put("/pelanggaran/" + this.id, form, conf)
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
        this.axios.delete("/pelanggaran/" + id, conf)
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