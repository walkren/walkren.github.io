/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const util = {

    random(min = 0, max) {
        return min + (max - min) * Math.random();
    },
    extend(origin, ...arg) {
        arg.forEach(item => {
            for (let key in item) {
                origin[key] = item[key];
            }
        });
        return origin;
    },
    isPhone() {
        if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {
            return true;
        }
        return false;
    },

    transTime(time, defult) {
        return +time / 1000 * 60 | 0 || defult;
    },

    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    degrad(angle) {
        return util.circle / 360 * angle;
    },

    raddeg(angle) {
        return angle / util.circle * 360;
    },

    rgba(r, g, b, a) {
        return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    },

    randomrgba(rmin, rmax, gmin, gmax, bmin, bmax, a) {
        let r = Math.round(util.random(rmin, rmax));
        let g = Math.round(util.random(gmin, gmax));
        let b = Math.round(util.random(bmin, bmax));
        let limit = 5;
        if (Math.abs(r - g) <= limit && Math.abs(g - b) <= limit && Math.abs(b - r) <= limit) {
            return util.rgba(rmin, rmax, gmin, gmax, bmin, bmax, a);
        } else {
            return util.rgba(r, g, b, a);
        }
    }
};

util.circle = 2 * Math.PI;

/* harmony default export */ __webpack_exports__["a"] = (util);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize__ = __webpack_require__(8);



const height = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isPhone() ? document.body.clientHeight : document.body.clientHeight;
const width = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isPhone() ? document.body.clientWidth : height * 6 / 10;

const config = function () {

    return {
        width: width,
        height: height,
        canvases: ['fall', 'bg', 'firework', 'garden'],
        // 飘落微粒产生间隔
        snowInterval: 60,
        heartInterval: 15,
        // 飘落微粒属性
        snow: {
            x: undefined,
            y: undefined,
            minSize: 5,
            maxSize: 10,
            size: undefined,
            speed: 0.5,
            opacity: 0.8
        },
        heart: {
            x: undefined,
            y: undefined,
            minSize: 15,
            maxSize: 20,
            size: undefined,
            speed: 1
        },
        // 飘落的类型('snow', 'heart', 'mix')
        fallType: 'snow',

        // 阶段一

        // 阶段二
        sunset: 4000, // 天黑时间

        // 阶段三
        fireworkInterval: [60, 240], // 烟花产生间隔 //---不建议改动
        //烟花的属性
        fireworks: {
            x: undefined,
            y: height,
            xEnd: undefined,
            yEnd: undefined,
            size: 2,
            radius: [1, 2], //烟花半径
            velocity: 3, //速率
            opacity: 0.8,
            count: [150, 250], //炸裂后粒子数
            wait: undefined, //消失后 => 炸裂  等待时间
            color: undefined //烟花颜色
        },
        fireWords: '圣诞快乐|新年快乐|永远美丽', // '|' 为分隔符
        // hue:210 lightness 0
        skyColor: 'hsla({hue}, 60%, {lightness}%, 0.2)',
        fireOpt: {
            wordInterval: 4500 //每段话出现的间隔时间
        },
        //烟花字的参数
        shape: {
            gap: 3 //粒子的间隔数 gap越大 粒子数越少
        },
        word: {
            size: 70,
            y: height / 4
        },

        //阶段四
        titleWords: '祝愿|最漂亮|最可爱的|小乖乖|开心每一天', // '|' 为分隔符
        wishOpt: {
            gap: 4,
            size: 70, //最后字的大小
            pSize: 8,
            delay: 4000, //
            distance: 120, //行间距
            e: 5000 //速率
        },
        wishShowTime: 600,
        postcard: '<h1>亲爱的小乖乖：</h1>\n' + '            <p>当你看到这里的时候，应该是我已经表白成功了吧，终于把你骗到手了，哈哈哈～ 从这里开始记录下我们在一起的每一分每一秒吧。不知道你会不会喜欢这样的表白方式，但还是希望能够给你留下一个深刻而美好的记忆。</p>\n' + '            <p>从我们相识到现在，可能时间并不算长，现在表白或许有一点早，但是我更不想错过你，所以我想坚定的告诉你：<span style="font-weight: bold">我爱你</span> 。</p>\n' + '            <p>每次和你一起散步的时候，我都会幻想以后可以光明正大的拥抱你牵你的手，毫不掩饰的说喜欢你爱你。' + '            <p>其实每次见面我都是即期待又紧张，期待能够看到你，但又紧张在你面前表现得不是那么好。回想每次见面我好像都是话比较少，表现得也没有很好，所以也很担心会不会在你心里留下不好的印象。</p>\n' + '虽然我们见面的次数并不算多，但是来日方长，未来会有更多的时间在一起。和你见面的每一个细节，你的每一个笑容，都让我历历在目，深深的印在我的脑海里，每当想起你的时候都会让我的嘴角不自觉的上扬。</p>\n' + '            <p>如果你问我喜欢你什么，我想应该是喜欢你爱笑的样子，喜欢你美丽的颜值和身材，但最重要的是和你在一起的感觉，不知道怎么形容，就感觉和你在一起就会有一种难以言表的开心。' + '每个人都将会老去，脆弱的外表终会被时间留下痕迹，但是唯一不变的是我对你真心，从见你的那一刻开始，就希望能够和你白头偕老，共度余生。</p>\n' + '            <p>我算是一个比较孤独的人，有时候会很害怕和人相处，也不太会处理亲密关系，甚至共情能力比常人差一些，但是对于你，我却非常想和你待在一起，也会很憧憬我们一起走向婚姻的殿堂。</p>\n' + '            <p>对于未来，可能我看起来不太喜欢说话，或者有点呆，但是我也并没有表面上看起来那么脆弱，以后我会尽我所能爱护你，照顾你，不让你受到伤害。为你遮风挡雨，从始至终都守护在你身边。' + '或许以后也会遇到困难，失意或者诱惑，但我依然会坚定的选择和你在一起。为了我们美好的未来，我也会更加努力，让你成为最幸福的女孩子。</p>\n' + '            <p>最后，用柏拉图的一句话结尾，你我本是一体，上帝将我们分开，在人间相遇。能够遇到你，是我一生中最大的幸运，相信我们的未来可期！</p>\n' + '            '

    };
}();

//ms => 帧

config.sunset = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transTime(config.sunset, 600);

config.fireOpt.wordInterval = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transTime(config.fireOpt.wordInterval, 180);
config.fireOpt.denseTime = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transTime(config.fireOpt.denseTime, 600);

config.wishOpt.delay = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transTime(config.wishOpt.delay, 240);
config.wishOpt.e = __WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].transTime(config.wishOpt.e, 240);

Object(__WEBPACK_IMPORTED_MODULE_1__resize__["a" /* default */])(config.width, config.height, config.canvases);

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__particle__ = __webpack_require__(3);



// 继承微粒类


class Snowflake extends __WEBPACK_IMPORTED_MODULE_2__particle__["a" /* default */] {
    constructor({ x, y, minSize = 5, maxSize = 7.5, size, speed = 0.5, opacity = 0.8 } = {}) {
        super({ x, y, minSize, maxSize, size });
        this.opacity = __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(opacity, 1);
        this.speed = speed * (1 + Math.random());
        this.direction = Math.random() > 0.5 ? 0.5 : -0.5;
    }

    fall() {
        this.x += Math.random() * this.direction;
        this.y += this.speed;
    }

    render(ctx) {
        this.fall();

        if (this.outOfBounds()) return false;

        this.g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        this.g.addColorStop(0, `hsla(255,255%,255%,${this.opacity})`);
        this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
        ctx.beginPath();
        ctx.fillStyle = this.g;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI, false);
        ctx.fill();
        return true;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Snowflake);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);



//微粒类
class Particle {
    constructor({ x, y, minSize = 5, maxSize = 7.5, size, opacity = 1 } = {}) {
        this.size = size ? size : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(minSize, maxSize);
        this.x = x ? x : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(0, __WEBPACK_IMPORTED_MODULE_0__config_config_js__["a" /* default */].width - this.size);
        this.y = y ? y : -this.size;
        this.opacity = opacity;
    }

    outOfBounds(height = __WEBPACK_IMPORTED_MODULE_0__config_config_js__["a" /* default */].height, width = __WEBPACK_IMPORTED_MODULE_0__config_config_js__["a" /* default */].width) {
        if (this.x >= -this.size && this.x <= width && this.y <= height && this.y >= -this.size) return false;

        return true;
    }

}

/* harmony default export */ __webpack_exports__["a"] = (Particle);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__snowflake__ = __webpack_require__(2);
const random = Math.random;


class Heart extends __WEBPACK_IMPORTED_MODULE_0__snowflake__["a" /* default */] {
    constructor({ x = 0, y = 0, minSize = 15, maxSize = 20, size, speed = 1 } = {}) {
        super({ minSize, maxSize, x, y, size, speed });
        this.color = `hsla(${random() * 360}, 90%, 65%, 1)`;
    }

    render(ctx) {
        this.fall();
        if (this.outOfBounds()) return false;

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
        ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, this.y + 0.6 * this.size, this.x + 0.5 * this.size, this.y + 0.9 * this.size);
        ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * this.size, this.x + 0.9 * this.size, this.y, this.x + 0.5 * this.size, this.y + 0.3 * this.size);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        return true;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Heart);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fall_particle__ = __webpack_require__(3);


class FireworkParticle extends __WEBPACK_IMPORTED_MODULE_0__fall_particle__["a" /* default */] {
    constructor({ x, y, size = 1.5, radius }) {
        super({ x, y, size });
        this.rate = Math.random();
        this.angle = Math.PI * 2 * Math.random();

        // radius = (1 - Math.pow(Math.random(), 6)) * radius;

        this.vx = radius * Math.cos(this.angle) * this.rate;
        this.vy = radius * Math.sin(this.angle) * this.rate;
    }

    go() {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += 0.02;
        this.vx *= 0.98;
        this.vy *= 0.98;
    }

    render(ctx) {
        this.go();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (FireworkParticle);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    rotate(theta) {
        let x = this.x;
        let y = this.y;
        this.x = Math.cos(theta) * x - Math.sin(theta) * y;
        this.y = Math.sin(theta) * x + Math.cos(theta) * y;
        return this;
    }
    mult(f) {
        this.x *= f;
        this.y *= f;
        return this;
    }
    clone() {
        return new Vector(this.x, this.y);
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Vector);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_images__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imgLoader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fall_heart__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__other_shape__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TitleParticle__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__other_typing__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__garden_garden__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_cikonss_css__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__css_cikonss_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__css_cikonss_css__);
// 基础配置



// 读取图片



// 飘落装饰



//烟花



//文字效果


//打字机效果






// require('font-awesome-webpack');

(function () {
    class MainStart {
        constructor() {
            this.start();
        }

        start() {
            const start = document.querySelector('#start');
            const obj = this;
            start.onclick = function () {
                obj.init();

                document.querySelector('article').style.display = 'block';
                document.querySelector('.header .mask').remove();
                document.querySelector('#start').style.opacity = 0;
                document.querySelector('.header h1').remove();
                document.querySelector('.header h2').remove();
                setTimeout(function () {
                    document.querySelector('.mask').remove();
                    document.querySelector('#start').remove();
                    document.querySelector('#music').style.display = 'block';
                }, 1000);
            };
        }

        init() {
            this.initController();
            this.initMusic();
            this.initProperty();

            //加载图片
            __WEBPACK_IMPORTED_MODULE_3__imgLoader__["a" /* default */].load(__WEBPACK_IMPORTED_MODULE_2__config_images__["a" /* default */]).then(imgs => {
                //bg
                this.imgs = {};
                imgs.forEach(item => {
                    this.imgs[item.key] = item.img;
                });
                //画背景图
                // this.drawBg(this.bgCtx, this.imgs.bg);
                document.querySelector('#bg').style.background = '#ffc0cb';

                //文字形状maker
                this.shapeMaker = new __WEBPACK_IMPORTED_MODULE_7__other_shape__["a" /* default */](this.width, this.height);

                const obj = this;
                setTimeout(function () {
                    // 循环体
                    obj.loop();
                }, 2000);
            }).catch(err => {
                console.log(err);
            });
        }

        initController() {
            const next = document.querySelector('#next');
            const obj = this;
            next.onclick = function () {
                obj.nextStage();
            };
        }

        initMusic() {
            const audio = new Audio();
            audio.src = __webpack_require__(25);
            audio.loop = true;
            audio.play();
            audio.volume = 0.5;
            const music = document.querySelector('#music');

            document.addEventListener("WeixinJSBridgeReady", function () {
                audio.play();
            }, false);

            music.onclick = function () {
                const cla = this.getAttribute('class');
                if (cla == 'on') {
                    this.setAttribute('class', 'off');
                    audio.pause();
                } else {
                    this.setAttribute('class', 'on');
                    audio.play();
                }
            };
        }

        initProperty() {
            //画布宽高
            this.height = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height;
            this.width = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width;

            //获取画笔
            __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].canvases.forEach(canvasId => {
                this[canvasId + 'Ctx'] = document.querySelector(`#${canvasId}`).getContext('2d');
            });

            /*********通用*********/
            // 飘落微粒
            this.fallDots = [];
            // 飘落的类型('snow', 'heart', 'mix')
            this.fallType = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fallType,
            //动画的时间
            this.time = 0;
            //当前执行的状态
            this.status = 1;

            /*********阶段1（对话）*********/
            // 爱心
            this.angle = 10;
            this.heart = [];
            this.garden = new __WEBPACK_IMPORTED_MODULE_10__garden_garden__["a" /* default */](this.gardenCtx);
            this.offsetX = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width / 2;
            this.offsetY = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height / 2 - 55;
            // 计时器
            this.startTime = new Date();
            this.startTime.setFullYear(2022, 10, 6);
            this.startTime.setHours(18);
            this.startTime.setMinutes(0);
            this.startTime.setSeconds(0);
            this.startTime.setMilliseconds(0);

            /*********阶段2（天黑）*********/
            this.sunsetTime = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].sunset;

            /*********阶段3（烟花）*********/
            //天空颜色
            this.skyColor = {
                hue: 210,
                lightness: 0
            };
            //烟花的数组
            this.fireworks = [];
            this.fireworkTime = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(...__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireworkInterval) | 0;

            this.fireWords = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireWords.split('|');
            this.fireOpt = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].extend({
                end: false,
                time: 600,
                showWords: false
            }, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireOpt);

            /*********阶段4（wish）*********/
            this.wishOpt = {
                current: -1,
                start: false,
                ctx: [],
                end: false
            };
            //大标题
            this.titleWords = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].titleWords.split('|');
            //组成字的微粒数组
            this.titleDots = [];

            /*********阶段5（对话）*********/
            // 话的文字
            // this.postcard = config.postcard.shift();
        }

        nextStage() {
            switch (this.status) {
                case 1:
                case 2:
                    ++this.status;
                    break;
                case 3:
                    this.sunsetTime = null;
                    // 这里跳过烟花阶段，直接到文字
                    // ++this.status;
                    this.status = 7;
                    break;
                case 4:
                    this.fireOpt = null;
                    this.fireWords = null;
                    __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].word.y = 0;
                    __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].shape.gap = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.gap;
                    __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].word.size = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.size;
                    ++this.status;
                    break;
                case 5:
                    this.wishOpt = null;
                    this.titleWords = null;
                    this.titleDots = null;
                    ++this.status;
                    break;
                case 6:
                    ++this.status;
                    break;
                case 7:
                    window.location.reload();
                    break;
            }
        }

        //动画效果
        loop() {
            //下一帧继续调用loop;
            let res = requestAnimationFrame(this.loop.bind(this));

            // 动画的时间
            ++this.time >= 60000 ? 0 : this.time;

            // 渲染飘落装饰
            this.renderFall();

            switch (this.status) {
                case 1:
                    // 爱心阶段
                    this.drawHeart();
                    break;
                case 2:
                    // 时间展示阶段
                    this.showMessages();
                    break;
                case 3:
                    //天黑过程
                    this.sunset();
                    break;
                case 4:
                    // 放烟花
                    this.controlFire();
                    this.renderFireworks();
                    break;
                case 5:
                    // wish
                    this.renderWish();
                    this.renderFireworks();
                    break;
                case 6:
                    this.end();
                    this.renderFireworks();
                    break;
                case 7:
                    // 明信片
                    this.fallType = 'mix';
                    this.showPostcard();
                    cancelAnimationFrame(res);
                    break;
            }

            // console.timeEnd('label');
        }

        //飘落的装饰
        renderFall() {
            this.fallCtx.clearRect(0, 0, this.width, this.height);
            // 控制飘落装饰类型
            switch (this.fallType) {
                case 'snow':
                    this.time % __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].snowInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].snow));
                    break;
                case 'heart':
                    this.time % __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].heartInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_5__fall_heart__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].heart));
                    break;
                case 'mix':

                    this.time % __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].snowInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_4__fall_snowflake__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].snow));
                    this.time % __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].heartInterval == 0 && this.fallDots.push(new __WEBPACK_IMPORTED_MODULE_5__fall_heart__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].heart));
                    break;
            }
            // 雪花飘落
            for (let i = this.fallDots.length - 1; i >= 0; --i) {
                !this.fallDots[i].render(this.fallCtx) && this.fallDots.splice(i, 1);
            }
        }

        // 天黑
        sunset() {
            if (--this.sunsetTime <= 0) {
                return this.nextStage();
            }
            // this.fireworkCtx.fillStyle = `hsla(210, 60%, 5%, ${0.01 * (20 - 20 * (this.sunsetTime / config.sunset))})`;
            this.fireworkCtx.fillStyle = `rgba(255,255,238, ${0.01 * (20 - 20 * (this.sunsetTime / __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].sunset))})`;
            this.fireworkCtx.fillRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height);
        }

        //控制烟花的逻辑
        controlFire() {
            --this.fireOpt.time;
            if (this.fireOpt.time == 0) {
                this.createDenseFire();
            }
            if (this.fireOpt.time <= -180) {
                !this.fireOpt.end && this.showFireworkWords();
            }
            if (this.fireOpt.time == -60) {
                this.fireOpt.end && this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */]({
                    x: __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width / 2,
                    yEnd: __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height / 8,
                    count: 600,
                    radius: 5
                }));
            }
            if (this.fireOpt.time == -360) {
                this.fireOpt.end && this.nextStage();
            }
        }

        //放文字烟花
        showFireworkWords() {
            if (this.fireWords.length == 0) {
                this.fireOpt.end = true;
                this.fireOpt.time = 540;
                return;
            }
            if (--this.fireOpt.wordInterval <= 0) {
                // 第二个参数控制是否产生烟花
                this.getDotsPosition(this.fireWords.shift(), true);
                this.fireOpt.wordInterval = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireOpt.wordInterval;
            }
        }

        //创建密集的烟花
        createDenseFire() {
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireworks));
                }, i * 100);
            }
        }

        //渲染烟花
        renderFireworks() {
            this.fireworkCtx.fillStyle = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].skyColor.replace('{lightness}', 5 + this.skyColor.lightness * 15).replace('{hue}', this.skyColor.hue);
            this.fireworkCtx.fillRect(0, 0, this.width, this.height);
            //随机创建烟花
            this.createFireworks();

            this.skyColor = {
                lightness: 0,
                hue: 210
            };
            for (let i = this.fireworks.length - 1; i >= 0; --i) {
                this.skyColor = this.skyColor.lightness >= this.fireworks[i].getSkyColor().lightness ? this.skyColor : this.fireworks[i].getSkyColor();
                !this.fireworks[i].render(this.fireworkCtx) && this.fireworks.splice(i, 1);
            }
        }

        // 随机创建烟花
        createFireworks() {
            if (--this.fireworkTime <= 0) {
                this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireworks));
                this.fireworkTime = __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(...__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].fireworkInterval) | 0;
            }
        }

        // 渲染最后 文字的动作
        renderWish() {
            this.createCanvas();
            this.createWishDots();
            if (!this.wishOpt) return;
            const ctx = this.wishOpt.ctx[this.wishOpt.current];
            ctx.clearRect(0, 0, this.width, this.height);
            for (let i in this.titleDots) {
                this.titleDots[i].render(ctx);
            }
            if (--this.wishOpt.time <= 0) {
                this.wishOpt.start = false;
            }
        }

        createCanvas() {
            if (this.wishOpt.start) return;
            ++this.wishOpt.current;
            const canvas = document.createElement('canvas');
            canvas.setAttribute('class', 'title');
            canvas.id = this.wishOpt.current;
            canvas.setAttribute('width', __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width);
            canvas.setAttribute('height', __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height);
            document.body.appendChild(canvas);
            this.wishOpt.ctx.push(canvas.getContext('2d'));
        }

        createWishDots() {
            if (this.wishOpt.start) return;
            if (this.titleWords.length == 0) {
                return this.nextStage();
            }
            this.titleDots = [];
            this.wishOpt.start = true;
            this.wishOpt.time = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.e + __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.delay;
            __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].word.y += __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.distance;

            const dots = this.getDotsPosition(this.titleWords.shift());
            dots.forEach(dot => {
                const option = {
                    x: dot.x,
                    y: dot.y,
                    xStart: __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(0, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width),
                    yStart: __WEBPACK_IMPORTED_MODULE_1__config_util__["a" /* default */].random(-100, 0),
                    size: __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.pSize,
                    e: __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishOpt.e
                };
                this.titleDots.push(new __WEBPACK_IMPORTED_MODULE_8__TitleParticle__["a" /* default */](option));
            });
            this.fallType = 'mix';
        }

        showPostcard() {
            document.querySelector('#postcard').style.display = 'block';
            setTimeout(function () {
                const source = document.querySelector('#source');
                source.innerHTML = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].postcard + unescape('%3Ch2%3E%u2014%u2014%u848B%u7EF4%u946B%3C/h2%3E');
                const output = document.querySelector('#output');
                let typing = new __WEBPACK_IMPORTED_MODULE_9__other_typing__["a" /* default */]({
                    source,
                    output
                });
                typing.start();
            }, 1000);
        }

        end() {
            this.fallType = 'mix';
            this.time % 600 == 0 && this.createDenseFire();
            if (__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].wishShowTime-- < 0) {
                this.nextStage();
            }
        }

        //获取所有的dots集合。
        getDotsPosition(wordsArr, showFireworks) {
            const words = typeof wordsArr == 'string' ? wordsArr.split('') : wordsArr.shift().split('');
            const length = words.length;
            const size = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].word.size;
            const y = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].word.y;
            const dotsArr = [];

            words.forEach((item, index) => {
                let x;
                //文字居中
                length % 2 == 0 ? x = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width / 2 + (index - length / 2) * size + 1 / 2 * size : x = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width / 2 + (index - Math.floor(length / 2)) * size;
                this.shapeMaker.write({ txt: item, x, y, size });
                const dots = this.shapeMaker.getDots(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].shape);
                dotsArr.push(...dots);

                const prtOption = {};
                showFireworks && this.fireworks.push(new __WEBPACK_IMPORTED_MODULE_6__fireworks_fireworks__["a" /* default */]({ wait: 30, radius: 2, x, yEnd: y, dots, prtOption }));
            });

            return dotsArr;
        }

        //画背景
        drawBg(ctx, img) {
            const { width, height } = img;
            const ratio = width / height,
                  wRa = this.width / this.height;

            let sx, sy, sw, sh;
            if (ratio >= wRa) {
                // 背景图宽了 裁剪宽度
                sy = 0, sh = height;
                sx = (ratio - wRa) * width / 2;
                sw = height * wRa;
            } else if (ratio < wRa) {
                // 背景图窄了
                sx = 0, sw = width;
                sy = (height - width / wRa) / 2;
                sh = width / wRa;
            }

            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, this.width, this.height);
            // ctx.drawImage(img, 0, 0, this.width, this.height);
            // ctx.fillStyle = 'ffe';
            // ctx.strokeStyle = 'ffe';
            // ctx.fillRect(0, 0, config.width, config.height);
        }

        showTime() {
            let current = Date();
            let seconds = (Date.parse(current) - Date.parse(this.startTime)) / 1000;
            let days = Math.floor(seconds / (3600 * 24));
            seconds = seconds % (3600 * 24);
            let hours = Math.floor(seconds / 3600);
            if (hours < 10) {
                hours = "0" + hours;
            }
            seconds = seconds % 3600;
            let minutes = Math.floor(seconds / 60);
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            seconds = seconds % 60;
            if (seconds < 10) {
                seconds = "0" + seconds;
            }
            let result = "<span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 时 <span class=\"digit\">" + minutes + "</span> 分 <span class=\"digit\">" + seconds + "</span> 秒";
            const elapseClock = document.querySelector('#elapseClock');
            elapseClock.innerHTML = result;
        }

        getHeartPoint(angle) {
            let t = angle / Math.PI;
            let x = 11 * (16 * Math.pow(Math.sin(t), 3));
            let y = -16 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
            return [this.offsetX + x, this.offsetY + y];
        }

        drawHeart() {
            if (this.drawFinish) {
                this.garden.render();
                return;
            }
            this.drawFinish = true;
            // console.log(this.offsetX + ", " + this.angle + ", " + this.offsetY);

            const ctx = this.gardenCtx;
            ctx.clearRect(0, 0, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height);
            const obj = this;

            let animationTimer = setInterval(function () {
                let bloom = obj.getHeartPoint(obj.angle);
                // console.log(bloom[0] + ", " + bloom[1] + ", " + obj.angle)
                let draw = true;
                for (let i = 0; i < obj.heart.length; i++) {
                    let p = obj.heart[i];
                    // console.log(p[0] +", " + p[1] + "-" + bloom[0] + ", " + bloom[1])
                    let distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
                    if (distance < obj.garden.options.bloomRadius.max * 1.3) {
                        draw = false;
                        break;
                    }
                }
                if (draw) {
                    obj.heart.push(bloom);
                    obj.garden.createRandomBloom(bloom[0], bloom[1]);
                }
                if (obj.angle >= 30) {
                    obj.nextStage();
                    // console.log("draw");
                    clearInterval(animationTimer);
                } else {
                    obj.angle += 0.2;
                }
            }, 50);
        }

        showMessages() {
            let center = this.getHeartPoint(20);
            let height = center[1] + 10;

            let signature = unescape('%u848B%u7EF4%u946B%20love%20%u5F6D%u8C22%u73B2');
            document.querySelector('#loveText .signature').innerHTML = signature;
            document.querySelector('#loveText').style.padding = height + 'px 0 0 0';

            document.querySelector('#loveText').style.display = 'block';
            document.querySelector('#next').style.display = 'block';
            this.showTime();
        }
    }

    new MainStart();
})();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util__ = __webpack_require__(0);


function resize(width, height, canvases) {
	if (__WEBPACK_IMPORTED_MODULE_0__util__["a" /* default */].isPhone) {
		const body = document.querySelectorAll('body')[0];
		body.style.width = width + 'px';
		body.style.height = height + 'px';
	}

	canvases.forEach(canvasId => {
		const el = document.querySelector(`#${canvasId}`);
		el.setAttribute('width', width);
		el.setAttribute('height', height);
	});
}

/* harmony default export */ __webpack_exports__["a"] = (resize);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const images = {
	// bg:require('../img/bg.jpg'),
	musicon: __webpack_require__(10),
	musicoff: __webpack_require__(11)
};

/* harmony default export */ __webpack_exports__["a"] = (images);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musicon.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/musicoff.png";

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 读取图片
class ImgLoader {
    // 读取单个图片
    static loadImg(url, key) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = function () {
                resolve({ key, img });
            };
            img.onerror = reject;
            img.src = url;
        });
    }

    // 读取图片数组
    static load(imgs) {
        const promises = [];

        for (let key in imgs) {
            promises.push(this.loadImg(imgs[key], key));
        }

        return Promise.all(promises);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (ImgLoader);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_util_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fireworkParticle__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fireworkWords__ = __webpack_require__(14);






const GRAVITY = 0.002;

class Firework {
    constructor({ x, y = __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height, xEnd, yEnd, size = 2, radius = [1.2, 1.2], velocity = 3, opacity = 0.8, count = [200, 250], wait, color, dots, prtOption = {} } = {}) {
        //自身属性
        this.x = x ? x : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width / 8, __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].width * 7 / 8);
        this.y = y;
        this.xEnd = xEnd ? xEnd : this.x;
        this.yEnd = yEnd ? yEnd : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(__WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height / 8, 3 * __WEBPACK_IMPORTED_MODULE_0__config_config__["a" /* default */].height / 8);

        this.size = size;
        this.opacity = opacity;
        this.velocity = -Math.abs(velocity);
        this.wait = wait ? wait : __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(30, 60);
        this.radius = __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(...radius);
        this.GRAVITY = GRAVITY;

        this.hue = 360 * Math.random() | 0;
        this.color = color ? color : `hsla(${this.hue},80%,60%,1)`;
        this.status = 1;
        if (!dots) {
            this.count = __WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].random(...count) | 0;
            this.particles = [];
            this.createParticles();
            this.type = 'normal';
        } else {
            this.type = 'words';
            const option = { xStart: this.xEnd, yStart: this.yEnd };
            this.particles = dots.map(dot => new __WEBPACK_IMPORTED_MODULE_3__fireworkWords__["a" /* default */](__WEBPACK_IMPORTED_MODULE_1__config_util_js__["a" /* default */].extend({}, dot, option, prtOption)));
        }
    }

    createParticles() {
        for (let i = 0; i < this.count; ++i) {
            this.particles.push(new __WEBPACK_IMPORTED_MODULE_2__fireworkParticle__["a" /* default */]({ x: this.xEnd, y: this.yEnd, radius: this.radius }));
        }
    }

    getSkyColor() {
        const skyColor = {
            lightness: this.status == 3 ? this.opacity : 0,
            hue: this.hue
        };
        return skyColor;
    }

    render(ctx) {
        switch (this.status) {
            case 1:
                ctx.save();
                ctx.beginPath();
                ctx.globalCompositeOperation = 'lighter';
                ctx.globalAlpha = this.opacity;
                ctx.translate(this.x, this.y);
                ctx.scale(0.8, 2.3);
                ctx.translate(-this.x, -this.y);
                ctx.fillStyle = this.color;
                ctx.arc(this.x + Math.sin(Math.PI * 2 * Math.random()) / 1.2, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fill();
                ctx.restore();

                this.rise();
                return true;
                break;

            case 2:

                if (--this.wait <= 0) {

                    this.opacity = 1;
                    this.status = 3;
                }
                return true;
                break;

            case 3:
                ctx.save();
                ctx.globalCompositeOperation = 'lighter';
                ctx.globalAlpha = this.opacity;
                ctx.fillStyle = this.color;
                for (let i = 0; i < this.particles.length; ++i) {
                    this.particles[i].render(ctx);
                }
                ctx.restore();

                this.opacity -= 0.01;
                return this.opacity > 0;
                break;
        }
    }

    rise() {
        this.y += this.velocity * 1;
        this.velocity += this.GRAVITY;
        if (this.y - this.yEnd <= 50) {
            this.opacity = (this.y - this.yEnd) / 50;
        }
        if (this.y <= this.yEnd) {
            this.status = 2;
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Firework);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__ = __webpack_require__(5);


class FireworkWords extends __WEBPACK_IMPORTED_MODULE_0__fireworkParticle__["a" /* default */] {
    constructor({ x, y, size = 1, circle = 1, xStart, yStart }) {
        super({ x, y, size, circle });

        const e = 80;
        this.dx = (x - xStart) / e;
        this.dy = (y - yStart) / e;
        this.xStart = xStart;
        this.yStart = yStart;
    }

    go() {
        this.xStart += this.dx;
        this.yStart += this.dy;
    }

    render(ctx) {
        this.go();
        ctx.beginPath();
        ctx.arc(this.xStart, this.yStart, this.size, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

/* harmony default export */ __webpack_exports__["a"] = (FireworkWords);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Shape {
    constructor(width = 375, height = 667) {
        // 缓存画布
        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext('2d');

        this.ctx.fillStyle = 'red';
        this.ctx.textBaseline = 'middle';
        this.ctx.textAlign = 'center';
    }

    //写入想要渲染的字
    write({ txt, size = 50, fontFamily = 'Arial', x = this.canvas.width / 2, y = 100 } = {}) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = `bold ${size}px ${fontFamily}`;
        this.ctx.fillText(txt, x, y);
        //记录的当前字的坐标
        this.x = x;
        this.y = y;
        this.size = size;
        this.count = txt.length;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    //获取字的坐标点集合。
    getDots({ mini = 1, gap = 5 } = {}) {
        // const xs = this.x - this.count * this.size / 2 - 20;
        // const ys = this.y - this.size / 2;
        // const width = this.count * this.size + 40;
        // const height = this.size
        const xs = 0;
        const ys = this.y - this.size / 2;
        const width = this.canvas.width;
        const height = this.size;
        const data = this.ctx.getImageData(xs, ys, width, height).data;
        let dots = [],
            x = xs,
            y = ys,
            count = 0;
        for (let i = 0, len = data.length; i <= len; i += 4 * gap) {
            if (data[i + 3] > 0) {
                ++count % mini == 0 && dots.push({ x, y });
            }
            x += gap;
            if (x >= xs + width) {
                y += gap;
                i += (gap - 1) * 4 * width - 4 * (x - xs - width);
                x = xs;
            }
        }
        return dots;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Shape);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fall_heart__ = __webpack_require__(4);


class TitleParticle extends __WEBPACK_IMPORTED_MODULE_0__fall_heart__["a" /* default */] {
    constructor({ xStart, yStart, x, y, minSize, maxSize, size, e = 240 }) {
        super({ x: xStart, y: yStart, minSize, maxSize, size });
        this.yEnd = y;
        this.xEnd = x;
        this.e = e;
        this.dx = (this.xEnd - this.x) / this.e;
        this.dy = (this.yEnd - this.y) / this.e;

        this.status = 1;
    }

    go() {
        if (--this.e < 0) {
            this.x = this.xEnd;
            this.y = this.yEnd;
            return true;
        }
        this.x += this.dx;
        this.y += this.dy;
        return false;
    }

    render(ctx) {
        this.go();

        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.moveTo(this.x + 0.5 * this.size, this.y + 0.3 * this.size);
        ctx.bezierCurveTo(this.x + 0.1 * this.size, this.y, this.x, this.y + 0.6 * this.size, this.x + 0.5 * this.size, this.y + 0.9 * this.size);
        ctx.bezierCurveTo(this.x + 1 * this.size, this.y + 0.6 * this.size, this.x + 0.9 * this.size, this.y, this.x + 0.5 * this.size, this.y + 0.3 * this.size);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        return true;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (TitleParticle);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fall_snowflake__ = __webpack_require__(2);


class Typing {
    constructor(opts) {
        this.opts = opts || {};
        this.source = opts.source;
        this.output = opts.output;
        this.delay = opts.delay || 100;
        this.chain = {
            parent: null,
            dom: this.output,
            val: []
        };
        if (!(typeof this.opts.done === 'function')) this.opts.done = function () {};
    }

    init() {
        //初始化函数
        this.chain.val = this.convert(this.source, this.chain.val);
    }

    convert(dom, arr) {
        //将dom节点的子节点转换成数组，
        let children = Array.from(dom.childNodes);
        for (let i = 0; i < children.length; i++) {
            let node = children[i];
            if (node.nodeType === 3) {
                arr = arr.concat(node.nodeValue.split('')); //将字符串转换成字符串数组，后面打印时才会一个一个的打印
            } else if (node.nodeType === 1) {
                let val = [];
                val = this.convert(node, val);
                arr.push({
                    'dom': node,
                    'val': val
                });
            }
        }
        return arr;
    }

    print(dom, val, callback) {
        setTimeout(function () {
            dom.appendChild(document.createTextNode(val));

            if (val === ',' || val === '，' || val === '。') {
                setTimeout(function () {
                    callback();
                }, 300);
            } else {
                callback();
            }
        }, this.delay);
    }

    play(ele) {
        //当打印最后一个字符时，动画完毕，执行done
        if (!ele.val.length) {
            if (ele.parent) this.play(ele.parent);else this.opts.done();
            return;
        }
        let current = ele.val.shift(); //获取第一个元素，同时删除数组中的第一个元素
        if (typeof current === 'string') {
            this.print(ele.dom, current, () => {
                this.play(ele); //继续打印下一个字符
            });
        } else {
            let dom = current.dom.cloneNode(); //克隆节点，不克隆节点的子节点，所以不用加参数true
            ele.dom.appendChild(dom);
            this.play({
                parent: ele,
                dom,
                val: current.val
            });
        }
    }

    start() {
        this.init();
        this.play(this.chain);
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Typing);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bloom__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vector__ = __webpack_require__(6);




class Garden {
    constructor(ctx) {
        this.blooms = [];
        this.ctx = ctx;
        this.options = {
            petalCount: {
                min: 8,
                max: 15
            },
            petalStretch: {
                min: 0.1,
                max: 3
            },
            growFactor: {
                min: 0.1,
                max: 1
            },
            bloomRadius: {
                min: 8,
                max: 10
            },
            density: 10,
            growSpeed: 1000 / 60,
            color: {
                rmin: 128,
                rmax: 255,
                gmin: 0,
                gmax: 128,
                bmin: 0,
                bmax: 128,
                opacity: 0.1
            },
            tanAngle: 60
        };
    }

    render() {
        for (let i = 0; i < this.blooms.length; i++) {
            this.blooms[i].draw();
        }
    }

    addBloom(b) {
        this.blooms.push(b);
    }

    removeBloom(b) {
        let bloom;
        for (let i = 0; i < this.blooms.length; i++) {
            bloom = this.blooms[i];
            if (bloom === b) {
                this.blooms.splice(i, 1);
                return this;
            }
        }
    }

    createRandomBloom(x, y) {
        this.createBloom(x, y, __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].randomInt(this.options.bloomRadius.min, this.options.bloomRadius.max), __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].randomrgba(this.options.color.rmin, this.options.color.rmax, this.options.color.gmin, this.options.color.gmax, this.options.color.bmin, this.options.color.bmax, this.options.color.opacity), __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].randomInt(this.options.petalCount.min, this.options.petalCount.max));
    }

    createBloom(x, y, r, c, pc) {
        new __WEBPACK_IMPORTED_MODULE_1__bloom__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_2__vector__["a" /* default */](x, y), r, c, pc, this);
    }

    // clear() {
    //     this.blooms = [];
    //     this.ctx.clearRect(0, 0, this.element.width, this.element.height);
    // }

}

/* harmony default export */ __webpack_exports__["a"] = (Garden);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Petal__ = __webpack_require__(20);



class Bloom {
    constructor(p, r, c, pc, garden) {
        this.p = p;
        this.r = r;
        this.c = c;
        this.pc = pc;
        this.petals = [];
        this.garden = garden;
        this.init(garden);
        this.garden.addBloom(this);
    }

    draw() {
        let p,
            isfinished = true;
        this.garden.ctx.save();
        this.garden.ctx.translate(this.p.x, this.p.y);
        for (let i = 0; i < this.petals.length; i++) {
            p = this.petals[i];
            p.render();
            isfinished *= p.isfinished;
        }
        this.garden.ctx.restore();
        if (isfinished == true) {
            this.garden.removeBloom(this);
        }
    }

    init(garden) {
        let angle = 360 / this.pc;
        let startAngle = __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].randomInt(0, 90);
        for (let i = 0; i < this.pc; i++) {
            this.petals.push(new __WEBPACK_IMPORTED_MODULE_1__Petal__["a" /* default */](__WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].random(garden.options.petalStretch.min, garden.options.petalStretch.max), __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].random(garden.options.petalStretch.min, garden.options.petalStretch.max), startAngle + i * angle, angle, __WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].random(garden.options.growFactor.min, garden.options.growFactor.max), this));
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Bloom);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(6);



class Petal {

    constructor(stretchA, stretchB, startAngle, angle, growFactor, bloom) {
        this.stretchA = stretchA;
        this.stretchB = stretchB;
        this.startAngle = startAngle;
        this.angle = angle;
        this.bloom = bloom;
        this.growFactor = growFactor;
        this.r = 1;
        this.isfinished = false;
        //this.tanAngleA = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
        //this.tanAngleB = Garden.random(-Garden.degrad(Garden.options.tanAngle), Garden.degrad(Garden.options.tanAngle));
    }

    draw() {
        let ctx = this.bloom.garden.ctx;
        let v1, v2, v3, v4;
        v1 = new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */](0, this.r).rotate(__WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].degrad(this.startAngle));
        v2 = v1.clone().rotate(__WEBPACK_IMPORTED_MODULE_0__config_util__["a" /* default */].degrad(this.angle));
        v3 = v1.clone().mult(this.stretchA); //.rotate(this.tanAngleA);
        v4 = v2.clone().mult(this.stretchB); //.rotate(this.tanAngleB);
        ctx.strokeStyle = this.bloom.c;
        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.bezierCurveTo(v3.x, v3.y, v4.x, v4.y, v2.x, v2.y);
        ctx.stroke();
    }
    render() {
        if (this.r <= this.bloom.r) {
            this.r += this.growFactor; // / 10;
            this.draw();
        } else {
            this.isfinished = true;
        }
    }
}

/* harmony default export */ __webpack_exports__["a"] = (Petal);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(22);
            var content = __webpack_require__(23);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : null;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(false);
// imports


// module
exports.push([module.i, "/*\n * Cikonss v1.0\n *\n * URL: https://github.com/zzap/Cikonss\n * License: MIT License\n *\n */\n\n/* Generals */\n.icon {\n\t/* don't change width and height in order to change the size of the icon,\n\tyou can control the size with font-size for different class(es) - below */\n\tline-height: 100%;\n\twidth: 1em;\n\theight: 1em;\n\tposition: relative;\n\tdisplay: block;\n\tfloat: left;\n}\n/* Button like icons */\n.icon-square,\n.icon-rounded {\n\tborder: .75em solid rgb(242, 242, 242); /* #f2f2f2 */\n\tbackground-color: rgb(242, 242, 242); /* #f2f2f2 */\n\tmargin: 0 .5em .5em 0;\n\t/* for browsers that supports */\n\t-webkit-box-shadow: 0 0 0 .0625em rgb(226, 226, 226); /* #e2e2e2 */\n\t-moz-box-shadow: 0 0 0 .0625em rgb(226, 226, 226); /* #e2e2e2 */\n\tbox-shadow: 0 0 0 .0625em rgb(226, 226, 226); /* #e2e2e2 */\n}\n.icon-rounded {\n\tborder-radius: 1.5em;\n}\n/*\n * Sizes\n *\n * 5 preset sizes, simply change the font-size or add your custom class.\n *\n */\n.icon-small {\n\tfont-size: 1em;\n}\n.icon-mid {\n\tfont-size: 2em;\n}\n.icon-large {\n\tfont-size: 4em;\n}\n.icon-extra-large {\n\tfont-size: 8em;\n}\n.icon-huge {\n\tfont-size: 12em;\n}\n\n/*\n * Icons\n *\n * Icons are somewhat grouped so that you can easily pick the ones you like\n * if the whole file is too large for your project.\n *\n */\n\n/* Home */\n.icon-home {\n\tposition: absolute;\n\ttop: 0;\n\tleft: .125em;\n\twidth: .25em;\n\theight: .5em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-home:before,\n.icon-home:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-style: solid;\n}\n.icon-home:before {\n\ttop: .5em;\n\tleft: 0;\n\twidth: .25em;\n\theight: .3125em;\n\tborder-width: .1875em .25em 0 .25em;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-home:after {\n\ttop: -.5em;\n\tleft: -.125em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .5em;\n\tborder-color: transparent transparent rgb(102, 102, 102) transparent; /* #666 */\n}\n\n/* Arrows */\n.icon-arrowRight,\n.icon-arrowLeft,\n.icon-arrowDown,\n.icon-arrowUp {\n\tposition: absolute;\n\twidth: .5em;\n\theight: .5em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-arrowRight:after,\n.icon-arrowLeft:after,\n.icon-arrowDown:after,\n.icon-arrowUp:after {\n\tcontent: \"\";\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .5em;\n\tborder-style: solid;\n}\n/* Arrows - Left and Right */\n.icon-arrowRight,\n.icon-arrowLeft {\n\ttop: .25em;\n}\n.icon-arrowRight {\n\tleft: 0;\n}\n.icon-arrowLeft {\n\tright: 0;\n}\n.icon-arrowRight:after,\n.icon-arrowLeft:after {\n\ttop: -.25em;\n}\n.icon-arrowRight:after {\n\tleft: .5em;\n\tborder-color: transparent transparent transparent rgb(102, 102, 102); /* #666 */\n}\n.icon-arrowLeft:after {\n\tright: .5em;\n\tborder-color: transparent rgb(102, 102, 102) transparent transparent; /* #666 */\n}\n/* Arrows -  Down and Up */\n.icon-arrowDown,\n.icon-arrowUp {\n\tleft: .25em;\n}\n.icon-arrowDown {\n\ttop: 0;\n}\n.icon-arrowUp,\n.icon-arrowDown:after {\n\ttop: .5em;\n}\n.icon-arrowDown:after,\n.icon-arrowUp:after {\n\tleft: -.25em;\n}\n.icon-arrowDown:after {\n\tborder-color: rgb(102, 102, 102) transparent transparent transparent; /* #666 */\n}\n.icon-arrowUp:after {\n\ttop: -1em;\n\tborder-color: transparent transparent rgb(102, 102, 102) transparent; /* #666 */\n}\n\n/* Comments */\n.icon-comment,\n.icon-comment-text {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 1em;\n\theight: .75em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n\t/* for browsers that supports */\n\tborder-radius: .125em;\n}\n.icon-comment:after,\n.icon-comment-text:before,\n.icon-comment-text:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tborder-style: solid;\n}\n.icon-comment-text:before {\n\ttop: .1875em;\n\tleft: .125em;\n\twidth: .75em;\n\theight: .125em;\n\tborder-width: .09375em 0;\n\tborder-color: rgb(249, 249, 249); /* #f9f9f9 */\n}\n.icon-comment:after,\n.icon-comment-text:after {\n\ttop: .75em;\n\tleft: .25em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .125em;\n\tborder-color: rgb(102, 102, 102) transparent transparent rgb(102, 102, 102); /* #666 */\n}\n\n/* Mail */\n.icon-mail {\n\tposition: absolute;\n\ttop: .15625em;\n\tleft: 0;\n\twidth: 1em;\n\theight: .75em;\n\tbackground-color: rgb(102, 102, 102); /*#666*/\n}\n.icon-mail:before,\n.icon-mail:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: 0;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .4em .5em;\n\tborder-style: solid;\n}\n.icon-mail:before {\n\ttop: 0;\n\tborder-color: rgb(249, 249, 249) transparent transparent transparent; /* #f9f9f9 */\n}\n.icon-mail:after {\n\ttop: -.0625em;\n\tborder-color: rgb(102, 102, 102) transparent transparent transparent; /* #666 */\n}\n\n/* Calendar */\n.icon-calendar{\n\tposition: absolute;\n\ttop: .125em;\n\tleft: 0;\n\twidth: .875em;\n\theight: .6875em;\n\tborder-width: .125em .0625em .0625em .0625em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-calendar:before{\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -.25em;\n\tleft: .125em;\n\twidth: .375em;\n\theight: .125em;\n\tborder-width: 0 .125em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-calendar:after{\n\tcontent: \"15\";\n\tposition: absolute;\n\ttop: -.25em;\n\tleft: .25em;\n\tfont-family: Arial, sans-serif;\n\tfont-size: .5em;\n\tfont-weight: bold;\n\tcolor: rgb(102, 102, 102); /* #666 */\n}\n\n/* Plus */\n.icon-plus,\n.icon-plus:after {\n\tposition: absolute;\n\twidth: .375em;\n\theight: .375em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-plus {\n\ttop: 0;\n\tleft: 0;\n\tborder-width: 0 .25em .25em 0;\n}\n.icon-plus:after {\n\tcontent: \"\";\n\ttop: .375em;\n\tleft: .375em;\n\tborder-width: .25em 0 0 .25em;\n}\n\n/* Minus */\n.icon-minus {\n\tposition: absolute;\n\ttop: .375em;\n\tleft: 0;\n\twidth: 1em;\n\theight: .25em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n\n/* File */\n.icon-file {\n\tposition: absolute;\n\ttop: 0;\n\tleft: .125em;\n\twidth: .5em;\n\theight: .75em;\n\tborder-width: .125em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-file:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -.125em;\n\tleft: -.125em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .15625em;\n\tborder-style: solid;\n\tborder-color: rgb(255, 255, 255) rgb(102, 102, 102) rgb(102, 102, 102) rgb(255, 255, 255); /* #fff and #666 - #fff has to mach body bg*/\n}\n.icon-square .icon-file:before,\n.icon-rounded .icon-file:before {\n\tborder-color: rgb(242, 242, 242) rgb(102, 102, 102) rgb(102, 102, 102) rgb(242, 242, 242); /* #f2f2f2 and #666 - #f2f2f2 has to mach with .icon-square and .icon-rounded bg*/\n}\n\n/* Folder */\n.icon-folder {\n\tposition: absolute;\n\ttop: .125em;\n\tleft: 0;\n\twidth: 1em;\n\theight: .875em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n\t/* for browsers that supports */\n\tborder-bottom-left-radius: .0625em;\n\tborder-bottom-right-radius: .0625em;\n}\n.icon-folder:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -.125em;\n\tleft: .125em;\n\twidth: .375em;\n\theight: .125em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n\t/* for browsers that supports */\n\tborder-top-left-radius: .0625em;\n\tborder-top-right-radius: .0625em;\n}\n\n/* Tag */\n.icon-tag {\n\tposition: absolute;\n\ttop: 0;\n\tleft: .25em;\n\twidth: .5em;\n\theight: .75em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n\t/* for browsers that supports */\n\tborder-top-left-radius: .0625em;\n\tborder-top-right-radius: .0625em;\n}\n.icon-tag:before,\n.icon-tag:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .75em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .125em;\n\tborder-style: solid;\n}\n.icon-tag:before {\n\tleft: 0;\n\tborder-color: rgb(102, 102, 102) transparent transparent rgb(102, 102, 102); /* #666 */\n}\n.icon-tag:after {\n\tleft: .25em;\n\tborder-color: rgb(102, 102, 102) rgb(102, 102, 102) transparent transparent; /* #666 */\n}\n\n/* Desktop */\n.icon-desktop {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: .875em;\n\theight: .625em;\n\tborder-width: .0625em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-desktop:before,\n.icon-desktop:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-desktop:before {\n\ttop: .6875em;\n\tleft: .3125em;\n\twidth: .25em;\n\theight: .1875em;\n}\n.icon-desktop:after {\n\ttop: .875em;\n\tleft: .125em;\n\twidth: .625em;\n\theight: .0625em;\n}\n\n/* Tablet */\n.icon-tablet {\n\tposition: absolute;\n\ttop: .0625em;\n\tleft: 0;\n\twidth: .75em;\n\theight: .625em;\n\tborder-width: .125em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-tablet:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .28125em;\n\tleft: -.09375em;\n\twidth: .0625em;\n\theight: .0625em;\n\tbackground-color: rgb(255, 255, 255); /* #fff */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n\n/* Phone */\n.icon-phone {\n\tposition: absolute;\n\ttop: 0;\n\tleft: .1875em;\n\twidth: .5em;\n\theight: .75em;\n\tborder-width: .125em .0625em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-phone:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .78125em;\n\tleft: .21875em;\n\twidth: .0625em;\n\theight: .0625em;\n\tbackground-color: rgb(255, 255, 255); /* #fff */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n\n/* Menu */\n.icon-menu,\n.icon-menu:before,\n.icon-menu:after {\n\tposition: absolute;\n\tleft: 0;\n\twidth: 1em;\n\theight: .25em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-menu {\n\ttop: .0625em;\n}\n.icon-menu:before {\n\tcontent: \"\";\n\ttop: .3125em;\n}\n.icon-menu:after {\n\tcontent: \"\";\n\ttop: .625em;\n}\n\n/* Download  and Upload */\n.icon-download,\n.icon-upload {\n\tposition: absolute;\n\tleft: .375em;\n\twidth: .25em;\n\theight: .5em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-download {\n\ttop: 0;\n}\n.icon-upload {\n\ttop: .25em;\n}\n.icon-download:before,\n.icon-upload:before {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: -.125em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .25em;\n\tborder-style: solid;\n}\n.icon-download:before {\n\ttop: .5em;\n\tborder-color: rgb(102, 102, 102) transparent transparent transparent; /* #666 */\n}\n.icon-upload:before {\n\ttop: -.5em;\n\tborder-color: transparent transparent rgb(102, 102, 102) transparent; /* #666 */\n}\n.icon-download:after,\n.icon-upload:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: -.375em;\n\twidth: .75em;\n\theight: .125em;\n\tborder-width: 0 .125em .125em .125em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-download:after {\n\ttop: .75em;\n}\n.icon-upload:after {\n\ttop: .5em;\n}\n\n/* Page Templates */\n.icon-tpl-full,\n.icon-tpl-side-r,\n.icon-tpl-side-l {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 1em;\n\theight: .25em;\n\tbackground-color: rgb(102, 102, 102);\n}\n.icon-tpl-full:after,\n.icon-tpl-side-r:before,\n.icon-tpl-side-r:after,\n.icon-tpl-side-l:before,\n.icon-tpl-side-l:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .3125em;\n\theight: .6875em;\n\tbackground-color: rgb(102, 102, 102);\n}\n.icon-tpl-full:after,\n.icon-tpl-side-r:before,\n.icon-tpl-side-l:before {\n\tleft: 0;\n}\n.icon-tpl-full:after {\n\twidth: 1em;\n}\n.icon-tpl-side-r:before,\n.icon-tpl-side-l:after {\n\twidth: .6875em;\n}\n.icon-tpl-side-r:after,\n.icon-tpl-side-l:before {\n\twidth: .25em;\n}\n.icon-tpl-side-r:after {\n\tleft: .75em;\n}\n.icon-tpl-side-l:after {\n\tleft: .3125em;\n}\n\n/* Views */\n/* List view */\n.icon-list-view,\n.icon-list-view:before,\n.icon-list-view:after {\n\tposition: absolute;\n\twidth: .0625em;\n\theight: .25em;\n\tborder-width: 0 .6875em 0 .25em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102);\n}\n.icon-list-view {\n\ttop: .0625em;\n\tleft: 0;\n}\n.icon-list-view:before,\n.icon-list-view:after {\n\tcontent: \"\";\n\tleft: -.25em;\n}\n.icon-list-view:before {\n\ttop: .3125em;\n}\n.icon-list-view:after {\n\ttop: .625em;\n}\n/* Grid view */\n.icon-grid-view,\n.icon-grid-view:before {\n\tposition: absolute;\n\twidth: .0625em;\n\theight: .46875em;\n\tborder-width: 0 .46875em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102);\n}\n.icon-grid-view {\n\ttop: 0;\n\tleft: 0;\n}\n.icon-grid-view:before {\n\tcontent: \"\";\n\ttop: .53125em;\n\tleft: -.46875em;\n}\n\n/* Camera */\n.icon-camera {\n\tposition: absolute;\n\ttop: .25em;\n\tleft: 0;\n\twidth: .75em;\n\theight: .5em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-camera:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: .5em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .25em;\n\tborder-style: solid;\n\tborder-color: transparent rgb(102, 102, 102) transparent transparent; /* #666 */\n}\n\n/* Image */\n.icon-image {\n\tposition: absolute;\n\ttop: .125em;\n\tleft: 0;\n\twidth: .875em;\n\theight: .625em;\n\tborder-width: .0625em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\t/* for browsers that supports */\n\tborder-radius: .0625em;\n}\n.icon-image:before,\n.icon-image:after {\n\tcontent: \"\";\n\tposition: absolute;\n\tbottom: 0;\n\twidth: 0;\n\theight: 0;\n\tborder-style: solid;\n\tborder-color: transparent transparent rgb(102, 102, 102) transparent; /* #666 */\n}\n.icon-image:before {\n\tleft: 0;\n\tborder-width: .25em .25em .125em .125em;\n}\n.icon-image:after {\n\tright: 0;\n\tborder-width: .25em .25em .375em .375em;\n}\n\n/* Player controls */\n/* Play */\n.icon-play {\n\tposition: absolute;\n\ttop: 0;\n\tleft: .1875em;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .5em .625em;\n\tborder-style: solid;\n\tborder-color: transparent transparent transparent rgb(102, 102, 102); /* #666 */\n}\n/* Stop */\n.icon-stop {\n\tposition: absolute;\n\ttop: .0625em;\n\tleft: .0625em;\n\twidth: .875em;\n\theight: .875em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n/* Pause */\n.icon-pause,\n.icon-pause:after {\n\tposition: absolute;\n\twidth: .25em;\n\theight: .875em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-pause {\n\ttop: .0625em;\n\tleft: .21875em;\n}\n.icon-pause:after {\n\tcontent: \"\";\n\ttop: 0;\n\tleft: .3125em;\n}\n/* Forward, Next, Rewind and Prev */\n.icon-forward,\n.icon-next,\n.icon-rewind,\n.icon-prev,\n.icon-forward:after,\n.icon-next:before,\n.icon-rewind:after,\n.icon-prev:before {\n\tposition: absolute;\n\twidth: 0;\n\theight: 0;\n\tborder-width: .4375em;\n\tborder-style: solid;\n}\n.icon-forward,\n.icon-next,\n.icon-rewind,\n.icon-prev {\n\ttop: .0625em;\n}\n.icon-forward:after,\n.icon-next:before,\n.icon-rewind:after,\n.icon-prev:before,\n.icon-next:after,\n.icon-prev:after {\n\tcontent: \"\";\n\ttop: -.4375em;\n}\n.icon-forward,\n.icon-next,\n.icon-forward:after,\n.icon-next:before {\n\tborder-color: transparent transparent transparent rgb(102, 102, 102); /* #666 */\n}\n.icon-rewind,\n.icon-prev,\n.icon-rewind:after,\n.icon-prev:before {\n\tborder-color: transparent rgb(102, 102, 102) transparent transparent; /* #666 */\n}\n.icon-forward {\n\tleft: .0625em;\n}\n.icon-rewind {\n\tright: .0625em;\n}\n.icon-next,\n.icon-forward:after,\n.icon-next:before {\n\tleft: 0;\n}\n.icon-prev,\n.icon-rewind:after,\n.icon-prev:before {\n\tright: 0;\n}\n.icon-next:after,\n.icon-prev:after {\n\tposition: absolute;\n\twidth: .125em;\n\theight: .875em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-next:after {\n\tleft: .4375em;\n}\n.icon-prev:after {\n\tright: .4375em;\n}\n\n/* Stats */\n.icon-stats,\n.icon-stats:before {\n\tposition: absolute;\n\twidth: .3125em;\n\tborder-width: 0 .1875em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-stats {\n\ttop: 0;\n\tleft: 0;\n\theight: .875em;\n}\n.icon-stats:before {\n\tcontent: \"\";\n\ttop: .3125em;\n\tleft: .0625em;\n\theight: .5625em;\n}\n.icon-stats:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .875em;\n\tleft: -.1875em;\n\twidth: 1em;\n\theight: .125em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n\n/* Battery */\n.icon-battery-empty,\n.icon-battery-1_4,\n.icon-battery-half,\n.icon-battery-3_4,\n.icon-battery-full {\n\tposition: absolute;\n\ttop: .25em;\n\tleft: 0;\n\twidth: .75em;\n\theight: .375em;\n\tborder-width: .0625em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102); /* #666 */\n\tbackground-color: rgb(249, 249, 249); /* #f9f9f9 */\n}\n.icon-battery-empty:after,\n.icon-battery-1_4:after,\n.icon-battery-half:after,\n.icon-battery-3_4:after,\n.icon-battery-full:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: .0625em;\n\tleft: .8125em;\n\twidth: .125em;\n\theight: .25em;\n\tbackground-color: rgb(102, 102, 102); /* #666 */\n}\n.icon-battery-1_4:before,\n.icon-battery-half:before,\n.icon-battery-3_4:before,\n.icon-battery-full:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\theight: .375em;\n\tbackground-color: rgb(153, 153, 153); /* #999 */\n}\n.icon-battery-1_4:before {\n\twidth: .1875em;\n}\n.icon-battery-half:before {\n\twidth: .375em;\n}\n.icon-battery-3_4:before {\n\twidth: .5625em;\n}\n.icon-battery-full:before {\n\twidth: .75em;\n}\n\n/* Sound */\n.icon-sound-mute,\n.icon-sound-normal,\n.icon-sound-loud {\n\tposition: absolute;\n\ttop: .375em;\n\tleft: .09375em;\n\twidth: .25em;\n\theight: .25em;\n\tbackground-color: rgb(102, 102, 102);\n}\n.icon-sound-mute:before,\n.icon-sound-normal:before,\n.icon-sound-loud:before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -.3125em;\n\tleft: -.3125em;\n\twidth: .375em;\n\theight: .375em;\n\tborder-width: .25em;\n\tborder-style: solid;\n\tborder-color: transparent rgb(102, 102, 102) transparent transparent;\n}\n.icon-sound-normal:after,\n.icon-sound-loud:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -.125em;\n\tleft: .625em;\n\twidth: .0625em;\n\theight: .53125em;\n\tborder-style: solid;\n\tborder-color: rgb(102, 102, 102);\n}\n.icon-sound-normal:after {\n\tborder-width: 0 0 0 .0625em;\n}\n.icon-sound-loud:after {\n\tborder-width: 0 .0625em;\n}\n", ""]);

// exports


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "want_to_see_you.mp3";

/***/ })
/******/ ]);