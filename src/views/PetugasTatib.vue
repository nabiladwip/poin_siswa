<template>
    <div class="container-scroller">
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <p class="card-title float-left"><b>Data Petugas Tatib</b></p>
                  <p class="card-description float-right">
                    <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal" data-target="#modalTatib">
                      <i class="mdi mdi-plus btn-icon-prepend"></i>
                      Tambah
                    </a>
                  </p>
                  <div class="table-responsive">

                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>Email</th>
                          <th>Nama Petugas</th>
                          <th>Role</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>admin@smktelkom-mlg.sch.id</td>
                          <td>Abdullah Sutejo Rahman</td>
                          <td><div class="badge badge-warning">admin</div></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalTatib">
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
                          <td>sisworoso@smktelkom-mlg.sch.id</td>
                          <td>Sisworoso</td>
                          <td><div class="badge badge-warning">petugas</div></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-info btn-icon-text" data-toggle="modal" data-target="#modalTatib">
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

        <div class="modal fade" id="modalTatib" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Form Petugas</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="nis" class="col-form-label">E-Mail</label>
                    <input type="text" name="nis" class="form-control" id="nis" placeholder="E-Mail">
                  </div>
                  <div class="form-group">
                    <label for="nama" class="col-form-label">Nama Petugas</label>
                    <input type="text" name="nama" class="form-control" id="nama" placeholder="Nama Petugas">
                  </div>
                  <div class="form-group">
                    <label for="kelas" class="col-form-label">Role</label>
                    <select class="form-control" name="role" id="role">
                      <option value="admin" checked>Admin</option>
                      <option value="petugas">Petugas</option>
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