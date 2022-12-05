<template>
    <div>
        <header>
            <section class="header-bg">
                <div></div>
                <span>立即登录</span>
            </section>
            <footer class="head-footer">
                <div>
                    <span>0张</span>
                    <span class="gray">卖座券</span>
                </div>
                <div>
                    <span>￥0</span>
                    <span class="gray">余额</span>
                </div>
            </footer>
        </header>

        <section>
            <fun-list icon="coupon-o" titel="电影订单" color="yellowgreen"></fun-list>
            <fun-list icon="balance-o" titel="组合红包" color="red"></fun-list>
            <fun-list icon="service-o" titel="帮助与客服" color="skyblue"></fun-list>
            <fun-list icon="setting-o" titel="设置" color="darkseagreen"></fun-list>
        </section>
    </div>
</template>

<script>
import funList from '@/views/mine/FunList.vue'
export default {
  components: {
    funList
  }
}
</script>

<style lang="scss" scoped>
.header-bg{
    background-image: url('https://assets.maizuo.com/h5/v5/public/app/img/bg.a5bdd690.png');
    height: 12.5rem;
    position: relative;
    background-position: center;
    background-size: cover;
    div{
        background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2019-11-28%2F5ddf87c18ee27.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672822808&t=2f75b8d431e2a3730bcdb9d143d9c373');
        width: 4.1875rem;
        height: 4.1875rem;
        border-radius: 50%;
        background-position: center;
        background-size: cover;
        border: 2px solid white;
        position: absolute;
        left: 1.5625rem;
        top: 4.25rem;
    }
    span{
        font-size: 1rem;
        color: white;
        position: absolute;
        left: 7.1875rem;
        top: 5.625rem;
    }
}
.head-footer{
    height: 4.9375rem;
    border-bottom: .625rem solid #797d820d;
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    span{
        display: flex;
        flex-direction: column;
        font-size: 17px;
    }
    .gray{
        font-size: .8125rem;
        color: #797d82;
    }
}
</style>
