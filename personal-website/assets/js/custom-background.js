// 自定义背景效果 - 让主题的夜间效果全天显示
// 覆盖主题原有的时间限制，让 .grain 纹理和 #dwclock 时钟全天可见

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取元素的辅助函数
    function getElement(id) {
        return document.getElementById(id);
    }
    
    function getElements(selector) {
        return document.querySelectorAll(selector);
    }
    
    // 强制显示夜间元素（grain纹理和时钟）
    function forceShowNightElements() {
        const elements = getElements('.grain, #dwclock');
        elements.forEach(element => {
            if (element) {
                element.removeAttribute('hidden');
                element.style.display = '';
            }
        });
    }
    
    // 初始化时钟功能
    function initializeClock() {
        const date = new Date();
        const hour = date.getHours();
        
        function updateClock() {
            const currentDate = new Date();
            const minutes = currentDate.getMinutes();
            const seconds = currentDate.getSeconds();
            const currentHour = currentDate.getHours();
            
            const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6);
            const hourDegrees = ((currentHour / 12) * 360) + ((minutes/60)*30);
            
            const transforms = ['transform', 'webkitTransform', 'mozTransform', 'msTransform', 'oTransform'];
            const hands = {
                '#min': minutesDegrees,
                '#hour': hourDegrees
            };
            
            Object.entries(hands).forEach(([selector, degrees]) => {
                const hand = document.querySelector(selector);
                if (hand) {
                    transforms.forEach(transform => {
                        hand.style[transform] = `rotate(${degrees}deg)`;
                    });
                }
            });
        }
        
        // 立即更新一次时钟
        updateClock();
        
        // 每10秒更新一次时钟
        setInterval(updateClock, 10000);
    }
    
    // 强制显示所有夜间效果
    forceShowNightElements();
    
    // 初始化时钟
    initializeClock();
    
    // 监听可能的动态变化，确保元素始终可见
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                const target = mutation.target;
                if (target.classList.contains('grain') || target.id === 'dwclock') {
                    target.removeAttribute('hidden');
                }
            }
        });
    });
    
    // 观察grain和dwclock元素的属性变化
    const elementsToObserve = getElements('.grain, #dwclock');
    elementsToObserve.forEach(element => {
        if (element) {
            observer.observe(element, {
                attributes: true,
                attributeFilter: ['hidden', 'style']
            });
        }
    });
    
    // 定期检查并确保元素可见（备用方案）
    setInterval(forceShowNightElements, 5000);
});

// 如果页面已经加载完成，立即执行
if (document.readyState === 'loading') {
    // 文档仍在加载中，等待DOMContentLoaded事件
} else {
    // 文档已经加载完成，立即执行
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);
}