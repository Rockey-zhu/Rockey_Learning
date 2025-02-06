//主要思想

//基础的拖放算法如下所示：
//1.在 mousedown 上 —— 根据需要准备要移动的元素（也许创建一个它的副本，向其中添加一个类或其他任何东西）。
//2.然后在 mousemove 上，通过更改 position:absolute 情况下的 left/top 来移动它。
//3.在 mouseup 上 —— 执行与完成的拖放相关的所有行为。

    function makeEaseOut(timing) {
      return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
      }
    }

    function bounce(timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }

    function quad(timeFraction) {
      return Math.pow(timeFraction, 2);
    }

    ball.onclick = function() {

      let height = field.clientHeight - ball.clientHeight;
      let width = 100;

      animate({
        duration: 2000,
        timing: makeEaseOut(bounce),
        draw: function(progress) {
          ball.style.top = height * progress + 'px'
        }
      });

      animate({
        duration: 2000,
        timing: makeEaseOut(quad),
        draw: function(progress) {
          ball.style.left = width * progress + "px"
        }
      });
    }