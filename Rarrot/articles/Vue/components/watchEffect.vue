<template>
    <div class="inp-form">
        <input class="inp" ref="input" v-model="message" placeholder="打开F12,进行输入测试" name="text" :required="true" type="text">
        <span class="inp-border"></span>
    </div>
    <Button @click="stop" hoverF="停止" hoverS="点击!"></Button>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue'
import Button from '../../组件库/Button.vue'

let message = ref<string>('')

let input = ref<HTMLInputElement>()

const stop = watchEffect((oninvalidate) => {
    console.log("🚀  inp", input.value)

    // watchEffect是非惰性的，这里使用了message就会直接去监听message
    console.log("🚀  message", message.value)
    oninvalidate(() => {
        console.log('before')
    })
}, {
    // pre 组件更新前执行
    // sync 强制效果始终同步触发
    // post 组件更新后执行
    flush: 'post',
    // 可以用来debugger
    // onTrigger(e) {
    //     debugger
    // }
})

</script>
<style scoped>
.inp-form {
    --width-of-inp: 200px;
    --border-height: 1px;
    --border-before-color: rgba(252, 215, 53, 0.39);
    --border-after-color: #fdd835;
    --inp-hovered-color: #f8f2d84b;
    position: relative;
    width: var(--width-of-inp);
    margin-top: 20px;
}

.inp {
    color: var(--vp-c-text-1);
    font-size: 0.9rem;
    background-color: transparent;
    width: 100%;
    box-sizing: border-box;
    padding-inline: 0.5em;
    padding-block: 0.7em;
    border: none;
    border-bottom: var(--border-height) solid var(--border-before-color);
}

.inp-border {
    position: absolute;
    background: var(--border-after-color);
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    transition: 0.3s;
}

.inp:hover {
    background: var(--inp-hovered-color);
}

.inp:focus {
    outline: none;
}

.inp:focus~.inp-border {
    width: 100%;
}
</style>