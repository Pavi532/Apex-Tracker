<template>
    <section>
        <div class="divLoad" v-if="loading">
                <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
        </div>
        <div v-else-if="error">
            <h1>{{error}}</h1>
            <router-link to="/"> Back to home </router-link>
        </div>
        <!-- class="container" -->
        <div v-if="profileData">
            <h1 class="gamertag">
                <img :src="profileData.platformInfo.avatarUrl" alt="Avatar Pic" class="platform-avatar">
                {{profileData.platformInfo.platformUserId}}
            </h1>
            <div class="grid-container">
                <div class="grid-item">
                    <p><number :to="profileData.segments[0].stats.level.displayValue" :duration=2 /></p>
                    
                    <h4>Level</h4>
                </div>
                <div class="grid-item">
                    <p><number :to="profileData.segments[0].stats.season5Wins.displayValue" :duration=2 /></p>
                    <h4>Season 5 Wins</h4>
                </div>
                <div class="grid-item">
                    <p><number :to="profileData.segments[0].stats.season5Kills.displayValue" :duration=2 /></p>
                    <h4>Season 5 Kills</h4>
                </div>
            </div>
            <router-link to="/">Back</router-link>
        </div>
    </section>
</template>

<script>
import Vue from 'vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import VueNumber from 'vue-number-animation'
// import { Row, Column } from 'vue-grid-responsive';
import axios from 'axios';


Vue.use(VueNumber);

export default {
    name: 'Profile',
    data(){
        return{
            loading: false,
            error: null,
            profileData: null,
            color: '#FFFFFF',
            size: '15px'
        }
    },
    beforeCreate(){
        document.body.className = 'body-bg-no-image';
    },
    components: {
        PulseLoader
        // VueNumber 
        // Row,
        // Column
    },
    async created(){
        this.loading = true;
        try {
            const res = await axios.get(`/api/v1/profile/${this.$route.params.plat}/${this.$route.params.ign}`);
            this.profileData = res.data.data;
            console.log(this.profileData);
            let loc = this.profileData.segments[1].metadata.imageUrl;
            document.body.style.backgroundImage = 'url('+loc+')';
            document.body.style.backgroundRepeat = "no-repeat";
            this.loading = false;
        } catch (err) {
            this.loading = false;
            this.error = err.res.data.message;
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Share+Tech+Mono&display=swap');


section{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
}

h1.gamertag {
    font-size: 2rem;
    color: black;
    background: rgba(255, 255, 255, 0.945);
    padding: 0.3rem 0.5rem;
    text-align: center;
    border-radius: 30px;
    margin-bottom: 3rem;
    margin-left: calc(50% - 140px);
    display: flex;
    align-items: center;
    width: fit-content;
    max-width: 350px;
    position: relative;
    animation-name: rise;
    animation-duration: 1s;
    bottom: -2.5vh;
}
@keyframes rise {
    0% {bottom:-30vh; max-width: 0px; color: var(--primary-color);}
    60% {color: var(--primary-color);}
    100% {bottom: -2.5vh; color: black; width: fit-content;}
}

.grid-container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    padding: 10px;
    backdrop-filter: blur(1px);
    border-radius: 30px;
}

.grid-item {
    text-align: right;
    margin-right: 1em;
    animation-name: show;
    animation-duration: 1s;
}

.grid-item span{
    font-size: 5rem;
    text-align: right;
    font-stretch: narrower;
    font-family: 'Share Tech Mono', sans-serif;
    border-bottom: 2px solid currentColor;
    
}

.grid-item h4{
    font-stretch: narrower;
    font-family: 'Share Tech Mono', sans-serif;
    margin-left: 9px;
    position: relative;
    top: -1em;
}

.grid-container-img {
    display: grid;
    grid-template-columns: auto;
    padding: 10px;
}

.legendPic{
    width: 20%;
}

@keyframes show {
    0% {color: var(--primary-color);}
}

a {
    display: inline-block;
    margin-top: 2rem;
    border: rgb(158, 158, 158) 2px solid;
    color: white;
    border-radius: 5px;
    padding: 0.5rem 0.8rem;
    text-align: center;
    position: relative;
    left: 15%;
    width: 70%;
}
a:hover {
    border: #fff 2px solid;
    color:  var(--primary-color);
    font-weight: bolder;
    background-color: white;
}
.platform-avatar {
    width: 60px;
    margin-right: 0.4rem;
    border-radius: 50%;
}

@media (max-width: 500px) {
h1.gamertag{
    animation-name: none;
    margin-left: auto;
    margin-right: auto;
    bottom: 2.5vh;
}

.grid-container{
    background-color: rgba(0, 0, 0, 0.308);
}

.platform-avatar {
    display: none;
}

}

</style>