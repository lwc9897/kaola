<template>
    <main>
        <router-link to='/mine'>
        <span class="two">返回</span>
        </router-link>
        <ul>
            <li><img width="100%" src="../assets/images/d1.png" alt=""></li>
            <li><img width="100%" src="../assets/images/d2.png" alt=""></li>
            <li><img width="100%" src="../assets/images/d3.png" alt=""></li>
            <li><img width="100%" src="../assets/images/d4.png" alt=""></li>
            <li><img width="100%" src="../assets/images/d5.png" alt=""></li>
            <li class="one"><img class="one1" width="100%" src="../assets/images/d6.png" alt=""></li>
        </ul>
    </main>
</template>
<style   scoped>

.one1{
    position: fixed;
    display: block;
    width: 100%;
    bottom: 0;
}
.two{
    float: left;
    font-size: 20px;
    position: fixed;
    color: white;
    padding: 5px;
}
</style>