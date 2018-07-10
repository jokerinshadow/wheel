


//屏幕适配

document.documentElement.fontSize = document.documentElement.clientWidth/3.75+'px';
window.onresize=()=>{
    document.documentElement.fontSize = document.documentElement.clientWidth/3.75+'px';
}