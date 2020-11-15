<template>
	<div class="app">   
		<Head></Head>
		<div class="ConTent">
			<div class="list">
				<div class="lf">
						<div class="lately" v-if="lately">
								<div class="register_title">近期登录</div>
								<div class="register_text">请点击头像或添加帐户。</div>
								<div class="userCon">
											<ul class="userUl">
												<li>
													<img class=" img" src="/v/t1.0-1/p160x160/116346741_1700768033421331_6792692860000257665_n.jpg?_nc_cat=107&amp;_nc_sid=dbb9e7&amp;_nc_ohc=SPJdL2v3LPwAX-dPU3n&amp;_nc_ht=scontent-hkt1-1.xx&amp;_nc_tp=6&amp;oh=0ebf4c2dec4c6906ecdd7fff74a1f916&amp;oe=5F4F1000" alt="" aria-label="枫果果" role="img" style="width:160px;height:160px;display:block">
													<div class="userTitle">枫果果</div>	
													<i class="el-icon-circle-close"></i>
												</li>
												<li class="adduser">
													  <div class="Addimg"> <i></i></div>
													  <div class="Addtitle">添加账户</div>
												</li>
											</ul>
								</div>
						</div>
						<div v-else>
								<div class="Content_title">联系你我，分享生活，尽在 Facebook</div>
								<img class="img" src="/rsrc.php/v3/yi/r/OBaVg52wtTZ.png" alt="" width="537" height="195">
						</div>
				</div>
				<div class="rg">
						<div class="register_title">注册</div>
						<div class="register_text">快速又简便。</div>
						<div class="registerCon">
								<div class="regName">
										<input type="text" name="xing" placeholder="姓">
										<input type="text" name="ming" placeholder="名"> 
								</div>
								<div class="regCell"> <input type="text" placeholder="手机号或邮箱"> </div>
								<div class="regCell"> <input type="text" placeholder="创建密码"> </div>
						</div>
						<div class="registerDate">
								<div class="resTitle">出生日期</div>
								<div class="flex">
									<select aria-label="年" name="birthday_year" id="year" title="年" class="_9407 _5dba _8esg"><option value="0">年</option><option value="2020" selected="1">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option><option value="1949">1949</option><option value="1948">1948</option><option value="1947">1947</option><option value="1946">1946</option><option value="1945">1945</option><option value="1944">1944</option><option value="1943">1943</option><option value="1942">1942</option><option value="1941">1941</option><option value="1940">1940</option><option value="1939">1939</option><option value="1938">1938</option><option value="1937">1937</option><option value="1936">1936</option><option value="1935">1935</option><option value="1934">1934</option><option value="1933">1933</option><option value="1932">1932</option><option value="1931">1931</option><option value="1930">1930</option><option value="1929">1929</option><option value="1928">1928</option><option value="1927">1927</option><option value="1926">1926</option><option value="1925">1925</option><option value="1924">1924</option><option value="1923">1923</option><option value="1922">1922</option><option value="1921">1921</option><option value="1920">1920</option><option value="1919">1919</option><option value="1918">1918</option><option value="1917">1917</option><option value="1916">1916</option><option value="1915">1915</option><option value="1914">1914</option><option value="1913">1913</option><option value="1912">1912</option><option value="1911">1911</option><option value="1910">1910</option><option value="1909">1909</option><option value="1908">1908</option><option value="1907">1907</option><option value="1906">1906</option><option value="1905">1905</option></select>
									<select aria-label="月" name="birthday_month" id="month" title="月" class="_9407 _5dba _8esg"><option value="0">月</option><option value="1">1 月</option><option value="2">2 月</option><option value="3">3 月</option><option value="4">4 月</option><option value="5">5 月</option><option value="6">6 月</option><option value="7">7 月</option><option value="8" selected="1">8 月</option><option value="9">9 月</option><option value="10">10 月</option><option value="11">11 月</option><option value="12">12 月</option></select>
									<select aria-label="日" name="birthday_day" id="day" title="日" class="_9407 _5dba _8esg"><option value="0">日</option><option value="1" selected="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select>
									</div>
						</div>
						<div class="registerSex">
								<div class="resTitle">性别</div>
								<div class="flex">
									<label for="sex"><input type="radio" name="sex" value="0">女</label>
									<label for="sex"><input type="radio" name="sex" value="1">男</label>
									<label for="sex"><input type="radio" name="sex" value="2">自定义</label>
								</div>
						</div>
						<p class="resText">
							点击注册，即表示你同意接受我们的
							<a href="/legal/terms/update" id="terms-link" target="_blank" rel="nofollow">条款</a>、
							<a href="/about/privacy/update" id="privacy-link" target="_blank" rel="nofollow">数据使用政策</a>和 
							<a href="/policies/cookies/" id="cookie-use-link" target="_blank" rel="nofollow">Cookie 政策</a>。
							你可能会收到我们的短信通知，并可以随时退订。
						</p>
						<div class="resBtn">注册</div>
						<div  class="resMsg">为名人、团体或企业<a href="/pages/create/?ref_type=registration_form" >创建公共主页</a>。</div>
				</div>
			</div>
		</div>
		<Foor></Foor>
	</div>
</template>
<script>
import Head from '@/common/Lhead.vue'
import Foor from '@/common/Lfoor.vue'
export default {
	components:{
		Head,
		Foor
	},
	data() {
		return {
			lately:true
		}
	},
}
</script>

<style  scoped>


	/*主体内容 */
	.Content_title{
		color: #0e385f;
		font-size: 21px;
		font-weight: 600;
	}

	.ConTent{
		background: linear-gradient(white, #D3D8E8);
		padding: 4rem 0;
	}

	.list{
		display: flex;
		margin: 0 auto;
		width: 60rem;
		justify-content: space-between;
	}

	.register_title{
		margin-bottom: 5px;
		font-size: 37px;
		font-weight: 600;
	}
	.register_text{
		color: #1d2129;
    	font-size: 20px;
	}

	.registerCon input{
		border: 1px solid #bdc7d8;
		font-size: 19px;
		border-radius: 5px;
		padding: 8px 10px;
		width:100%;
	}
	.registerCon>div{
		margin-top: 10px;
	}
	.regCell input{
		width: 95%;
	}

	.registerDate{
		margin-top: 15px;
		margin-bottom: 5px;
	}
	.registerDate select {
		font-size: 14px;
		height: 30px;
		padding: 5px;
	}
	.resText{
		font-size: 0.8rem;
		color: #777;
		width: 300px;
		line-height: 18px;
	}


	.resTitle{
		    color: #90949c;
			font-size: 17px;
			font-weight: bold;
			margin-bottom: 5px;
	}
	.registerSex{
		font-size: 18px;
	}

	.resBtn {
		display: inline-block;
		min-width: 194px;
		padding: 7px 20px;
		text-align: center;
		background: linear-gradient(#67ae55, #578843);
		background-color: #69a74e;
		box-shadow: inset 0 1px 1px #a4e388;
		text-shadow: 0 1px 2px rgba(0,0,0,.5);
		color: #fff;
		font-size: 20px;
		font-weight: bold;
		border: 1px solid;
		border-color: #3b6e22 #3b6e22 #2c5115;
	}
	.resMsg{
		border-top: 1px solid #dddfe2;
		color: #666;
		font-size: 14px;
		font-weight: bold;
		margin-top: 10px;
		padding-top: 15px;
	}

	.regName{
		display: flex;
	}
	.regName input:first-child{
		margin-right: 10px;
	}


	.userUl{
		margin-top: 15px;
	}
	.userUl li{
		position: relative;
		display: inline-block;
		text-align: center;
		font-size: 18px;
		margin: 0 5px;
		overflow: hidden;
		border-radius:0.5rem;
	}
	.userUl li>i{
		position: absolute;
		top: 1%;
		left: 1%;
		color: #fff;
		font-size: 20px;
	}
	.Addimg{
		width: 160px;
		height:160px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #fff;
	}
	.Addimg i{
		background-image: url(/rsrc.php/v3/yQ/r/kSx_I-KB15T.png);
		background-size: auto;
		background-repeat: no-repeat;
		display: inline-block;
		width: 42px;
		height: 42px;
		background-position: 0 -132px;
	}
	.Addtitle{
		background: #eee;
		padding: 0.5rem 0;
		color: #385898;
	}
	.userTitle{
		padding: 0.5rem 0;
		background: #fff;
	}
</style>