<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col">
        <p class="info text-center">Bu form yazılımcıların maaş ve şirket bilgileri için oluşturulmuştur</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="d-flex justify-content-center">
            <router-link class="router-link" :to="{ name : 'Form'}"><a href="#">Developer 2022 salary anketini doldurmak için tıklayınız</a></router-link>
        </div>
      </div>
      <div class="col">
        <div class="d-flex justify-content-center">
            <router-link class="router-link" :to="{ name : 'List'}"><a href="#">Listeyi görmek için tıklayınız</a></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 200px auto;
  align-items: center;
  justify-content: center;
}
.info {
  width: 35%;
  margin: 0 auto;
  margin-bottom: 95px;
  color: #f1c40f;
  background-color: #2c3e50;
  font-size: 16px;
  font-weight: bold;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  box-shadow: 0 3px 0 #f1c40f;
  padding-left: 18px;
  padding-right: 2px;
  padding-top: 20px;
  padding-bottom: 12px;
  border-right: #34495e;
}
.router-link a {
  color: #34495e;
  padding: 24px 36px;
  position: relative;
  text-decoration: none;
  border-radius: 20%;
  font-size: 18px;
  box-shadow: 0 5px darkorange;
}

.router-link a:hover {
  background-color: #2c3e50;
  cursor: pointer;
  color: #f1c40f;
  font-family: fantasy;
  font-size: 14px;
}

</style>