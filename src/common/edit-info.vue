<template>
    <div>
            <!--展示-->
            <div v-show="!show">
                    <!--有数据状态-->
                    <div class=" flex" v-if="title && title!=''">
                        <span class="lf"> 
                            <i v-if="icon" :class="icon"></i> 
                            <img v-if="img" :src="img" alt=""> 
                            <span class="title">{{title}}</span>
                        </span>
                        <div class="flex">
                            <span class="book-icon small"> <img src="../assets/diqiu.png" alt=""> </span>   
                            <span class="book-icon small" @click="show=true"> <i class="el-icon-edit-outline"></i> </span>   
                        </div>
                    </div>
                    <!--无数据状态-->
                    <div v-else>
                            <span class="edit-null" v-if="state">
                                     <i v-if="icon" :class="icon"></i> 
                                    <img v-if="img" :src="require('../assets/'+img)" alt=""> 
                                    <span>暂无{{label}}</span>
                            </span>
                            <span v-else class="edit-label link" @click="show=true;"> <i class="el-icon-circle-plus-outline"></i> <span>{{label || title}}</span> </span>
                    </div>
            </div>
            <!--编辑-->
            <div class="show-item" v-show="show">
                    <el-input type="textarea" v-model="showtitle" :placeholder="label" :rows="4"></el-input>
                    <div class="el-margin"> <hr> </div>
                    <div class="flex">
                        <span class="book-icon2"> <img src="../assets/diqiu.png" alt=""> 公开</span>
                        <span>
                            <el-button type="info" size="medium" @click="show=false;">取消</el-button>
                            <el-button type="primary" size="medium" @click="getsave">保存</el-button>
                        </span>
                    </div>
            </div>
    </div>
</template>

<script>
export default {
    props:["title","label","icon","img","type"],
    data() {
        return {
            state:null,
            showtitle:this.title,
            show:false
        };
    },
    created() {
        if(this.$route.query.id){
            this.state=true
        }else{
            this.state=false
        }
    },
    mounted() {

    },
    methods: {
        getsave(){
            this.$emit("update:title",this.showtitle)
            this.show=false
        }
    }
};
</script>

<style scoped >
.edit-label{
    display: flex;
    align-items: center;
}
.edit-label >i{
    font-size: 30px;
    margin-right: 5px;
}
.edit-null{
    display: flex;
    align-items: center;
    color: #666;
    font-weight: 500;
}
.edit-null>i{
    color: #8C939D;
    font-size: 25px;
    margin-right: 10px;
}
.edit-null>img{
    width: 25px;
    height: 25px;
    margin-right: 10px;
}
</style>
