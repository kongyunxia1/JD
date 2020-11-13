function Cart() {
    if (localStorage.getItem("cartDatas")) {
        this.cartDatas = JSON.parse(localStorage.getItem("cartDatas"))
    } else {
        this.cartDatas = {};
    }
}

Cart.prototype.saveData = function(id, num, ter) {

    //ter 表示是否为最终值，true 表示为最终值
    if (this.cartDatas[id] === undefined || true) {

        this.cartDatas[id] = num;
    } else {

        this.cartDatas[id] += num;
    }
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}

Cart.prototype.showData = function(id) {
    this.oCartList = document.getElementById(id)

    var productDatas = JSON.parse(localStorage.getItem("Data"));
    //console.log(productDatas) //所有商品信息

    var str = "";
    for (let id in this.cartDatas) {
        console.log(this.cartDatas[id]) //1
            // console.log(productDatas[id].title);
        str += `
        <input type="checkbox" class="ck">
		<li data-id="${id}" class = "list">
			
			<img src="${productDatas[id].img}">
			<span>${productDatas[id].title}</span>
			<span class="perPrice">${productDatas[id].price}</span>
			<span class="minus">-</span>
			<input type="text" value="${this.cartDatas[id]}" class="num">
            <span class="plus">+</span>
            <span>总价</span>
			<span class="perTotalPrice">${productDatas[id].price * this.cartDatas[id]}</span>
			<span class="del">删除</span>	
		</li>`
    }

    this.oCartList.innerHTML = str;

    //全选
    let checkAll = document.getElementById("checkAll");
    this.list = document.getElementsByClassName("list");
    this.cks = document.querySelectorAll(".ck");
    this.perPrice = document.querySelectorAll(".perPrice");
    this.minus = document.querySelectorAll(".minus");
    this.adds = document.querySelectorAll(".plus");
    this.otxt = document.querySelectorAll(".num");
    this.perTotalPrice = document.querySelectorAll(".perTotalPrice");
    this.del = document.querySelectorAll(".del");


    /* 删除数据 */
    Cart.prototype.removeData = (i => {

        console.log(i)
        console.log(this.list[i])
        let id = this.list[i].getAttribute("data-id");
        this.oCartList.removeChild(this.list[i]); //删节点
        this.cks[i].checked = false;
        this.cks[i].style.display = "none";
        delete this.cartDatas[id]; //删数据
        localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
    })


    checkAll.onclick = () => {
        //让所有单个复选框的选中状态和全选复选框的状态一致
        for (let i = 0; i < this.cks.length; i++) {
            this.cks[i].checked = checkAll.checked;
        }
        this.getTotalPrice(); //计算总价
    }

    //在点击单个复选框时，判断选中的数量和总数量是否相同
    for (let i = 0; i < this.cks.length; i++) {
        this.cks[i].onclick = () => {
            var count = 0; //计数
            for (let j = 0; j < this.cks.length; j++) {
                if (this.cks[j].checked) {
                    count++;
                }
            }
            if (count == this.cks.length) {
                checkAll.checked = true;
            } else {
                checkAll.checked = false;
            }
            this.getTotalPrice(); //计算总价
        }
    }

    //加  减  文本框
    for (let i = 0; i < this.minus.length; i++) {
        //"减"按钮
        this.minus[i].onclick = () => {
                this.otxt[i].value--;
                if (this.otxt[i].value < 1) {
                    this.otxt[i].value = 1;
                    alert("宝贝不能再少了哦");
                }
                this.updateData(i);

            }
            //"加"按钮
        this.adds[i].onclick = () => {
                this.otxt[i].value++;
                this.updateData(i);
            }
            //"文本框"内容设置
        this.otxt[i].onchange = () => {
                if (this.otTxt[i].value < 1) {
                    this.otxt[i].value = 1;
                }
                this.updateData(i);
            }
            //"删除"按钮
        this.del[i].onclick = () => {

            this.getTotalPrice();
            this.removeData(i);
        }

    }

}



Cart.prototype.updateData = function(i) {
    //改单个总价
    this.perTotalPrice[i].innerText = this.otxt[i].value * this.perPrice[i].innerText
        //改总价
    this.getTotalPrice();
    //改购物车数据
    var id = this.list[i].getAttribute("data-id")
    this.saveData(id, +this.otxt[i].value, true);

}

//总价
Cart.prototype.getTotalPrice = function() {
    let totalPrice = document.getElementById("totalPrice");
    let price = 0;
    for (let i = 0; i < this.cks.length; i++) {
        if (this.cks[i].checked) {
            price += +this.perTotalPrice[i].innerText;

        }
    }
    totalPrice.innerText = price;
}

/* Cart.prototype.removeData = (i => {

    console.log(i)
    console.log(this.list[i])
    let id = this.list[i].getAttribute("data-id");
    this.oCartList.removeChild(this.list[i]); //删节点
    this.cks[i].checked = false;
    this.cks[i].style.display = "none";
    delete this.cartDatas[id]; //删数据
    localStorage.setItem("cartDatas", JSON.stringify(this.cartDatas));
}) */