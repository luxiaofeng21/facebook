<template>
    <div class="katn9ffz">
            <div class="book-card">
                    <div class="flex">
                        <div class="lf">
                                 <div class="tou-title"> <img src="../../assets/sale.png" alt=""> 优惠</div>
                                 <el-tabs v-model="tabs">
                                    <el-tab-pane label="推荐优惠" name="1"></el-tab-pane>
                                    <el-tab-pane label="Active Offers in Wallet" name="2"></el-tab-pane>
                                    <el-tab-pane label="Past Offers in Wallet" name="3"></el-tab-pane>
                                 </el-tabs>
                        </div>
                        <el-button type="primary" @click="dialogVisible2=true">
                            <i class="el-icon-plus"></i>
                            Create Offer
                        </el-button>
                    </div>
            </div>
            <el-dialog title="Your Pages" append-to-body :visible.sync="dialogVisible2">
                   <cart-list type="arrow" :list="pages" :size="'small'" @getcart="getpublic"></cart-list>
            </el-dialog>

            <el-dialog append-to-body :visible.sync="dialogVisible" title="创建优惠、折扣或促销">
                    <div class="flex">
                        <div class="lf">
                                <el-upload
                                class="upload-demo"
                                drag
                                action="https://jsonplaceholder.typicode.com/posts/"
                                multiple>
                                    <i class="el-icon-upload"></i>
                                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                                    <div class="el-upload__tip" slot="tip">为你的优惠选择照片。为获最优成效，请使用清楚展示你商品或服务的图片，而且其中不要包含文字。</div>
                                </el-upload>
                                <p>
                                    <span class="book-title">优惠类型</span>
                                    <el-select></el-select>
                                </p>
                        </div>
                        <div class="rg"></div>
                    </div>
                    <span slot="footer" class="el-footer">
                            <el-button type="primary">速推帖子</el-button>
                            <el-button type="primary">发布</el-button>
                    </span>
            </el-dialog>
    </div>
</template>

<script>
import cartList from '@/common/cart-list'
export default {
    components:{
        cartList
    },
    data() {
        return {
            dialogVisible2:false,
            dialogVisible:false,
            tabs:"1",
            pages:[]
        };
    },
    created() {
        var that=this;
        //公共主页
        this.$axios.get("/api/publicPage").then(res=>{
            var data=res.data.data
            data.map(x=>x.img=require("@/assets/flag.png"))
            that.pages=data
        })
    },
    mounted() {

    },
    methods: {
        getpublic(i,item){
            this.$router.push({name:"manageHome",params:{id:item.id}})
        }
    }
};
</script>

<style scoped >

</style>
