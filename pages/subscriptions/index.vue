<template>
    <Layout :page="page">
        <SubscribersTable/>
    </Layout>  
</template>
<script>
export default {
    data(){
        return{
            page:'subscriptions'
        }
    }
}
</script>