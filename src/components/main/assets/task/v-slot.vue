<template>
    <!-- v-slot -->
    <div>
        <header>
            <slot name="header" v-bind:slotInfo="slotInfo">
            </slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script>
export default {
    data(){
        return{
            slotInfo:{
                name:'这是slot里面的name'
            }
        }
    }
}
</script>
