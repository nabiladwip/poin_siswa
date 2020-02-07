<template>
  <div class="datasiswa">

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title float-left"><b>Data Siswa</b></p>
                  <p class="card-description float-right">
                    <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                      <i class="mdi mdi-plus btn-icon-prepend"></i>
                      Tambah
                    </a>
                  </p>
                  <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NIS</th>
                          <th>Nama Siswa</th>
                          <th>Kelas</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>Herman Beck Supriadi</td>
                          <td>X RPL 2</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                              <i class="mdi mdi-pencil btn-icon-prepend"></i>
                              Ubah
                            </a>
                            <a href="#" class="btn btn-sm btn-danger btn-icon-text">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                              Hapus
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>John Abraham Sutanto</td>
                          <td>XII TKJ 4</td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalSiswa">
                              <i class="mdi mdi-pencil btn-icon-prepend"></i>
                              Ubah
                            </a>
                            <a href="#" class="btn btn-sm btn-danger btn-icon-text">
                              <i class="mdi mdi-delete btn-icon-prepend"></i>
                              Hapus
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="modalSiswa" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Form Siswa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="nis" class="col-form-label">NIS</label>
                    <input type="text" name="nis" class="form-control" id="nis" placeholder="Nomor Induk Siswa">
                  </div>
                  <div class="form-group">
                    <label for="nama" class="col-form-label">Nama Siswa</label>
                    <input type="text" name="nama" class="form-control" id="nama" placeholder="Nama Lengkap">
                  </div>
                  <div class="form-group">
                    <label for="kelas" class="col-form-label">Kelas</label>
                    <select class="form-control" name="kelas" id="kelas">
                      <option value="1" checked>X RPL 1</option>
                      <option value="2">X RPL 2</option>
                      <option value="3">X RPL 3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <button type="button" class="btn btn-md btn-success">Simpan</button>
                    <button type="button" class="btn btn-md btn-light" data-dismiss="modal">Batal</button>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                
              </div>
            </div>
          </div>
        </div>

        <!-- content-wrapper ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="w-100 clearfix">
            <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © 2019 <a href="http://www.urbanui.com/" target="_blank">Moklet</a>. All rights reserved.</span>
            <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">UKL Moklet & Made With <i class="mdi mdi-heart-outline text-danger"></i></span>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
 
</template>

<script>

export default {
  name: 'datasiswa'
}
</script>
