<template>
<div class="rg">
    <div class="register_title">注册</div>
    <div class="register_text">快速又简便。</div>
    <div class="registerCon">
        <div class="regName">
            <el-input :validate-event="true" v-model="me.surname" type="text" name="surname" placeholder="姓"></el-input>
            <el-input v-model="me.name" type="text" name="name" placeholder="名"></el-input>
        </div>
        <div class="regCell">
            <el-input ttype="text" v-model="me.email" placeholder="手机号或邮箱"></el-input>
        </div>
        <div class="regCell">
            <el-input type="text" v-model="me.password" placeholder="创建密码"></el-input>
        </div>
    </div>
    <div class="registerDate">
        <div class="resTitle">出生日期</div>
        <div class="flex">
            <el-select v-model="me.year" name="birthday_year" id="year" placeholder="年" class="_9407 _5dba _8esg">
                <el-option value="0">年</el-option>
                <el-option value="2020" selected="1">2020</el-option>
                <el-option value="2019">2019</el-option>
                <el-option value="2018">2018</el-option>
                <el-option value="2017">2017</el-option>
                <el-option value="2016">2016</el-option>
                <el-option value="2015">2015</el-option>
                <el-option value="2014">2014</el-option>
                <el-option value="2013">2013</el-option>
                <el-option value="2012">2012</el-option>
                <el-option value="2011">2011</el-option>
                <el-option value="2010">2010</el-option>
                <el-option value="2009">2009</el-option>
                <el-option value="2008">2008</el-option>
                <el-option value="2007">2007</el-option>
                <el-option value="2006">2006</el-option>
                <el-option value="2005">2005</el-option>
                <el-option value="2004">2004</el-option>
                <el-option value="2003">2003</el-option>
                <el-option value="2002">2002</el-option>
                <el-option value="2001">2001</el-option>
                <el-option value="2000">2000</el-option>
                <el-option value="1999">1999</el-option>
                <el-option value="1998">1998</el-option>
                <el-option value="1997">1997</el-option>
                <el-option value="1996">1996</el-option>
                <el-option value="1995">1995</el-option>
                <el-option value="1994">1994</el-option>
                <el-option value="1993">1993</el-option>
                <el-option value="1992">1992</el-option>
                <el-option value="1991">1991</el-option>
                <el-option value="1990">1990</el-option>
                <el-option value="1989">1989</el-option>
                <el-option value="1988">1988</el-option>
                <el-option value="1987">1987</el-option>
                <el-option value="1986">1986</el-option>
                <el-option value="1985">1985</el-option>
                <el-option value="1984">1984</el-option>
                <el-option value="1983">1983</el-option>
                <el-option value="1982">1982</el-option>
                <el-option value="1981">1981</el-option>
                <el-option value="1980">1980</el-option>
                <el-option value="1979">1979</el-option>
                <el-option value="1978">1978</el-option>
                <el-option value="1977">1977</el-option>
                <el-option value="1976">1976</el-option>
                <el-option value="1975">1975</el-option>
                <el-option value="1974">1974</el-option>
                <el-option value="1973">1973</el-option>
                <el-option value="1972">1972</el-option>
                <el-option value="1971">1971</el-option>
                <el-option value="1970">1970</el-option>
                <el-option value="1969">1969</el-option>
                <el-option value="1968">1968</el-option>
                <el-option value="1967">1967</el-option>
                <el-option value="1966">1966</el-option>
                <el-option value="1965">1965</el-option>
                <el-option value="1964">1964</el-option>
                <el-option value="1963">1963</el-option>
                <el-option value="1962">1962</el-option>
                <el-option value="1961">1961</el-option>
                <el-option value="1960">1960</el-option>
                <el-option value="1959">1959</el-option>
                <el-option value="1958">1958</el-option>
                <el-option value="1957">1957</el-option>
                <el-option value="1956">1956</el-option>
                <el-option value="1955">1955</el-option>
                <el-option value="1954">1954</el-option>
                <el-option value="1953">1953</el-option>
                <el-option value="1952">1952</el-option>
                <el-option value="1951">1951</el-option>
                <el-option value="1950">1950</el-option>
                <el-option value="1949">1949</el-option>
                <el-option value="1948">1948</el-option>
                <el-option value="1947">1947</el-option>
                <el-option value="1946">1946</el-option>
                <el-option value="1945">1945</el-option>
                <el-option value="1944">1944</el-option>
                <el-option value="1943">1943</el-option>
                <el-option value="1942">1942</el-option>
                <el-option value="1941">1941</el-option>
                <el-option value="1940">1940</el-option>
                <el-option value="1939">1939</el-option>
                <el-option value="1938">1938</el-option>
                <el-option value="1937">1937</el-option>
                <el-option value="1936">1936</el-option>
                <el-option value="1935">1935</el-option>
                <el-option value="1934">1934</el-option>
                <el-option value="1933">1933</el-option>
                <el-option value="1932">1932</el-option>
                <el-option value="1931">1931</el-option>
                <el-option value="1930">1930</el-option>
                <el-option value="1929">1929</el-option>
                <el-option value="1928">1928</el-option>
                <el-option value="1927">1927</el-option>
                <el-option value="1926">1926</el-option>
                <el-option value="1925">1925</el-option>
                <el-option value="1924">1924</el-option>
                <el-option value="1923">1923</el-option>
                <el-option value="1922">1922</el-option>
                <el-option value="1921">1921</el-option>
                <el-option value="1920">1920</el-option>
                <el-option value="1919">1919</el-option>
                <el-option value="1918">1918</el-option>
                <el-option value="1917">1917</el-option>
                <el-option value="1916">1916</el-option>
                <el-option value="1915">1915</el-option>
                <el-option value="1914">1914</el-option>
                <el-option value="1913">1913</el-option>
                <el-option value="1912">1912</el-option>
                <el-option value="1911">1911</el-option>
                <el-option value="1910">1910</el-option>
                <el-option value="1909">1909</el-option>
                <el-option value="1908">1908</el-option>
                <el-option value="1907">1907</el-option>
                <el-option value="1906">1906</el-option>
                <el-option value="1905">1905</el-option>
            </el-select>
            <el-select v-model="me.month" placeholder="月" name="birthday_month" id="month" title="月" class="_9407 _5dba _8esg">
                <el-option value="0">月</el-option>
                <el-option value="1">1 月</el-option>
                <el-option value="2">2 月</el-option>
                <el-option value="3">3 月</el-option>
                <el-option value="4">4 月</el-option>
                <el-option value="5">5 月</el-option>
                <el-option value="6">6 月</el-option>
                <el-option value="7">7 月</el-option>
                <el-option value="8" selected="1">8 月</el-option>
                <el-option value="9">9 月</el-option>
                <el-option value="10">10 月</el-option>
                <el-option value="11">11 月</el-option>
                <el-option value="12">12 月</el-option>
            </el-select>
            <el-select v-model="me.day" placeholder="日" name="birthday_day" id="day" title="日" class="_9407 _5dba _8esg">
                <el-option value="0">日</el-option>
                <el-option value="1" selected="1">1</el-option>
                <el-option value="2">2</el-option>
                <el-option value="3">3</el-option>
                <el-option value="4">4</el-option>
                <el-option value="5">5</el-option>
                <el-option value="6">6</el-option>
                <el-option value="7">7</el-option>
                <el-option value="8">8</el-option>
                <el-option value="9">9</el-option>
                <el-option value="10">10</el-option>
                <el-option value="11">11</el-option>
                <el-option value="12">12</el-option>
                <el-option value="13">13</el-option>
                <el-option value="14">14</el-option>
                <el-option value="15">15</el-option>
                <el-option value="16">16</el-option>
                <el-option value="17">17</el-option>
                <el-option value="18">18</el-option>
                <el-option value="19">19</el-option>
                <el-option value="20">20</el-option>
                <el-option value="21">21</el-option>
                <el-option value="22">22</el-option>
                <el-option value="23">23</el-option>
                <el-option value="24">24</el-option>
                <el-option value="25">25</el-option>
                <el-option value="26">26</el-option>
                <el-option value="27">27</el-option>
                <el-option value="28">28</el-option>
                <el-option value="29">29</el-option>
                <el-option value="30">30</el-option>
                <el-option value="31">31</el-option>
            </el-select>
        </div>
    </div>
    <div class="registerSex">
        <div class="resTitle">性别</div>
        <el-radio-group v-model="me.sex">
            <el-radio label="女">女</el-radio>
            <el-radio label="男">男</el-radio>
            <el-radio label="自定义">自定义</el-radio>
        </el-radio-group>
        <div v-if="me.sex=='自定义'">
            <el-select style="width:100%" v-model="custom">
                <el-option v-for="(item,index) in customAll" :key="index" :label="item" :value="index"></el-option>
            </el-select>
        </div>
    </div>
    <p class="resText">
        点击注册，即表示你同意接受我们的
        <a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">条款</a>、
        <a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">数据使用政策</a>和
        <a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookie 政策</a>。
        你可能会收到我们的短信通知，并可以随时退订。
    </p>
    <button type="sumit" class="resBtn" @click="getemail">注册</button>
    <div class="resMsg">为名人、团体或企业<a href="/pages/create/?ref_type=registration_form">创建公共主页</a>。</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            custom: 0,
            customAll: ["他：“祝他生日快乐！”", "她：“祝她生日快乐！”", "TA:“祝TA生日快乐！”"],
            me: {
                surname: "lu",
                name: "feng",
                email: "2584278167@qq.com",
                password: "123456",
                year: "2020",
                month: "10",
                day: "01",
                sex: "女",
                lang:"zh"
            },
        }
    },
    methods: {
        getemail() {
            var that=this;
            var data=this.me;
            if(data.sex=='女'){
                data.me_img="tou.png"
            }else{
                data.me_img="tou2.png"
            }
            //循环判断
            var list=[]
            var arr=document.querySelector(".el-dialog__body .el-input__inner")
            for(let i=0;i<arr.length;i++){
                if(arr[i].value==''){
                        this.$message.error(arr[i].placeholder+"不能为空");
                        return false
                }
            }
             var reg = new RegExp("^[a-z0-9A-Z]+[-|a-z0-9A-Z._]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
            if(!reg.test(data.email)){
                this.$message.error("邮箱格式不正确，请重新输入！！");
            }
            this.$axios.post("/api/email",data).then(res=>{
                if(res.code==-1){
                    this.$message.error(res.msg)
                }else{
                     that.$router.push({path:"/login/code",query:{title:data.email,state:"email"}})
                }
               
            })
        }
    },
}
</script>

<style scoped>
/*主体内容 */
.Content_title {
    color: #0e385f;
    font-size: 21px;
    font-weight: 600;
}

.ConTent {
    background: linear-gradient(white, #D3D8E8);
    padding: 4rem 0;
}

.list {
    display: flex;
    margin: 0 auto;
    width: 62rem;
    justify-content: space-between;
}

.register_title {
    margin-bottom: 5px;
    font-size: 37px;
    font-weight: 600;
}

.register_text {
    color: #1d2129;
    font-size: 20px;
}

.registerCon input {
    border: 1px solid #bdc7d8;
    font-size: 19px;
    border-radius: 5px;
    padding: 8px 10px;
    width: 100%;
}

.registerCon>div {
    margin-top: 10px;
}

.regCell input {
    width: 95%;
}

.registerDate {
    margin-top: 15px;
    margin-bottom: 5px;
}

.registerDate select {
    font-size: 14px;
    height: 30px;
    padding: 5px;
}

.resText {
    font-size: 0.8rem;
    color: #777;
    width: 300px;
    line-height: 18px;
}

.resTitle {
    color: #90949c;
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 5px;
}

.registerSex {
    font-size: 18px;
}

.resBtn {
    cursor: pointer;
    display: inline-block;
    min-width: 194px;
    padding: 7px 20px;
    text-align: center;
    background: linear-gradient(#67ae55, #578843);
    background-color: #69a74e;
    box-shadow: inset 0 1px 1px #a4e388;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .5);
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid;
    border-color: #3b6e22 #3b6e22 #2c5115;
}

.resMsg {
    border-top: 1px solid #dddfe2;
    color: #666;
    font-size: 14px;
    font-weight: bold;
    margin-top: 10px;
    padding-top: 15px;
}

.regName {
    display: flex;
}

.regName>*:first-child {
    margin-right: 10px;
}

.userUl {
    margin-top: 15px;
}

.userUl li {
    position: relative;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    margin: 0 5px;
    overflow: hidden;
    border-radius: 0.5rem;
}

.userUl li>i {
    position: absolute;
    top: 1%;
    left: 1%;
    color: #fff;
    font-size: 20px;
}

.Addimg {
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}

.Addimg i {
    background-image: url(/rsrc.php/v3/yQ/r/kSx_I-KB15T.png);
    background-size: auto;
    background-repeat: no-repeat;
    display: inline-block;
    width: 42px;
    height: 42px;
    background-position: 0 -132px;
}

.Addtitle {
    background: #eee;
    padding: 0.5rem 0;
    color: #385898;
}

.userTitle {
    padding: 0.5rem 0;
    background: #fff;
}
.el-input{
    font-size: 20px;
}
</style>
