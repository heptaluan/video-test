$(function () {


  var initTime = 8000

  // 加载页面
  NumAutoPlusAnimation('loading-arrow', {
    time: initTime,
    num: 100,
    regulator: 50
  })

  setTimeout(function () {
    $('#loading').fadeOut(500);
  }, initTime - 1000);

  // 首页
  setTimeout(function () {
    $('.num1').fadeIn(500);
  }, initTime);
  setTimeout(function () {
    $('.num2').fadeIn(500);
  }, initTime + 500);
  setTimeout(function () {
    $('.num3').fadeIn(500);
  }, initTime + 1000);
  setTimeout(function () {
    $('.num4').fadeIn(500);
  }, initTime + 1500);

  // 去往视频页面
  // let startX, startY, endX, endY, distanceX, distanceY
  // $('body').bind('touchstart', function (e) {
  //   startX = e.originalEvent.changedTouches[0].pageX
  //   startY = e.originalEvent.changedTouches[0].pageY
  // });
  // $('#slide').on('touchmove', function (e) {
  //   endX = e.originalEvent.changedTouches[0].pageX;
  //   endY = e.originalEvent.changedTouches[0].pageY;
  //   distanceX = endX - startX;
  //   distanceY = endY - startY;
  //   if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
  //     $('#fm').fadeOut(500);
  //     $('#btn-group').fadeIn(500)
  //     var promise = video.play();
  //     if (promise) {
  //       promise.catch(function (error) { console.log(error) });
  //     }
  //   }
  // });

  const video = document.getElementById('video')
  enableInlineVideo(video)
  video.setAttribute('playsinline', '')
  $('#slide').click(function () {
    $('#fm').fadeOut(500);
    $('#btn-group').fadeIn(500)
    video.play();
  })


  // 弹窗一
  $('#right-btn1').click(function () {
    if (!$('#layout1').is(':hidden')) {
      $('#layout1').fadeOut(500)
    } else {
      $('#layout1').fadeIn(500).css('display', 'flex')
    }
  })

  $('#layout1').click(function (e) {
    if (e.target.id === 'layout1') {
      $('#layout1').fadeOut(500)
    }
  })

  // 弹窗二
  $('#right-btn2').click(function () {
    if (!$('#layout1').is(':hidden')) {
      $('#layout1').fadeOut(500)
    } else {
      const time = video.currentTime
      if (time > 6 && time < 14) {
        showMask(1)
      } else if (time > 15 && time < 21) {
        showMask(2)
      } else if (time > 29 && time < 37) {
        showMask(3)
      } else if (time > 39 && time < 47) {
        showMask(4)
      } else if (time > 58 && time < 65) {
        showMask(5)
      } else if (time > 67 && time < 73) {
        showMask(6)
      } else if (time > 75 && time < 81) {
        showMask(7)
      } else if (time > 105 && time < 112) {
        showMask(8)
      } else if (time > 114 && time < 121) {
        showMask(9)
      } else if (time > 123 && time < 129) {
        showMask(10)
      } else if (time > 137 && time < 142) {
        showMask(11)
      } else if (time > 144 && time < 150) {
        showMask(12)
      } else if (time > 171 && time < 175) {
        showMask(13)
      } else if (time > 197 && time < 205) {
        showMask(14)
      } else if (time > 214 && time < 221) {
        showMask(15)
      } else if (time > 237 && time < 244) {
        showMask(16)
      } else if (time > 246 && time < 253) {
        showMask(17)
      }
    }
  })
  $('#layout2 .close-btn').click(function () {
    $('#layout2').fadeOut(500)
    video.play()
  })

  function showMask(index) {
    $('#layout2').fadeIn(500).css('display', 'flex')
    $('.layout2 .box').css({
      background: `url(./images/list/${index}.png) no-repeat center center`,
      backgroundSize: 'contain'
    })
    video.pause()
  }

  // 列表按钮
  $('#btn-list .title').click(function () {
    if (!$(this).parents('li').find('.sub-box').is(':hidden')) {
      $(this).parents('li').find('.sub-box').slideUp()
    } else {
      $(this).parents('li').siblings().find('.sub-box').slideUp()
      $(this).parents('li').find('.sub-box').slideDown(500)
    }
  })

  // 视频跳转
  $('#btn-list .sub-list, #btn-list .title').click(function () {
    if ($(this).attr('time')) {
      video.currentTime = $(this).attr('time') | 0
      console.log(video.currentTime)
      video.play()
    }
  })



  // ===========================================================================
  // helpers
  function NumAutoPlusAnimation(targetEle, options) {
    options = options || {}
    var $this = document.getElementById(targetEle),
      time = options.time || $this.data('time'),      // 总时间
      finalNum = options.num || $this.data('value'),  // 要显示的真实数值
      regulator = options.regulator || 100,           // 调速器
      step = finalNum / (time / regulator),           // 默认 30ms
      count = 0,
      initial = 0

    var timer = setInterval(function () {
      count = count + step
      if (count >= finalNum) {
        clearInterval(timer)
        count = finalNum
      }
      var t = Math.floor(count)
      if (t == initial) return
      initial = t
      $this.innerHTML = initial + '%'
    }, 30)
  }

})