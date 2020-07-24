<template>
  <div class="container">
    <Header/>
    <router-view />
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Share&display=swap');
:root {
  --primary-color: #953036;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: var(--primary-color);
  font-family: 'Share', sans-serif;
  color: #fff;
  line-height: 1.6;
}

.body-bg-no-image {
  background: var(--primary-color);
}
.body-bg-image {
  background: var(--primary-color);
}
.container {
  max-width: 960px;
  margin: 1rem auto;
  overflow: auto;
  padding: 0 2rem;
}
.form-group {
  margin: 1rem 0;
}

h1{
  padding-bottom: 1em;
}

.search {
  background: rgba(0, 0, 0, 0.5);
  border: 4px #fff solid;
  padding: 2rem;
  position: absolute;
  top: 58%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  border-radius: 30px;
}
input, select, textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  margin-top: 0.5em;
  margin-bottom: 1em;
  border-radius: 30px;
}

label{
  font-size: 1.3em;
}

.btn {
  display: flex;
  background: var(--primary-color);
  color: #fff;
  padding: 0.4rem 1.3rem;
  border: none;
  cursor: pointer;
  outline: none;
  margin-right: auto;
  margin-left: auto;
  margin-top: 2rem;
  margin-bottom: 0em;
  width: 100px;
}

.btn:hover{
  background-color: white;
  color: var(--primary-color);
  font-weight: bolder;
}

@media (max-width: 700px) {
  body {
    background: var(--primary-color);
    padding: 0.4rem 0.3rem;
  }
}
</style>
