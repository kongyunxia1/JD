class Fdj {
    constructor(obj) {

        // 定义变量
        this.el = document.querySelector(obj.el);
        console.log(this.el) //null

        this.small = this.el.querySelector('.small')
        this.mask = this.el.querySelector('.mask')
        this.big = this.el.querySelector('.big')
        this.bigImg = this.el.querySelector('.big-img')


        // 鼠标移入 small  
        this.small.onmouseenter = () => {
            this.mask.style.display = 'block'
            this.big.style.display = 'block'

            // 调整 遮罩和图片的比例关系 

            // 小图宽/小遮罩宽 = 大图宽/大遮罩宽
            // 大遮罩宽*小图宽/小遮罩宽 = 大图宽
            //console.log(this.big.offsetWidth); //0
            //console.log(this.small.offsetWidth);
            //console.log(this.mask.offsetWidth); //0
            let bigImgWidth = this.big.offsetWidth * this.small.offsetWidth / this.mask.offsetWidth
                //console.log(bigImgWidth);

            this.bigImg.style.width = bigImgWidth + 'px'

            //鼠标 在 small 上的移动
            this.small.onmousemove = (e) => {
                // console.log(e)
                let maskX = e.pageX - this.mask.offsetWidth / 2 - 20;
                let maskY = e.pageY - this.mask.offsetWidth / 2 - 10;

                // 边界处理
                if (maskX <= 0) {
                    maskX = 25
                }
                if (maskY <= 0) {
                    maskY = 10
                }

                if (maskX >= this.small.offsetWidth - this.mask.offsetWidth) {
                    maskX = this.small.offsetWidth - this.mask.offsetWidth + 25
                }

                if (maskY >= this.small.offsetWidth - this.mask.offsetWidth) {
                    maskY = this.small.offsetWidth - this.mask.offsetWidth + 10
                }
                this.mask.style.left = maskX + 'px'
                this.mask.style.top = maskY + 'px'
                    //maskX  maskY
                    // 移动的时候  
                    // 大图的移动距离 =  遮罩移动的距离 *   大图/小图

                let bigImgX = maskX * bigImgWidth / this.small.offsetWidth
                let bigImgY = maskY * bigImgWidth / this.small.offsetWidth
                this.bigImg.style.left = -bigImgX + 'px'
                this.bigImg.style.top = -bigImgY + 'px'
            }

        }
        this.small.onmouseleave = () => {
            this.mask.style.display = 'none'
            this.big.style.display = 'none'
        }
    }
}