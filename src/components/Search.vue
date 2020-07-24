<template>
    <section class="search">
        <h1>Track Player Status</h1>
        <form v-on:submit.prevent="onSubmit">
            <div class="from-group">
                <label for="platform">Platform:</label>
                <select name="plat" id="plat" v-model="plat">
                    <option value="origin">Origin</option>
                    <option value="psn">Playstation</option>
                    <option value="xbl">XBox</option>
                </select>
            </div>
            <div class="from-group">
                <label for="ign">Username:</label>
                <input type="text" name="text" v-model="ign" id="ign"/>
            </div>
            <div class="from-group">
                <input type="submit" value="Submit" class="btn">
            </div>
        </form>
    </section>
</template>

<script>


export default {
    name: 'Search',
    data() {
        return {
            plat: "origin",
            ign: ""
        };
    },
    beforeCreate() {
        document.body.className = "body-bg-image"
    },
    methods: {
        onSubmit(){
            if(!this.ign){
                this.$toasted.show("Enter Valid IGN",{
                    duration: 1500,
                    icon: 'exclamation-circle'
                });
            } else {
                this.$router.push(`/profile/${this.plat}/${this.ign}`);
            }
        }
    }
}
</script>
