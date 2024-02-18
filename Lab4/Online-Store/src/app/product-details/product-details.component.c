* {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  min-height: 500px;
}
body {
  height: 100%;
}
.photos {
  position: relative;
  width: 600px;
  height: 400px;
}
.slide {
  float: right;
  position: absolute;
  z-index: 1;
  width: 600px;
  height: 400px;
  background-color: rgb(255, 255, 255);
  text-align: center;
  opacity: 1;
}
.item {
  top: 0;
  right: 0;
  float: right;
  position: absolute;
  margin-top: 0;
  z-index: 9;
  height: 100%;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}
.item:checked {
  z-index: 2;
}
.item:checked + .slide {
  opacity: 0;
}
.item:checked:nth-child(1):checked {
  z-index: 3;
}
.item:nth-child(1):checked ~ .item:checked + .slide {
  opacity: 1;
}
.slide img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}