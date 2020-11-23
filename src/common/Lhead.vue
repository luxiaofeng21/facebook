<template>
<div class="Head">
    <div class="HeadNav">
        <a href="#/login">
            <div class="lf">facebook </div>
        </a>
        <div class="rg">
            <div class="HeadCell">
                <div class="HeadTitle">邮箱或手机号</div>
                <input type="text">
                <div class="HeadText">null</div>
            </div>
            <div class="HeadCell">
                <div class="HeadTitle">密码</div>
                <input type="text">
                <div class="HeadText">
                    <a href="#/login/recover">忘记账户？</a>
                </div>
            </div>
            <a href="#/login/newuser">
                <div class="HeadBtn">登录</div>
            </a>
        </div>
    </div>
</div>
</template>

<style scoped>
/*头部 */
.Head {
    background: #3F5C9A;
    color: #fff;
    padding: 0.5rem 0;
}

.HeadNav {
    display: flex;
    justify-content: space-between;
    width: 60rem;
    margin: 0 auto;
    align-items: center;
}

.HeadNav>a {
    color: #fff;
    font-size: 2.4rem;
    font-weight: bold;
}

.HeadNav>.rg {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    line-height: 1.5rem;
}

.HeadCell {
    margin-right: 10px;
}

.HeadText>a {
    color: #9cb4d8;

}

.HeadText>a:hover {
    text-decoration: underline;
}

.HeadBtn {
    background: #4267b2;
    padding: 5px 10px;
    cursor: pointer;
}

.HeadCell:first-child .HeadText {
    opacity: 0;
}

a {
    color: #fff;
}
</style>
