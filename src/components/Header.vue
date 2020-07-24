<template>
    <header>
        <img id="logo" :src="image">
    </header>
</template>

<script>


export default {
    name: 'Header',
    data(){
        return {
            image: require('@/assets/logo.png')
        }
    }
}


</script>

<style scoped>
    img{
        width:200px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    @media(max-width: 500px){
        img {
            display: block;
            margin: auto;
        }
    }
</style>