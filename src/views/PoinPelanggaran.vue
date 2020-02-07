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
                  <p class="card-title float-left"><b>Data Poin Siswa</b></p>
                  <p class="card-description float-right">
                    <a href="#" class="btn btn-sm btn-success btn-icon-text" data-toggle="modal" data-target="#modalDetail">
                      <i class="mdi mdi-plus btn-icon-prepend"></i>
                      Tambah
                    </a>
                  </p>
                  <div class="table-responsive">
                    <input type="text" placeholder="Pencarian Siswa..." name="cari" id="cari" class="form-control">
                    <div class="dropdown-divider"></div>
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NIS</th>
                          <th>Nama Siswa</th>
                          <th>Kelas</th>
                          <th>Total Poin</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>Herman Beck Supriadi</td>
                          <td>X RPL 2</td>
                          <td><div class="badge badge-primary">100</div></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-warning btn-icon-text" data-toggle="modal" data-target="#modalDetail">
                              <i class="mdi mdi-file-document-box-outline btn-icon-prepend"></i>
                              Detail
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>1234/12/23/20.09</td>
                          <td>John Abraham Sutanto</td>
                          <td>XII TKJ 4</td>
                          <td><div class="badge badge-primary">200</div></td>
                          <td>
                            <a href="#" class="btn btn-sm btn-warning btn-icon-text" data-toggle="modal" data-target="#modalDetail">
                              <i class="mdi mdi-file-document-box-outline btn-icon-prepend"></i>
                              Detail
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

        <div class="modal fade" id="modalDetail" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content modal-md">
              <div class="modal-header">
                <h5 class="modal-title" id="ModalLabel">Detail Poin Siswa</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Tanggal</th>
                      <th>Pelanggaran</th>
                      <th>Kategori</th>
                      <th>Keterangan</th>
                      <th>Poin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10/11/2019</td>
                      <td>Terlambat masuk sekolah</td>
                      <td>Kedisiplinan</td>
                      <td>Baru datang jam 07.00</td>
                      <td><div class="badge badge-primary">15</div></td>
                    </tr>
                    <tr>
                      <td>01/05/2019</td>
                      <td>Barang Ketinggalan</td>
                      <td>Kedisiplinan</td>
                      <td>Charger Ketinggalan</td>
                      <td><div class="badge badge-primary">10</div></td>
                    </tr>
                  </tbody>
                </table>
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