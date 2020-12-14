<template>
    <div class="">
        Row is : {{ rows }}
        <div v-if="loading">data loading...</div>
        <div v-else>
            <bookable-item
                v-for="(item, index) in bookable"
                :key="index"
                :title="item.title"
                :content="item.content"
                :price="3000"
            ></bookable-item>
        </div>
    </div>
</template>

<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {
        // possiamo rinominare i componenti per usarli come tag
        "bookable-item": BookableListItem
    },
    data() {
        return {
            bookable: null,
            loading: false,
            columns: 3
        };
    },
    // computed cerca sempre cio che viene cambato
    comptuted:{
        rows(){
            if(this.bookable == null){
                return 0;
            }
            return Math.ceil(this.bookable.length / this.columns);
        }
    },
    // beforeCreate(){
    //     console.log('before create');
    // },

    //cerato il primo possibile
    created() {
        this.loading = true;
        setTimeout(() => {
            this.bookable = [
                {
                    title: "locura",
                    content: "500"
                },
                {
                    title: "locura2",
                    content: "500"
                },
                {
                    title: "locura2",
                    content: "500"
                },
                {
                    title: "locura2",
                    content: "500"
                }
            ];
            this.loading = false;
        }, 1000);
    },
    // beforeMount(){
    //     console.log('mount before');
    // },
    mounted() {
        console.log("mounted");
    }
    // beforeDestroy(){
    //     console.log('before destroy');
    // },
    // destroyed(){
    //    console.log('destroyed');
    // }
};
</script>
