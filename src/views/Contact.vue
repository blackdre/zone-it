<template>
  <div class="container">
    <h1>Contact Us</h1>
    <div class="row">
      <div class="col-md-6">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=30%20stuart%20street%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe
            ><a href="https://fmovies2.org">fmovies.to</a><br /><a
              href="https://www.embedgooglemap.net"
            ></a>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <form>
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingSubject"
              placeholder="Password"
            />
            <label for="floatingSubject">Subject</label>
          </div>
          <div class="form-floating">
            <textarea
              type="text"
              class="form-control"
              placeholder="Message"
              id="exampleFormControlTextarea1"
              rows="5"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
</style>