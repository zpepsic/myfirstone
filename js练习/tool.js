function getStyle(obj, name) {
    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];

    } else {
        return obj.currentStyle[name];

    }
}
/*
        参数：
        obj:要执行的动画对象
        attr:要执行动画的样式
        target：执行动画的目标位置
        speed：移动的速度
        callback:动画执行完毕执行
        */ 
    
        function move(obj,attr,target,speed ,callback){
            clearInterval(obj.timer);
            var current = parseInt(getStyle(obj, attr));

            if(current > target){
                speed = -speed;
            }
            
            obj.timer = setInterval(function () {
                var oldValue = parseInt(getStyle(obj, attr));

                var newValue = oldValue + speed;

                if ((speed < 0 && newValue < target) || (speed > 0 && newValue>target)) {
                    newValue = target;
                }
                // attr是变量，用中括号,中括号可以传变量
                obj.style[attr] = newValue + "px";

                // 
                if (newValue == target) {
                    clearInterval(obj.timer);
                    callback();
                }
                // 动画执行完毕
               
            }, 30);

        }