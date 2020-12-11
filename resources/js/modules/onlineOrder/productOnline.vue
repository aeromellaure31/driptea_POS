<template>
    <div class="sudlanan">
        <div class="w-100">
            <div class="mx-auto w-50" ref="paypal"></div>
        </div>
    </div>
</template>
<style scoped>
/* width */
::-webkit-scrollbar {
  width: 1px;
}

.noImage{
    margin-top: 10%;
    height: 200px;
    width: 30%;
}

.imgItem{
    height: 200px;
    width: 80%;
}
.row{
    width: 80%;
    /* height: 650px; */
    overflow-y: scroll;
}
.secRow{
    width: 80%;
    height: 650px;
    overflow-y: scroll;
}
.sudlanan{
    font-family: Roboto Slab;
}
.imageSize{
    height: 250px;
    margin-top: 2%;
}
</style>
<script>
import AUTH from '../../services/auth'
import ROUTER from '../../router'
export default {
    data(){
        return{
            product: {
                price: 3.99,
                description: "backlink from"
            },
        }
    },
    mounted(){
        const script = document.createElement("script");
            script.src =
            "https://www.paypal.com/sdk/js?client-id=AXdLSpMUd2etAVVMF5OKhuJ1jjPD7KjVamJfOjR2OBxP35jDxVAyclSTWL3q5uAiY8mXO4ga1wznZtbX";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
    },
    methods: {
        setLoaded: function(resp) {
        this.loaded = true;
        window.paypal
            .Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                purchase_units: [
                    {
                    description: this.product.description,
                    amount: {
                        currency_code: "USD",
                        value: this.product.price
                    }
                    }
                ]
                });
            },
            onApprove: async (data, actions, resp) => {
                this.loadding = true;
                const order = await actions.order.capture();
                this.data;
                this.paidFor = true;
                this.loadding = false;
                // window.location.href = "/productOnline";
                this.redirect('/productOnline')
            },
            })
            .render(this.$refs.paypal);
        },
        redirect(param){
            ROUTER.push(param).catch(()=>{})
        },
    },
}
</script>
