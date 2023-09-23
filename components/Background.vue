<template>
  <div class="bg">
    <div class="bg-content"></div>
  </div>
</template>

<style>
.bg {
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  position: fixed;
  z-index: -1;
  display: flex;
  justify-content: center;
  padding: 120px 24px 160px;
  pointer-events: none;
}

.bg:before {
  background: radial-gradient(circle, rgba(2, 0, 36, 0) 0, #fafafa 90%);
  position: absolute;
  content: "";
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
}

.bg:after {
  content: "";
  background-image: url(/bg.jpg);
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  opacity: 1;
}

.bg-content {
  height: fit-content;
  z-index: 3;
  max-width: 1000px;
  background-image: radial-gradient(at 27% 37%, #3a8bfd 0, transparent 0),
    radial-gradient(at 97% 21%, #bfe8c2 0, transparent 50%),
    radial-gradient(at 52% 99%, #fca9b0 0, transparent 50%),
    radial-gradient(at 10% 29%, #cebdfc 0, transparent 50%),
    radial-gradient(at 97% 96%, #ffdfa9 0, transparent 50%),
    radial-gradient(at 33% 50%, #b7c9f7 0, transparent 50%),
    radial-gradient(at 79% 53%, #d69bac 0, transparent 50%);
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  filter: blur(100px) saturate(200%);
  top: 80px;
  opacity: 0.2;
}
</style>
