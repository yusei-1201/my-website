const table = document.querySelector('#table-content');
const btn = document.querySelector('#btn');
const topBtn = document.querySelector('#top-btn');

console.log(topBtn);

//トップにスクロール
topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

//監視対象
const tennis = (entries) => {
    const keyframe = {
        opacity: [0, 1],
        translate: ['200px 0', 0],
    };
    entries[0].target.animate(keyframe, 600);
};

//監視ロボット設定
const tennisObserver = new IntersectionObserver(tennis);

//tennisを監視するように指示
tennisObserver.observe(document.querySelector('#softtennis'));