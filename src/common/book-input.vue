<template>
<div>
    <div class="book-input" :class="active?'active':(book.text!=''?'active2':'')" @click="getClick">
        <div class="book-icon" v-if="book.img || book.icon">
            <img :src="book.img" alt="" v-if="book.img">
            <i v-else :class="book.icon"> </i>
        </div>
        <div class="book-input-content">
            <div class="book-placeholder">
                <span class="book-input-text">{{book.title}}</span>
                <slot id="right">
                    <span v-if="maxlength" class="book-input-total">{{book.text.length}} / 20</span>
                </slot>
            </div>
            <div class="book-input-title">
                <input :disabled="book.disabled?true:false" type="text" :maxlength="maxlength" ref="bookInput" placeholder="请输入名称" @blur.stop="active = false" @focus.stop="active=true" v-model="book.text">
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ["book","maxlength"],
    data() {
        return {
            active: false
        }
    },
    methods: {
        getClick() {
            if (this.book.disabled) {
                return
            }
            this.active = true;
            setTimeout(res => {
                this.$refs.bookInput.focus()
            }, 10)
        }
    },
};
</script>

<style scoped>
.book-input {
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    height: 60px;
    cursor: auto;
}

.book-input:hover {
    border-color: #999;
}
/*
.book-input-content {
    min-width: 85%;
}*/

.book-placeholder {
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 12px;
    position: relative;
}

.book-placeholder>.book-input-total {
    position: absolute;
    right: 0;
}

.book-input-title input {
    border: 0;
    font-size: 20px;
    outline: none;
    width: 100%;
}

.book-input.active {
    border: 1px solid #1F7BF2;
}

.book-input-text {
    font-size: 16px;
    transition: all 0.2s;
    color: #666;
}

.book-input-total {
    display: none;
    color: #999;
}

.book-input-title {
    display: none;
}

.book-input.active2 .book-input-total,
.book-input.active2 .book-input-title,
.book-input.active .book-input-total,
.book-input.active .book-input-title {
    display: block;
}

.book-input.active2 .book-input-text {
    font-size: 12px;
}

.book-input.active .book-input-text {
    color: #1F7BF2;
    font-size: 12px;
}

.book-icon {
    font-size: 20px;
}
</style>
