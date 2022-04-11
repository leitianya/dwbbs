//窗体大小改变事件
window.onresize=function(event) {
    heightCenter();
};
function heightCenter() {
    //html高度  视口高度 clientHeight
    let currentHeight = document.documentElement.clientHeight;
    // var currentWidth = document.documentElement.clientWidth;
    if(currentHeight < 360){
        document.getElementById("container-forget").style.top='0px';
    }else{
        document.getElementById("container-forget").style.top=currentHeight / 2 - 180+'px';
    }
};
document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        heightCenter();
        console.log("dom-complete");
    }
}
document.getElementById("subUser").addEventListener("mousedown", function( event ) {
    // 在被点击的div内显示当前被点击次数
    //  event.target.textContent = "click count: " + event.detail;
    event.currentTarget.style.transform="scale(0.9)";
}, false);
document.getElementById("subUser").addEventListener("mouseup", function( event ) {
    // 在被点击的div内显示当前被点击次数
    event.currentTarget.style.transform="scale(1)";
}, false);