<template>
    <div>
        <el-card>
            <div class="flex">
                <span class="book-title">待审核的帖子</span>
                <el-select v-model="type">
                    <el-option label="从新到旧" value="1"></el-option>
                    <el-option label="从旧到新" value="2"></el-option>
                </el-select>
            </div>
        </el-card>
        <div class="book-null">
                <img src="../../assets/null3.svg" alt="">
                <div>没有待审核的帖子</div>
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            type:"1"
        }
    }
}
</script>