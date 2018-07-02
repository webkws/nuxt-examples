<template>
    <div>
        <h2>{{custom}}</h2>
    </div>
</template>

<script>
    export default {
        asyncData(){
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    resolve({
                        custom:'fuck'
                    })
                },1000)
            })
        }
    }
</script>
