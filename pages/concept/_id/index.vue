<template>
  <div class="container-fluid">
    <div class="row fixed-top d-md-none">
      <div class="col px-0 top-header">
        <div class="row">
          <div class="col-auto pr-0 ml-4 text-center">
            <button class="btn btn-block">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col">
            <div class="row justify-content-center align-content-center">
              <div class="col-auto text-right ml-md-5">
                <span>Chapter:</span>
                <span class="chapter-number">03</span>
              </div>
              <div class="divider-v"></div>
              <div class="col-6 col-md-2">
                <span class="chapter-name">single candlestick pattern</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row topic">
          <div class="col text-center font-20 font-weight-medium-bold">
            <span>3 Key rules</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-auto col-md justify-content-center d-md-flex vh-100 d-none">
        <i
          class="fa fa-angle-left fa-2x align-self-center jumbo-page-navigator d-none d-md-inline"
          aria-hidden="true"
        ></i>
      </div>

      <div class="col-12 col-md-8 px-0 px-md-3">
        <div class="card vh-100 border-0">
           <div class="row d-md-block d-none">
              <div class="col px-0 top-header">
                <div class="row">
                  <!-- <div class="col-auto pr-0 ml-4 text-center">
                    <button class="btn btn-block">
                      <i class="fa fa-angle-left" aria-hidden="true"></i>
                    </button>
                  </div> -->
                  <div class="col">
                    <div class="row justify-content-center align-content-center">
                      <div class="col-5 text-right">
                        <span>Chapter:</span>
                        <span class="chapter-number">03</span>
                      </div>
                      <div class="divider-v"></div>
                      <div class="col-6 col-md-5">
                        <span class="chapter-name">single candlestick pattern</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row topic">
                  <div class="col text-center font-20 font-weight-medium-bold">
                    <span>3 Key rules</span>
                  </div>
                </div>
              </div>
            </div>
          <div class="img-section">
            <img
              src="https://kitestatic.zerodha.com/static/banners/varsity-discover.png"
              alt
              srcset
              class="img card-img img-thumbnail"
            />
          </div>
          <div class="card-body sheet">
            <p class="text font-montserrat font-weight-normal">
              <strong class="font-20">What is Lorem Ipsum?</strong>
              <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              Why do we use it?
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
          </div>
        </div>
      </div>
      <div class="col-auto col-md justify-content-center d-md-flex vh-100 d-none">
        <i
          class="fa fa-angle-right fa-2x align-self-center jumbo-page-navigator d-none d-md-inline"
          aria-hidden="true"
        ></i>
      </div>
    </div>
    <div class="row fixed-bottom">
      <div class="col-12 page-navigator">
        <div class="row">
          <div class="col-2 px-2 col-md">
            <button class="btn btn-block">
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col d-md-none">
            <button class="btn btn-block rounded-0">
              <i class="fa fa-angle-left" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-auto d-flex">
            <span class="font-20 font-weight-medium-bold align-self-center">
              <span>01</span>/
              <span>09</span>
            </span>
          </div>
          <div class="col text-left d-md-none">
            <button class="btn btn-block rounded-0">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
          <div class="col-2 col-md">
            <button class="btn btn-block">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sheet {
  height: 10%;
  padding: 2rem;
}
.img-section {
  margin-top: 112px !important;
  /* min-height: 30% !important; */
  height: fit-content;
  background: #ffcbd438;
  padding: 0px;
  margin-bottom: 20px;
}
.top-header {
  background: rgb(248, 248, 248);
  padding-top: 10px;
  padding-bottom: 5px;
}
.page-navigator {
  height: fit-content;
  padding: 10px;
  border-top: 0.5px solid #cccccc;
  background: white;
  /* box-shadow: 0px 0px 13px gray; */
}
.topic {
  padding: 10px;
}
.divider-v {
  border: 1.5px solid pink;
  background: pink;
  height: 25px;
  align-self: center;
}
.chapter-number {
  font-weight: 500;
  font-size: 20px;
}
.chapter-name {
  text-transform: capitalize;
}
.btn:focus {
  /* border: none !important; */
  box-shadow: none !important;
}
.jumbo-page-navigator {
  position: fixed;
}
</style>